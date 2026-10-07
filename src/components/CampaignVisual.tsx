import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StageNode {
  id: string;
  label: string;
  sub: string;
  desc: string;
  x: number;
  y: number;
  z: number;
  baseRadius: number;
}

const STAGES: StageNode[] = [
  {
    id: 'campaign',
    label: 'Campaign',
    sub: '01 · Architecture',
    desc: 'Funnel mapping, objective calibration & Advantage+ budget structure',
    x: -240,
    y: 40,
    z: -40,
    baseRadius: 18,
  },
  {
    id: 'audience',
    label: 'Audience',
    sub: '02 · Targeting',
    desc: 'Broad algorithmic delivery, custom retargeting & lookalike clustering',
    x: -140,
    y: -50,
    z: 20,
    baseRadius: 18,
  },
  {
    id: 'creative',
    label: 'Creative',
    sub: '03 · Angles',
    desc: 'Hook, Hold & Offer matrix stopping feed drop-off in first 3 seconds',
    x: -30,
    y: 35,
    z: 70,
    baseRadius: 20,
  },
  {
    id: 'data',
    label: 'Data',
    sub: '04 · Tracking',
    desc: 'Server-side CAPI events & Meta Pixel signal integrity verification',
    x: 70,
    y: -45,
    z: 10,
    baseRadius: 18,
  },
  {
    id: 'optimization',
    label: 'Optimization',
    sub: '05 · Diagnostics',
    desc: 'Cost per acquisition rules, diagnostic ratios & learning phase management',
    x: 170,
    y: 30,
    z: -25,
    baseRadius: 18,
  },
  {
    id: 'growth',
    label: 'Growth',
    sub: '06 · Scale',
    desc: 'Sustainable vertical & horizontal budget expansion without ad fatigue',
    x: 260,
    y: -30,
    z: 50,
    baseRadius: 22,
  },
];

interface Particle {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
}

