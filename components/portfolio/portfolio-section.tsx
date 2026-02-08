"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "쇼핑엔티",
    description: "쇼핑엔티 서비스 UI 유지보수 및 프로모션/이벤트 기획전 페이지 퍼블리싱. CSS3 인터랙션 및 반응형 UI 구현.",
    image: "/projects/portfolio0.png",
    url: "https://www.shoppingntmall.com/",
    tags: ["E-Commerce", "이벤트/기획전", "유지보수"],
  },
  {
    id: 2,
    title: "넷마블스토어",
    description: "글로벌 게임 굿즈 커머스 사이트 고도화 및 운영 유지보수. IE9~11 크로스브라우징 및 신규 페이지 구축.",
    image: "/projects/portfolio5.png",
    url: "https://netmarblestore.com/",
    tags: ["E-Commerce", "크로스브라우징", "유지보수"],
  },
  {
    id: 3,
    title: "코웨이 마이크로사이트",
    description: "코웨이 브랜드 및 매트리스 마이크로 사이트 신규 구축.",
    image: "/projects/portfolio1.jpg",
    url: "https://www.dtribe.co.kr/portfolio.php?no=127",
    tags: ["마이크로사이트", "신규구축", "반응형 웹"],
  },
  {
    id: 4,
    title: "쌍용자동차 렉스턴",
    description: "렉스턴 스포츠 마이크로 사이트 신규 구축 퍼블리싱.",
    image: "/projects/portfolio2.jpg",
    url: "https://www.dtribe.co.kr/portfolio.php?no=125&more=0",
    tags: ["마이크로사이트", "신규구축", "반응형 웹"],
  },
  {
    id: 5,
    title: "롯데칠성 제로",
    description: "롯데칠성 제로 브랜드 마이크로 사이트 구축.",
    image: "/projects/portfolio3.jpg",
    url: "https://www.dtribe.co.kr/portfolio.php?no=125&more=0",
    tags: ["마이크로사이트", "신규구축", "반응형 웹"],
  },
  {
    id: 6,
    title: "하나금융파트너",
    description: "하나금융파트너 금융 브랜드 사이트 고도화. 웹 표준 준수 및 크로스브라우징 대응.",
    image: "/projects/portfolio4.jpg",
    url: "https://www.dtribe.co.kr/portfolio.php?no=125&more=0",
    tags: ["마이크로사이트", "고도화", "웹 표준", "크로스브라우징"],
  },
  {
    id: 7,
    title: "OK저축은행",
    description: "OK저축은행 PC 메인화면 고도화 퍼블리싱. 웹 접근성 준수.",
    image: "/projects/portfolio6.png",
    url: "https://www.oksavingsbank.com/",
    tags: ["메인화면 고도화", "웹 접근성", "페이지 스크롤"],
  },
  {
    id: 8,
    title: "머니투데이",
    description: "머니투데이 비주얼 기사 데이터 시각화 및 유지보수.",
    image: "/projects/portfolio7.jpg", // Placeholder or need to find if exists, defaulting to placeholder if not provided in list but it was in old list? Old list had project-4.jpg. User didn't give image for this. I will use placeholder or keep old if compatible. User provided empty line for image in markdown? No, just url. I'll use a placeholder or reuse old project-4 if appropriate. Let's use a generic one or empty string which triggers fallback. Actually user instructions imply I should use what's in portfolio.md. If missing, maybe use a default.
    url: "https://www.mt.co.kr/",
    tags: ["유지보수", "데이터 시각화"],
  },
  {
    id: 9,
    title: "금강보청기",
    description: "금강보청기 웹사이트 퍼블리싱.",
    image: "/projects/portfolio8.jpg",
    url: "http://www.kgdigital.co.kr",
    tags: ["브랜드 사이트", "신규구축"],
  },
  {
    id: 10,
    title: "스와니코코",
    description: "스와니코코 쇼핑몰 이벤트 작업 및 유지보수.",
    image: "/projects/portfolio9.jpg",
    url: "http://www.swanicoco.co.kr",
    tags: ["Cafe24", "이벤트", "유지보수"],
  },
  {
    id: 11,
    title: "한국제지",
    description: "한국제지 공식 웹사이트 퍼블리싱.",
    image: "/projects/portfolio10.jpg",
    url: "http://www.hankukpaper.com/ko/main/main.do",
    tags: ["브랜드 사이트", "신규구축"],
  },
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    const projectsContainer = projectsRef.current

    if (!section || !container || !projectsContainer) return

    const totalWidth = projectsContainer.scrollWidth - container.offsetWidth

    gsap.to(projectsContainer, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        anticipatePin: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen bg-secondary overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      <div ref={containerRef} className="h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2
            id="portfolio-title"
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Projects
          </h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-hidden">
          <div
            ref={projectsRef}
            className="flex gap-8 px-6 md:px-12"
            style={{ width: "fit-content" }}
          >
            {projects.map((project) => (
              <Link 
                href={project.url}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article
                  className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 bg-card">
                    <Image
                      src={project.image && project.image !== "" ? project.image : "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-md">
                      {project.description}
                    </p>

                    {/* View Project button - appears on hover */}
                    <div className="mt-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full text-sm">
                        Visit Site
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 text-muted-foreground text-sm font-mono hidden md:flex items-center gap-2">
          <span>Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
