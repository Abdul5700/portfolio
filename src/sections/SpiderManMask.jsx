import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BackgroundBeams } from "../components/BackgroundBeams";
import bgTextureLines from "../../public/images/movieposter.avif";
import spider from "../../public/images/spider.jpg";
import SpiderManSymbiote from "../components/Spider-man-symbiote.jsx";

const SpiderManMask = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [revealed, setRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const finalMaskScale = isMobile ? 0.046 : 0.062;
  const finalMaskPosition = isMobile ? [0, 0.2, 0] : [0, 0, 0];

  const moveMask = (event) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePos({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 5, y: ((event.clientY - rect.top) / rect.height - 0.5) * 5 });
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] pt-20">
      <div className="pointer-events-none absolute inset-0"><div className="absolute inset-0 bg-center" style={{ backgroundImage: `url(${spider})` }} /><div className="absolute inset-0 bg-center opacity-15" style={{ backgroundImage: `url(${bgTextureLines})` }} /></div>
      <div className="pointer-events-none absolute inset-0 opacity-70"><BackgroundBeams /></div>
      <div className="relative z-10 h-[550px] w-full max-w-[950px] cursor-pointer md:h-[700px]" onMouseMove={moveMask} onMouseEnter={() => setRevealed(true)} onMouseLeave={() => { setRevealed(false); setMousePos({ x: 0, y: 0 }); }} onClick={() => setRevealed((value) => !value)}>
        <img src="/images/hero.png" alt="Abdul Khadar I" className="absolute inset-0 z-10 h-full w-full object-cover object-top" />
        <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500" style={{ opacity: revealed ? 1 : 0.18 }}>
          <Canvas dpr={[1, 1]} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{ position: [0, 0, -12], fov: 22, near: 0.1, far: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={1.7} /><directionalLight position={[3, 5, 5]} intensity={3} color="#ffffff" />
              <SpiderManSymbiote wireframeMode={!revealed} scale={finalMaskScale} position={finalMaskPosition} mousePos={mousePos} />
            </Suspense>
          </Canvas>
        </div>
        <p className="pointer-events-none absolute bottom-5 left-5 z-30 text-[10px] uppercase tracking-[0.22em] text-white/70 md:bottom-8 md:left-8">{isMobile ? "Tap to reveal mask" : "Hover to reveal mask"}</p>
      </div>
    </section>
  );
};

export default SpiderManMask;
