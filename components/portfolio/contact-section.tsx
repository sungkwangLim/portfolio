"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

  export function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
  
    useEffect(() => {
      const form = formRef.current
  
      if (!form) return
  
      gsap.fromTo(
        form,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
  
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }, [])
  
    return (
      <section
        ref={sectionRef}
        className="py-32 px-6 bg-background overflow-hidden"
        aria-labelledby="contact-title"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2
              id="contact-title"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Contact
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              프로젝트나 협업 제안이 있으시다면 언제든 연락주세요. 
              새로운 기회에 대해 논의하는 것은 언제나 환영입니다.
            </p>
          </div>
  
          <form
            ref={formRef}
            action="https://formspree.io/f/xgolejkp"
            method="POST"
            className="space-y-6 bg-card p-8 md:p-12 rounded-2xl border border-border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                placeholder="메시지 남겨주세요"
              />
            </div>
  
            <button
              type="submit"
              className="group relative w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/25"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                메시지 보내기
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </form>

        {/* Alternative contact */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            이메일로 직접 연락하기:{" "}
            <a
              href="mailto:limsungkwang@naver.com"
              className="text-primary hover:underline"
            >
              limsungkwang@naver.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
