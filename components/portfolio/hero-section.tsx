"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLHeadingElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const finalContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const finalContent = finalContentRef.current

    if (!section || !text1 || !text2 || !finalContent) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    })

    // Animation Sequence:
    // 1. "안녕하세요" fades OUT
    // 2. "웹 퍼블리셔 임성광..." fades IN -> OUT
    // 3. "환영합니다" fades IN (Final)

    tl.to(text1, { opacity: 0, scale: 0.9, duration: 1 }) // Hello out
      .to(text2, { opacity: 1, scale: 1, duration: 1 })   // Publisher in
      .to(text2, { opacity: 0, scale: 1.1, duration: 1 }, "+=0.5") // Publisher out
      .to(finalContent, { opacity: 1, scale: 1, duration: 1 }) // Welcome in

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Background gradient with depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Centered Scroll Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center h-full flex items-center justify-center">
        
        {/* 1. 안녕하세요 (Initially Visible) */}
        <h2
          ref={text1Ref}
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight"
          style={{ opacity: 1 }}
        >
          안녕하세요
        </h2>

        {/* 2. Web Publisher (Transition) */}
        <div
          ref={text2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          style={{ opacity: 0, transform: "scale(0.9)" }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">
            Web Publisher
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            <span className="text-balance">웹 퍼블리셔</span>
            <br />
            <span className="text-primary">임성광입니다</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            웹 표준, 접근성, 반응형 웹, 그리고 커머스 경험을 전문으로 하는
            <br className="hidden md:block" /> 8년차 웹 퍼블리셔입니다.
          </p>
        </div>

        {/* 3. 환영합니다 (Final) */}
        <div
          ref={finalContentRef}
          className="flex flex-col items-center justify-center text-center"
          style={{ opacity: 0, transform: "scale(0.95)" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            <span className="text-primary">제 포트폴리오 오신것을</span>
            <br />
            <span className="text-balance text-foreground">환영합니다</span>
          </h2>
        </div>
      </div>

      {/* Scroll indicator (Optional, hints at scroll) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">스크롤하여 시작</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
