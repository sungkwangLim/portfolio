import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { TechStackSection } from "@/components/portfolio/tech-stack-section"
import { PortfolioSection } from "@/components/portfolio/portfolio-section"
import { CareerSection } from "@/components/portfolio/career-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <section id="tech">
          <TechStackSection />
        </section>
        <section id="work">
          <PortfolioSection />
        </section>
        <section id="career">
          <CareerSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
