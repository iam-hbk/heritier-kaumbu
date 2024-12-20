import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className=" sticky-0 px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Heritier Kaumbu</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#skills"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#work_experience"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Experience
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
      <main className="flex-1 relative">
        <Image
          alt="Splatter"
          src={"/Splatter.svg"}
          height={1500}
          width={1500}
          className="absolute z-[-1] top-0 left-0 "
        />
        {/* <Image
          alt="Splatter"
          src={"/Splatter.png"}
          height={1500}
          width={1500}
          className="absolute z-[-1] top-0 left-0"
        /> */}
        <section className="w-full h-dvh py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Heritier Kaumbu
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Software Developer
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I am a skilled software developer with expertise in building
                    scalable and efficient web applications. I specialize in
                    front-end development using modern frameworks and libraries,
                    and I also have experience in back-end development and
                    DevOps.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    target="_blank"
                    href="https://vbeidqt5tvyy2ydf.public.blob.vercel-storage.com/CVs/Heritier%20Kaumbu%20CV-GQADoYbw2SafzlDvocteedsbRC8OsZ.pdf"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                  <Link
                    target="blank"
                    // href="https://github.com/iam-hbk/"
                    href="mailto:heritierkaumbu@icloud.com"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <Image
                src="/Profile.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto  rounded-xl object-cover sm:w-full sm:max-w-[500px] lg:order-last"
              />
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  id="skills"
                  className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm"
                >
                  Key Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I Can Do
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of skills that allow me to tackle a wide
                  range of software development challenges. Here are some of my
                  key capabilities:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Front-end Development
                      </h3>
                      <p className="text-muted-foreground">
                        Proficient in HTML, CSS, JavaScript, and modern
                        front-end frameworks like React, Vue.js, and Angular.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Back-end Development
                      </h3>
                      <p className="text-muted-foreground">
                        Experienced in building scalable and efficient back-end
                        systems using Node.js, Python, and server-side
                        frameworks.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">DevOps</h3>
                      <p className="text-muted-foreground">
                        Knowledgeable in cloud infrastructure, containerization,
                        and CI/CD pipelines using tools like AWS, Docker, and
                        GitHub Actions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Database Management</h3>
                      <p className="text-muted-foreground">
                        Familiar with relational databases (SQL) and NoSQL
                        databases (MongoDB, Cassandra) for data storage and
                        management.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/tech-stack.png"
                width="550"
                height="310"
                alt="Skills"
                className="mx-auto  rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects I've Worked On
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on that showcase my
                  skills and experience as a software developer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">My Portfolio</h3>
                  <p className="text-muted-foreground">
                    This is my personal portfolio website where I showcase my
                    skills, projects, and work experience as a software
                    developer. The website is built using React and TypeScript,
                    and it features a modern and responsive design. Visitors can
                    learn more about me, view my projects, and get in touch with
                    me through the provided contact form or other channels. The
                    website also includes links to my resume and GitHub profile
                    for further information. Feel free to explore and reach out!
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://www.techbk.dev/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src="/techbk.png"
                width="550"
                height="310"
                alt="Project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div> */}
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
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
        <section
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  id="work_experience"
                  className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm"
                >
                  Work Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Professional Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have gained valuable experience working in the software
                  industry for the past few years. Here's a brief overview of my
                  professional background:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    End User Computing Teacher
                  </h3>
                  <p className="text-muted-foreground">
                    University of Johannesburg | Aug 2023 - Present
                  </p>
                  <p className="text-muted-foreground">
                    I educate first-year students in Logistics, Retail,
                    Marketing, and Humanities on End User Computing Skills. My
                    primary emphasis lies in equipping students with adept
                    skills in MS Word, MS Excel, MS PowerPoint, and MS Access.
                    Furthermore, I provide instruction on Computer Literacy and
                    Internet usage within an academic framework.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Software Development Tutor
                  </h3>
                  <p className="text-muted-foreground">
                    University of Johannesburg | Feb 2022 - Dec 2023
                  </p>
                  <p className="text-muted-foreground">
                    I specialized in tutoring Python, C#, JavaScript, and
                    various web technologies. I helped students understand
                    programming concepts and best practices through lectures and
                    one-on-one tutoring. I assessed student performance and
                    prepared students for careers in software development.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Ambassador of the UJ Technopreneurship Centre
                  </h3>
                  <p className="text-muted-foreground">
                    University of Johannesburg | Mar 2022 - Present
                  </p>
                  <p className="text-muted-foreground">
                    I represented the centre at events, provided information to
                    stakeholders, and built relationships with industry
                    partners. I assisted with program development, mentored
                    students, and supported initiatives that fostered innovation
                    and entrepreneurship.
                  </p>
                </div>
              </div>
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
                  Get in Touch
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Let's Collaborate
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm always excited to discuss new projects and opportunities.
                  Feel free to reach out to me using the contact form or through
                  any of the provided channels.
                </p>
                <Link
                  target="blank"
                  href="https://github.com/iam-hbk/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
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