export const CampaignVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStage, setActiveStage] = useState<StageNode>(STAGES[2]); // Default focus on Creative
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isVisibleRef = useRef(true);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseRef.current.targetX = x * 0.45;
    mouseRef.current.targetY = y * 0.35;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Safe check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)')?.matches;

    // Safe IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisibleRef.current = entry.isIntersecting;
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
    }

    // Initialize flowing data packets
    const particles: Particle[] = [
      { sourceIdx: 0, targetIdx: 1, progress: 0.2, speed: 0.007 },
      { sourceIdx: 1, targetIdx: 2, progress: 0.6, speed: 0.008 },
      { sourceIdx: 2, targetIdx: 3, progress: 0.1, speed: 0.007 },
      { sourceIdx: 3, targetIdx: 4, progress: 0.8, speed: 0.009 },
      { sourceIdx: 4, targetIdx: 5, progress: 0.4, speed: 0.007 },
    ];

    const resize = () => {
      try {
        if (!canvas || !containerRef.current) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = Math.max(300, containerRef.current.clientWidth || 800);
        const height = Math.max(340, Math.min(440, width * 0.48));

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      } catch {
        // Fallback safely if canvas scaling fails
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      try {
        animationFrameId = requestAnimationFrame(render);

        if (!isVisibleRef.current) return;

        const width = containerRef.current ? Math.max(300, containerRef.current.clientWidth || 800) : 800;
        const height = Math.max(340, Math.min(440, width * 0.48));

      ctx.clearRect(0, 0, width, height);

      time += prefersReducedMotion ? 0.002 : 0.015;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const angleY = mouseRef.current.x + Math.sin(time * 0.35) * 0.08;
      const angleX = -mouseRef.current.y + Math.cos(time * 0.25) * 0.05;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const fov = 480;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D nodes to 2D
      const scaleFactor = Math.min(1, Math.max(0.65, width / 780));

      const projected = STAGES.map((node, idx) => {
        // Individual micro float
        const floatY = Math.sin(time * 1.2 + idx * 1.1) * 6;
        const rawX = node.x * scaleFactor;
        const rawY = (node.y + floatY) * scaleFactor;
        const rawZ = node.z * scaleFactor;

        // Y-axis rotation
        const x1 = rawX * cosY - rawZ * sinY;
        const z1 = rawX * sinY + rawZ * cosY;

        // X-axis rotation
        const y2 = rawY * cosX - z1 * sinX;
        const z2 = rawY * sinX + z1 * cosX;

        // Perspective scale
        const perspective = fov / (fov + z2 + 100);
        const px = centerX + x1 * perspective;
        const py = centerY + y2 * perspective;
        const radius = Math.max(8, node.baseRadius * perspective * scaleFactor);

        return {
          ...node,
          px,
          py,
          pz: z2,
          radius,
          perspective,
          alpha: Math.min(1, Math.max(0.35, (z2 + 200) / 320)),
        };
      });

      // Sort by depth (painters algorithm for z-layering)
      const sorted = [...projected].sort((a, b) => a.pz - b.pz);

      // Draw subtle background grid/datum lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = -2; i <= 2; i++) {
        const y = centerY + i * 50 * scaleFactor;
        ctx.moveTo(centerX - 320 * scaleFactor, y);
        ctx.lineTo(centerX + 320 * scaleFactor, y);
      }
      ctx.stroke();

      // Draw vector data paths between consecutive stages
      for (let i = 0; i < projected.length - 1; i++) {
        const p1 = projected[i];
        const p2 = projected[i + 1];

        // Gradient path line
        const grad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
        grad.addColorStop(0, 'rgba(14, 165, 233, 0.25)');
        grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.45)');
        grad.addColorStop(1, 'rgba(14, 165, 233, 0.25)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 * ((p1.perspective + p2.perspective) / 2);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);

        // Subtle curved bezier bridge
        const midX = (p1.px + p2.px) / 2;
        const midY = (p1.py + p2.py) / 2 - 12 * scaleFactor;
        ctx.quadraticCurveTo(midX, midY, p2.px, p2.py);
        ctx.stroke();
      }

      // Update & render flowing data packets
      if (!prefersReducedMotion) {
        particles.forEach((pt) => {
          pt.progress += pt.speed;
          if (pt.progress >= 1) {
            pt.progress = 0;
          }

          const p1 = projected[pt.sourceIdx];
          const p2 = projected[pt.targetIdx];
          const midX = (p1.px + p2.px) / 2;
          const midY = (p1.py + p2.py) / 2 - 12 * scaleFactor;

          // Quadratic bezier interpolation: (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
          const t = pt.progress;
          const invT = 1 - t;
          const curX = invT * invT * p1.px + 2 * invT * t * midX + t * t * p2.px;
          const curY = invT * invT * p1.py + 2 * invT * t * midY + t * t * p2.py;

          // Render glowing pulse
          ctx.beginPath();
          ctx.arc(curX, curY, 2.8 * p1.perspective, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#0ea5e9';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        });
      }

      // Draw Nodes in depth order
      sorted.forEach((node) => {
        const isSelected = activeStage.id === node.id;

        // Outer ambient glow ring
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, node.radius * 1.7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(14, 165, 233, 0.08)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.px, node.py, node.radius * 1.35, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Main Node Circle
        ctx.beginPath();
        ctx.arc(node.px, node.py, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#0e2238' : '#0b1322';
        ctx.fill();

        ctx.strokeStyle = isSelected
          ? 'rgba(56, 189, 248, 0.85)'
          : `rgba(255, 255, 255, ${0.12 * node.alpha})`;
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.stroke();

        // Inner Core Point
        ctx.beginPath();
        ctx.arc(node.px, node.py, Math.max(3, 4 * node.perspective), 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#38bdf8' : 'rgba(148, 163, 184, 0.6)';
        ctx.fill();

        // Label rendering (only for clear desktop views or active stage)
        const showLabel = width > 520 || isSelected;
        if (showLabel) {
          ctx.font = `${Math.round(11 * node.perspective)}px 'Plus Jakarta Sans', system-ui, sans-serif`;
          ctx.fillStyle = isSelected ? '#ffffff' : `rgba(203, 213, 225, ${node.alpha * 0.9})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.label, node.px, node.py + node.radius + 14 * node.perspective);
        }
      });
      } catch {
        // Safe graceful fallback if frame render fails
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [activeStage]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-2xl border border-white/10 bg-[#080d19]/90 shadow-2xl backdrop-blur-xl overflow-hidden group select-none"
    >
      {/* Editorial System Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-5 py-3.5 bg-white/[0.01]">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-semibold tracking-tight text-white uppercase tracking-wider">
            Campaign Intelligence System
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            Proprietary Architecture
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400/90">
          <span className="text-slate-400">Interactive Pipeline</span>
          <span>(Hover or tap nodes)</span>
        </div>
      </div>

      {/* 3D Perspective Canvas Container */}
      <div className="relative w-full flex items-center justify-center cursor-pointer">
        <canvas
          ref={canvasRef}
          className="w-full block"
          style={{ minHeight: '340px' }}
          onClick={(e) => {
            // Check click hit on nodes
            if (!canvasRef.current || !containerRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // Find closest stage
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            // Click detection approximate
            const step = rect.width / (STAGES.length + 1);
            const idx = Math.min(
              STAGES.length - 1,
              Math.max(0, Math.floor((clickX - step / 2) / step))
            );
            setActiveStage(STAGES[idx]);
          }}
        />

        {/* Ambient background depth scrim */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(14,165,233,0.06),transparent_75%)]"
          aria-hidden="true"
        />
      </div>

      {/* Stage Selector Bar & Active Telemetry Feed */}
      <div className="border-t border-white/5 bg-[#060a14] px-4 sm:px-6 py-4">
        {/* Stage Pills Navigation */}
        <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 no-scrollbar">
          {STAGES.map((stage) => {
            const isCurrent = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                <span>{stage.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-[11px]">{activeStage.sub}:</span>
            <span className="text-white font-medium">{activeStage.desc}</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono shrink-0">
            Phase {STAGES.findIndex((s) => s.id === activeStage.id) + 1} of 6
          </div>
        </div>
      </div>
    </div>
  );
};
