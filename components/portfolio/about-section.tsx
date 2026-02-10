"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const image = imageRef.current
    const content = contentRef.current

    if (!image || !content) return

    gsap.fromTo(
      image,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
        },
      }
    )

    gsap.fromTo(
      content,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
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
      className="py-32 px-6 bg-secondary overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column: Image & Contact - 4 columns */}
          <div ref={imageRef} className="md:col-span-4 space-y-8">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-lg">
                <Image
                  src="/my1.png"
                  alt="Portrait photo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
            </div>

            {/* Contact Info */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>limsungkwang@naver.com</span>
                </li>
                {/* <li className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span></span>
                </li> */}
                <li className="flex items-center gap-3 text-muted-foreground">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Seoul, Kangbuk-gu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bio & Details - 8 columns */}
          <div ref={contentRef} className="md:col-span-8 space-y-10">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                안녕하세요! <br className="md:hidden" />
                <span className="text-primary">8년차 웹 퍼블리셔</span> 임성광입니다.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                웹 표준과 접근성을 기반으로 HTML/CSS/JavaScript를 활용한 반응형 웹 구축 및 운영 유지보수를 담당해왔습니다.
                커머스 환경에서의 이벤트 페이지 제작, 프로모션 기획전 퍼블리싱에 전문성을 가지고 있습니다.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                "기획자, 디자이너, 개발자와의 원활한 커뮤니케이션을 중요하게 생각하며, <br />
                맡은 업무는 끝까지 책임지고 수행합니다."
              </blockquote>
            </div>

            {/* Core Skills */}
            <div>
              <h4 className="text-lg font-bold mb-4">주요 역량</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "시맨틱 HTML5",
                  "반응형 CSS3",
                  "ES6+ JavaScript",
                  "Sass/SCSS",
                  "Git/GitHub",
                  "웹 접근성",
                  "크로스 브라우징",
                  "성능 최적화",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background rounded-full border border-border text-sm text-foreground/80 font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certs Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  학력
                </h4>
                <ul className="space-y-4">
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">고려사이버대학교</h5>
                    <p className="text-xs text-muted-foreground mt-1">소프트웨어공학과 (졸업)</p>
                    <span className="text-xs text-muted-foreground/80 font-mono mt-2 block">2018.03 - 2020.02</span>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">인덕대학교</h5>
                    <p className="text-xs text-muted-foreground mt-1">건설정보학과 (졸업)</p>
                    <span className="text-xs text-muted-foreground/80 font-mono mt-2 block">2005.03 - 2011.02</span>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">용문고등학교</h5>
                    <p className="text-xs text-muted-foreground mt-1">졸업</p>
                    <span className="text-xs text-muted-foreground/80 font-mono mt-2 block">2002.03 - 2005.02</span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  자격증 & 교육
                </h4>
                <ul className="space-y-4">
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">GTQ 포토샵 1급</h5>
                    <p className="text-xs text-muted-foreground mt-1">한국생산성본부</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">HTML5와 CSS를 이용한 미니프로젝트 실무</h5>
                    <p className="text-xs text-muted-foreground mt-1">하이미디어컴퓨터학원 | 2014. 03 ~ 2014. 06</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <h5 className="font-bold text-sm">웹표준 접근성 & HTML5</h5>
                    <p className="text-xs text-muted-foreground mt-1">글로벌인재능력개발원 | 2013. 03 ~ 2013. 07</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
