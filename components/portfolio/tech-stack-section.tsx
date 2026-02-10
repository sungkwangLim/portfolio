"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type TechItem = {
  name: string
  code: string
  percentage: number
  description: string
  icon?: React.ReactNode
  color: string
}

type TechCategory = {
  title: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    title: "마크업",
    items: [
      {
        name: "HTML5",
        code: "HT",
        percentage: 85,
        description: "시맨틱 마크업, 웹 접근성, 웹 표준 준수, 크로스 브라우징",
        color: "#E34C26",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "스타일링",
    items: [
      {
        name: "CSS3",
        code: "CS",
        percentage: 85,
        description: "반응형 디자인, 인터랙션 효과, 애니메이션, 미디어 쿼리",
        color: "#1572B6",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
        ),
      },
      {
        name: "SCSS",
        code: "SC",
        percentage: 80,
        description: "CSS 전처리기, 변수, 믹스인, 중첩 규칙 활용",
        color: "#CC6699",
      },
    ],
  },
  {
    title: "스크립트",
    items: [
      {
        name: "JavaScript",
        code: "JS",
        percentage: 65,
        description: "ES6+, DOM 조작, 동적 UI 개발, 이벤트 핸들링",
        color: "#F7DF1E",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
        ),
      },
      {
        name: "jQuery",
        code: "jQ",
        percentage: 80,
        description: "동적 UI 개발, DOM 조작, 레거시 코드 유지보수",
        color: "#0769AD",
      },
    ],
  },
  {
    title: "프레임워크",
    items: [
      {
        name: "React 19",
        code: "Re",
        percentage: 50,
        description: "컴포넌트 기반 개발, 기초 hook 사용",
        color: "#61DAFB",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
          </svg>
        ),
      },
      {
        name: "Cafe24",
        code: "Ca",
        percentage: 70,
        description: "쇼핑몰 디자인 스킨 커스터마이징",
        color: "#2C2C2C",
      },
      {
        name: "GodoMall",
        code: "Go",
        percentage: 70,
        description: "고도몰 디자인 스킨 커스터마이징",
        color: "#FF3F3F",
      },
      {
        name: "Wordpress",
        code: "Wo",
        percentage: 60,
        description: "워드프레스 테마 유지보수, 커스터마이징",
        color: "#21759B",
      },
    ],
  },
  {
    title: "도구",
    items: [
      {
        name: "Git",
        code: "Gi",
        percentage: 70,
        description: "버전 관리, 협업 워크플로우",
        color: "#F05032",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1.1.98-1.1 1.73a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.75-.5-1.39-1.1-1.73V9.14c.4-.24.64-.67.64-1.14 0-.3-.1-.58-.28-.82l1.7-1.69 3.73 3.74c-.2.81.18 1.69.93 2.15v2.85c-.9 0-1.8.8-1.5 1.8.3 1.1 1.2 1.8 2.3 1.8 1.2 0 2.2-.9 2.2-2.2 0-1-.8-1.9-1.8-1.9h-.1v-3.76c.71-.38 1.1-1.29.75-2.09l-.02-.06L14.79 2.5a2.53 2.53 0 0 0-3.58 0L9.5 4.19l-7.9 7.91c-1 1-1 2.59 0 3.58l7.12 7.12a2.54 2.54 0 0 0 3.59 0l1.74-1.74-11.45-10.47zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1 .45-1 1-1z" />
          </svg>
        ),
      },
      {
        name: "VS Code",
        code: "VS",
        percentage: 90,
        description: "주력 에디터, 다양한 확장 프로그램 활용",
        color: "#007ACC",
      },
      {
        name: "JIRA",
        code: "JI",
        percentage: 70,
        description: "이슈 트래킹, 프로젝트 일정 관리",
        color: "#0052CC",
      },
      {
        name: "EditPlus",
        code: "Ed",
        percentage: 90,
        description: "코드 편집, 레거시 프로젝트 관리",
        color: "#E23D3E",
      },
    ],
  },
  {
    title: "디자인",
    items: [
      {
        name: "Figma",
        code: "Fi",
        percentage: 50,
        description: "디자인 시안 확인, 에셋 추출, 협업",
        color: "#F24E1E",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M15 15.6H9v3.4c0 1.66 1.34 3 3 3s3-1.34 3-3v-3.4zm0-3.6h-3v3.6h3v-3.6zM9 8.4h3v3.6H9V8.4zm0-6.4c-1.66 0-3 1.34-3 3v3.4c0 1.66 1.34 3 3 3h3V2h-3zm9 3c0-1.66-1.34-3-3-3v6.4h3V5zM6 15.6c0-1.66 1.34-3 3-3h3v3h-3v-3H6v3c0 1.66 1.34 3 3 3s3-1.34 3-3v-3H9v-3.4c-1.66 0-3 1.34-3 3v3.4z" />
          </svg>
        ),
      },
      {
        name: "Photoshop",
        code: "Ph",
        percentage: 50,
        description: "디자인 시안 확인",
        color: "#31A8FF",
      },
      {
        name: "Adobe XD",
        code: "Ad",
        percentage: 40,
        description: "디자인 시안 확인, 에샛 추출, 협업",
        color: "#FF61F6",
      },
    ],
  },
]

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const categoryRefs = useRef<HTMLDivElement[]>([])
  const progressRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const categories = categoryRefs.current
    const progressBars = progressRefs.current

    // Category Fade In
    categories.forEach((category, index) => {
      gsap.fromTo(
        category,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      )
    })

    // Progress Bar Animation
    progressBars.forEach((bar) => {
      const width = bar.dataset.width
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: width,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
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
      aria-labelledby="tech-stack-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Skills
          </h2>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                if (el) categoryRefs.current[index] = el
              }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Header: Icon + Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg text-white transition-all duration-300 shadow-lg"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.icon || (
                          <span className="font-mono font-bold text-lg">
                            {tech.code || tech.name.substring(0, 2)}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-foreground">
                        {tech.name}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">숙련도</span>
                        <span className="text-primary font-mono font-medium">
                          {tech.percentage}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          ref={(el) => {
                            if (el) progressRefs.current.push(el)
                          }}
                          data-width={`${tech.percentage}%`}
                          className="h-full rounded-full"
                          style={{ 
                            width: "0%", // Start at 0 for animation
                            background: "linear-gradient(90deg, #2563EB, #7C3AED)"
                          }} 
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
