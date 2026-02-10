"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CalendarDays } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const career = [
  {
    period: "2025.11 — 2026.02",
    title: "UX 기획팀 선임연구원",
    company: "쇼핑엔티 (티알엔)",
    responsibilities: [
      "쇼핑엔티 서비스 UI 유지보수 및 운영",
      "쇼핑엔티 프로모션/이벤트 기획전 페이지 퍼블리싱 (100% 단독 담당)",
      "티알엔(TRN) 홈페이지 유지보수",
      "CSS3 인터랙션 효과 구현 및 UI 디테일 개선",
      "반응형 웹 퍼블리싱 및 모바일 최적화 작업",
      "JavaScript, jQuery 기반 동적인 UI 기능 개발",
      "기획자, 디자이너와의 협업을 통한 일정 준수 및 크로스브라우징 이슈 해결",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Figma", "VS Code", "Photoshop", "Adobe XD"],
  },
  {
    period: "2020.04 — 2022.02",
    title: "트랜스플랫폼그룹 과장",
    company: "디트라이브",
    responsibilities: [
      "넷마블스토어 고도화 및 운영 유지보수 (100% 담당)",
      "도요타 프리우스 모바일 카탈로그 신규 구축 (100% 담당)",
      "코웨이 마이크로 사이트 및 매트리스 사이트 신규 구축 (100% 담당)",
      "렉스턴 스포츠 마이크로 사이트 신규 구축 (100% 담당)",
      "하나금융파인드 고도화 (IE9~11 크로스브라우징 완벽 대응)",
      "코웨이 AR 카탈로그 자사몰 연동 및 프론트 고도화 (50% 참여)",
      "SK엔크린 운영 유지보수",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Git", "JIRA", "WIKI", "EditPlus"],
  },
  {
    period: "2019.12 — 2020.04",
    title: "퍼블리싱팀 과장",
    company: "(주)퓨즈 - OK저축은행",
    responsibilities: [
      "OK저축은행 PC main 고도화 퍼블리싱 (100% 담당)",
      "웹 표준 및 웹 접근성 준수 작업",
      "IE8~IE11 및 주요 브라우저 크로스브라우징",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "VS Code", "Photoshop"],
  },
  {
    period: "2019.08 — 2019.11",
    title: "프리랜서",
    company: "세종사이버대학교 / 중앙일보",
    responsibilities: [
      "세종사이버대학교 2020학년 봄학기 유지보수 (50% 참여)",
      "중앙일보 추석 광고 콘텐츠 설문조사 프론트 개발 (100% 담당)",
      "중앙일보 API 연동 및 데이터 파싱 작업",
      "웹 표준, 접근성 준수 및 동적 UI 개발",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "EditPlus", "Photoshop", "API"],
  },
  {
    period: "2017.11 — 2018.12",
    title: "CMU 디자인팀 대리",
    company: "머니투데이",
    responsibilities: [
      "머니투데이 및 계열사 운영 유지보수 (33% 참여)",
      "평창올림픽 특집 페이지 퍼블리싱 (100% 담당)",
      "2018 지방선거 특별 페이지 퍼블리싱 (100% 담당)",
      "미세먼지 비주얼 기사 데이터 시각화 및 인터랙티브 페이지 제작 (100% 담당)",
      "OPEN API를 이용한 서비스 적용 및 데이터 시각화",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "JIRA", "WIKI", "Sourcetree", "VS Code"],
  },
  {
    period: "2016.05 — 2017.10",
    title: "디자인팀 프리랜서",
    company: "아이엠씨코퍼레이션",
    responsibilities: [
      "금강보청기 웹사이트 퍼블리싱 (100% 담당)",
      "스와니코코 유지보수 (100% 담당)",
      "디지몬 마스터즈_무브게임즈 유지보수 (100% 담당)",
      "Cafe24, 고도몰, Wordpress 솔루션 커스텀 작업",
      "반응형 및 하이브리드 앱 적용",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Cafe24",
      "고도몰",
      "Wordpress",
      "EditPlus",
      "VS Code",
    ],
  },
  {
    period: "2014.07 — 2017.08",
    title: "퍼블리셔팀 대리",
    company: "제이앤케이미디어웍스",
    responsibilities: [
      "한국관광공사 시티투어 유지보수",
      "한국관광투자/산업기술보호협회 접근성 작업 (접근성 인증마크 획득)",
      "서울시 정책 접근성 작업",
      "젤리피쉬엔터테이먼트, 디자인스킨 등 다수 반응형 퍼블리싱",
      "알빵, 쿠폰주, 스탁해커 등 하이브리드 앱 퍼블리싱",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Dreamweaver",
      "VS Code",
      "Photoshop",
    ],
  },
]

export function CareerSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const items = itemsRef.current

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-background overflow-hidden"
      aria-labelledby="career-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Career
          </p>
          <h2
            id="career-title"
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12 md:space-y-0">
            {career.map((item, index) => (
              <div
                key={item.period}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el
                }}
                className={`relative md:flex md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 -translate-y-0.5 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
                    <div
                      className={`flex items-center gap-2 text-primary/80 font-mono text-xs mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 mb-4">
                      {item.company}
                    </p>
                    
                    <ul className={`mb-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className={`flex items-start text-sm text-muted-foreground/90 leading-relaxed ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}>
                          <span className={`mt-1.5 w-1.5 h-1.5 bg-primary rotate-45 flex-shrink-0 ${
                            index % 2 === 0 ? "md:ml-2 mr-2 md:mr-0" : "mr-2"
                          }`} />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
