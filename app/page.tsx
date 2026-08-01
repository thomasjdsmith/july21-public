import Image from "next/image";
import Link from "next/link";

const nav = ["Method", "Curriculum", "Cohorts", "Faculty"];

const stats = [
  { value: "1,480", label: "Instructors certified" },
  { value: "34", label: "Partner aquatic centres" },
  { value: "11", label: "Cohorts delivered" },
];

const modules = [
  {
    no: "01",
    title: "Poolside Register",
    body: "The vocabulary, cadence and volume that survive tile echo, filtration noise and a head half underwater.",
  },
  {
    no: "02",
    title: "Instruction Without Translation",
    body: "Teach a mixed-language class using sequence, demonstration and a fixed core lexicon of forty terms.",
  },
  {
    no: "03",
    title: "Assessment & Feedback",
    body: "Give correction a learner can act on in the next length — in their second language, in ten words or fewer.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#03202f] font-sans text-white">
      <section className="relative flex min-h-svh flex-col overflow-hidden">
        <Image
          src="/pool.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pool-drift pointer-events-none object-cover"
        />
        <div className="pool-scrim pointer-events-none absolute inset-0" />

        <div className="relative flex flex-1 flex-col px-6 py-8 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between">
            <span className="text-lg font-black uppercase tracking-[0.18em]">
              Aquasteps
            </span>
            <nav className="hidden gap-10 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70 md:flex">
              {nav.map((item) => (
                <a key={item} href="#method" className="hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#apply"
              className="rounded-full bg-white px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#03202f] hover:bg-white/85"
            >
              Apply
            </a>
          </header>

          <main className="flex flex-1 flex-col justify-center py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-white/75">
              Instructor training institute — est. 2026
            </p>
            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-black uppercase leading-[0.88] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Teach the language of the water
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              A twelve-week certification for aquatic instructors teaching in a
              language their learners are still acquiring.{" "}
              <span className="font-semibold text-white">
                We train instructors and license mobile apps. We do not run swim classes nor provide life saving instruction.
              </span>
            </p>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="flex h-13 items-center justify-center rounded-full bg-white px-8 text-sm font-bold uppercase tracking-[0.12em] text-[#03202f] hover:bg-white/85 sm:h-14"
              >
                Apply to cohort 12
              </a>
              <a
                href="#method"
                className="flex h-13 items-center justify-center rounded-full border border-white/35 px-8 text-sm font-bold uppercase tracking-[0.12em] hover:border-white sm:h-14"
              >
                Read the method
              </a>
            </div>
          </main>

          <dl className="grid grid-cols-1 gap-px border-t border-white/20 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/65">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="method"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <h2 className="text-3xl font-black uppercase leading-[0.92] tracking-[-0.03em] sm:text-4xl">
            Three modules.
            <br />
            No lane time.
          </h2>
          <div className="grid gap-px bg-white/12 sm:grid-cols-3">
            {modules.map((module) => (
              <article key={module.no} className="bg-[#03202f] p-8 sm:p-9">
                <span className="font-mono text-[11px] tracking-[0.22em] text-[#5fd0ee]">
                  {module.no}
                </span>
                <h3 className="mt-6 text-xl font-black uppercase tracking-[-0.01em]">
                  {module.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                  {module.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="apply"
        className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <p className="max-w-2xl text-balance text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl">
            Cohort 12 opens 6 September. Twenty-four places.
          </p>
          <a
            href="mailto:admissions@aqualingua.example"
            className="flex h-14 shrink-0 items-center justify-center rounded-full bg-[#5fd0ee] px-9 text-sm font-bold uppercase tracking-[0.12em] text-[#03202f] hover:bg-white"
          >
            Request the syllabus
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Aqualingua Institute — instructor certification only</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
