"use client";

import { useEffect, useRef } from "react";

// bg-hex tile: 56x100px. Two zigzag paths per tile going top-to-bottom:
//   L: (28,0)->(0,16)->(0,48)->(28,64)->(28,100)
//   R: (28,0)->(56,16)->(56,48)->(28,64)->(28,100)
// Straight drops fall vertically at tile-center x positions.
export default function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c: HTMLCanvasElement = canvas;
    const g2d: CanvasRenderingContext2D = ctx;

    const TW = 56, TH = 100;
    let W = 0, H = 0, raf: number;

    function tilePts(col: number, row: number, z: "L"|"R"): [number,number][] {
      const ox = col*TW, oy = row*TH, sx = z === "L" ? 0 : TW;
      return [[28+ox,0+oy],[sx+ox,16+oy],[sx+ox,48+oy],[28+ox,64+oy],[28+ox,TH+oy]];
    }

    function posAt(col: number, baseRow: number, zags: ("L"|"R")[], T: number): [number,number] {
      const ti = Math.floor(T / 4);
      const si = Math.floor(T) % 4;
      const st = T - Math.floor(T);
      const p = tilePts(col, baseRow + ti, zags[Math.max(0, ti)] ?? "L");
      return [p[si][0]+(p[si+1][0]-p[si][0])*st, p[si][1]+(p[si+1][1]-p[si][1])*st];
    }

    type Drop = { col:number; baseRow:number; zags:("L"|"R")[]; T:number; speed:number; opacity:number; trailLen:number };

    function genZags(rows: number): ("L"|"R")[] {
      let cur: "L"|"R" = Math.random() > 0.5 ? "L" : "R";
      return Array.from({ length: rows }, () => {
        if (Math.random() > 0.70) cur = cur === "L" ? "R" : "L";
        return cur;
      });
    }

    function makeDrop(spread: boolean): Drop {
      const cols = Math.ceil(W / TW) + 1;
      const rows = Math.ceil(H / TH) + 4;
      return {
        col: Math.floor(Math.random() * cols),
        baseRow: -2,
        zags: genZags(rows),
        T: spread ? Math.random() * rows * 4 : Math.random() * 1.5,
        speed: 0.008 + Math.random() * 0.014,
        opacity: 0.5 + Math.random() * 0.35,
        trailLen: 2.0 + Math.random() * 1.5,
      };
    }

    let drops: Drop[] = [];

    function resize() {
      W = c.offsetWidth; H = c.offsetHeight;
      c.width = W * devicePixelRatio; c.height = H * devicePixelRatio;
      g2d.scale(devicePixelRatio, devicePixelRatio);
      drops = Array.from({ length: 12 }, () => makeDrop(true));
    }

    function drawGrid() {
      g2d.strokeStyle = "rgba(0,102,255,0.09)";
      g2d.lineWidth = 0.8;
      const cols = Math.ceil(W / TW) + 1;
      const rows = Math.ceil(H / TH) + 1;
      for (let row = -1; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const ox = col * TW, oy = row * TH;
          // Left zigzag: (28,0)→(0,16)→(0,48)→(28,64)
          g2d.beginPath();
          g2d.moveTo(28 + ox, 0 + oy);
          g2d.lineTo(0 + ox, 16 + oy);
          g2d.lineTo(0 + ox, 48 + oy);
          g2d.lineTo(28 + ox, 64 + oy);
          g2d.stroke();
          // Right zigzag: (28,0)→(56,16)→(56,48)→(28,64)
          g2d.beginPath();
          g2d.moveTo(28 + ox, 0 + oy);
          g2d.lineTo(56 + ox, 16 + oy);
          g2d.lineTo(56 + ox, 48 + oy);
          g2d.lineTo(28 + ox, 64 + oy);
          g2d.stroke();
        }
      }
    }

    function draw() {
      g2d.clearRect(0, 0, W, H);
      drawGrid();

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        d.T += d.speed;
        const maxT = (Math.ceil(H / TH) + 3) * 4;
        if (d.T > maxT) { drops[i] = makeDrop(false); continue; }

        const tailT = Math.max(0, d.T - d.trailLen);

        const path: [number,number][] = [posAt(d.col, d.baseRow, d.zags, tailT)];
        for (let j = Math.ceil(tailT); j <= Math.floor(d.T); j++) {
          path.push(posAt(d.col, d.baseRow, d.zags, j));
        }
        path.push(posAt(d.col, d.baseRow, d.zags, d.T));

        const u: [number,number][] = [path[0]];
        for (let j = 1; j < path.length; j++) {
          if (path[j][0] !== u[u.length-1][0] || path[j][1] !== u[u.length-1][1]) u.push(path[j]);
        }
        if (u.length < 2) continue;

        const [sx,sy] = u[0], [ex,ey] = u[u.length-1];
        if (ey < -30 || sy > H + 30) continue;

        const grad = g2d.createLinearGradient(sx, sy, ex, ey);
        grad.addColorStop(0, "rgba(0,102,255,0)");
        grad.addColorStop(1, `rgba(0,102,255,${d.opacity})`);
        g2d.beginPath(); g2d.moveTo(u[0][0], u[0][1]);
        for (let j = 1; j < u.length; j++) g2d.lineTo(u[j][0], u[j][1]);
        g2d.strokeStyle = grad; g2d.lineWidth = 2; g2d.stroke();
      }
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(c);
    resize();
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}
