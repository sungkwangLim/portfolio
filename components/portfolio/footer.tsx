"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} 웹 퍼블리셔 포트폴리오. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              >
                사이트맵
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
