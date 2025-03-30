import Image from "next/image";
import Link from "next/link";
import Logo3D from "./logo3D";
import { Badge } from "./ui/badge";

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center gap-2"
          prefetch={false}
        >
          <Image
            src="/Techbk-logo.svg"
            alt="Techbk"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-[90vh] relative overflow-hidden bg-linear-to-b from-background to-muted">
          <div className="container relative p-4 py-6 flex md:flex-row flex-col justify-around items-center min-h-[90vh]">
            <div className="flex flex-col justify-center items-center md:items-start space-y-4">
              <div className="space-y-2 flex flex-col items-start">
                <Image
                  src="/Techbk-logo.svg"
                  width={350}
                  height={350}
                  alt="Techbk"
                  className="rounded-xl object-contain "
                  priority
                />
                <div className="px-4 py-2 space-y-2">
                  <p className="max-w-[600px] text-primary text-xl md:text-2xl font-medium">
                    Innovative Software Solutions
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a dynamic software development company specializing
                    in building scalable and efficient web applications. Our
                    expertise spans front-end development, back-end solutions,
                    and DevOps practices, delivering cutting-edge technology
                    solutions for modern businesses.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-row">
                <Link
                  href="#services"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Our Services
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative ">
              <Logo3D />
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What We Do
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of software development
                  services to help businesses thrive in the digital age.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Web Development</h3>
                      <p className="text-muted-foreground">
                        Custom web applications built with modern frameworks
                        like React, Next.js, and Vue.js, focusing on performance
                        and user experience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Backend Solutions</h3>
                      <p className="text-muted-foreground">
                        Scalable and secure backend systems using Node.js,
                        Python, and modern cloud infrastructure.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cloud & DevOps</h3>
                      <p className="text-muted-foreground">
                        Cloud infrastructure setup, containerization, and CI/CD
                        pipeline implementation for seamless deployment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Technical Consulting
                      </h3>
                      <p className="text-muted-foreground">
                        Expert guidance on technology stack selection,
                        architecture design, and digital transformation
                        strategies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/tech-stack.png"
                width="550"
                height="310"
                alt="Our Technology Stack"
                className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects we have completed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At <span className="font-bold">TecHBK</span>, we are dedicated
                  to providing the best possible solutions for our clients. Here
                  are some of the projects we have completed
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Badge className="border-green-600 text-green-600 border bg-transparent font-bold px-4 animate-pulse">New ✨</Badge>
                    Orah Energy
                  </h3>
                  <p className="text-muted-foreground">
                    Created a comprehensive website for Orah Energy to establish
                    a strong online presence and generate leads. The site
                    details their core services - Solar Energy (EPC), Advanced
                    Lighting, and Smart Metering - through dedicated sections,
                    including an interactive services slider. Key features
                    include clear calls-to-action, company information (mission,
                    vision, accreditations), and a breakdown of their process.
                    The project was built using Next.js for optimal performance
                    and SEO, with Tailwind CSS for a clean, accessible, and
                    fully responsive design.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://orahenergy.co.za/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src="/orah-energy.png"
                width="550"
                height="310"
                alt="Project"
                className="mx-auto aspect-video overflow-hidden rounded-xl  object-center sm:w-full lg:order-last"
              />
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/intobeing.png"
                width="550"
                height="310"
                alt="Project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Intobeing Placements</h3>
                  <p className="text-muted-foreground">
                    Developed the IntoBeing Placements website using Next.js and
                    TypeScript, enhancing user experience and increasing
                    visibility. Implemented a PostgreSQL database for robust
                    data management and efficient handling of candidate
                    information. Customized a modern, responsive layout using
                    Tailwind CSS, improving readability and engagement.
                    Optimized content for clarity and engagement, leading to
                    improved user interaction. Conducted on-page SEO
                    improvements, boosting website visibility and search engine
                    ranking.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://intobeingplacements.co.za/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Our Expert
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Led by experienced professionals passionate about technology
                  and innovation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Heritier Kaumbu</h3>
                  <p className="text-muted-foreground">
                    Founder & Lead Developer
                  </p>
                  <p className="text-muted-foreground">
                    A skilled software developer with expertise in building
                    scalable web applications. Specializing in front-end
                    development using modern frameworks and libraries, with
                    extensive experience in back-end development and DevOps.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Link
                      target="_blank"
                      href="https://vbeidqt5tvyy2ydf.public.blob.vercel-storage.com/CVs/Heritier%20Kaumbu%20CV-GQADoYbw2SafzlDvocteedsbRC8OsZ.pdf"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm"
                      prefetch={false}
                    >
                      View Resume
                    </Link>
                    <Link
                      target="_blank"
                      href="https://github.com/iam-hbk/"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-xs"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                src="/Profile.png"
                width="550"
                height="550"
                alt="Heritier Kaumbu"
                className="mx-auto rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div
                  id="contact"
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                >
                  Contact Us
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Start Your Project
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to bring your ideas to life? Get in touch with us to
                  discuss your project requirements and how we can help you
                  achieve your goals.
                </p>
                <Link
                  href="mailto:contact@techbk.co.za"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
