import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "India Semiconductor Mission",
  "Understand India's Semiconductor Mission: its policy framework, semiconductor value chain, engineering opportunities, and long-term challenges.",
  "/blog/india-semiconductor-mission/"
);

export default function IndiaSemiconductorMissionArticle() {
  return (
    <>
      <PageHeader
        title="India Semiconductor Mission"
        description="Building a complete chip ecosystem takes more than a fabrication plant. It takes a connected chain of design, manufacturing, packaging, skills, and suppliers."
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All insights
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="font-medium uppercase tracking-wider text-gold">
              Semiconductors
            </span>
            <time dateTime="2026-10-18">October 18, 2026</time>
            <span>8 min read</span>
          </div>

          <div className="space-y-6 text-muted leading-relaxed">
            <p className="max-w-3xl text-lg text-foreground">
              Chips sit beneath the technologies people use every day: phones,
              vehicles, medical equipment, communication networks, and
              industrial controls. Building a dependable semiconductor industry
              is therefore a long-term capability project—not simply a
              construction project. India’s Semiconductor Mission (ISM) is the
              national effort to help develop that capability.
            </p>

            <section aria-labelledby="market-growth-heading" className="pt-8">
              <div className="mb-5">
                <p className="text-sm font-medium uppercase tracking-widest text-gold">
                  Market growth
                </p>
                <h2
                  id="market-growth-heading"
                  className="mt-2 font-heading text-2xl font-bold text-foreground"
                >
                  Semiconductor sales are growing—but the cycle is uneven
                </h2>
              </div>
              <p className="mb-6 max-w-3xl">
                Global semiconductor sales rose from $526.8 billion in 2023 to
                $630.5 billion in 2024, an increase of about 19.7%. The 2024
                total reflects WSTS&apos; updated year-end figure reported by
                the Semiconductor Industry Association (SIA). This is a
                worldwide revenue measure, not a forecast for India.
              </p>
              <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Global semiconductor sales
                    </h3>
                    <p className="text-sm text-muted">
                      Annual revenue, US$ billions
                    </p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
                    +19.7% year over year
                  </span>
                </div>
                <div
                  role="img"
                  aria-label="Bar chart: global semiconductor sales were 526.8 billion US dollars in 2023 and 630.5 billion US dollars in 2024, an increase of approximately 19.7 percent."
                  className="space-y-5"
                >
                  {[
                    { year: "2023", value: "$526.8B", width: "83.5%" },
                    { year: "2024", value: "$630.5B", width: "100%" },
                  ].map((item) => (
                    <div
                      key={item.year}
                      className="grid grid-cols-[3.5rem_minmax(0,1fr)_5rem] items-center gap-3"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.year}
                      </span>
                      <div className="h-8 overflow-hidden rounded-md bg-secondary">
                        <div
                          className="flex h-full items-center rounded-md bg-gradient-to-r from-blue to-gold px-3 text-xs font-semibold text-background"
                          style={{ width: item.width }}
                        >
                          {item.value}
                        </div>
                      </div>
                      <span className="text-right text-sm text-muted">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <figcaption className="mt-5 text-xs leading-relaxed text-muted">
                  Source:{" "}
                  <a
                    href="https://www.semiconductors.org/global-semiconductor-sales-increase-19-1-in-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-2"
                  >
                    SIA&apos;s report of WSTS global sales data
                  </a>
                  . The 2024 figure was updated to $630.5B after the original
                  release. Year-over-year growth is calculated from the
                  reported annual totals.
                </figcaption>
              </figure>
            </section>

            <h2 className="pt-6 font-heading text-2xl font-bold text-foreground">
              What the mission is designed to do
            </h2>
            <p>
              The Government of India established ISM under the Ministry of
              Electronics and Information Technology (MeitY) to coordinate
              semiconductor and display manufacturing initiatives. The
              Semicon India Programme, announced in 2021 with a stated
              ₹76,000-crore outlay, provides a policy framework for supporting
              investment in key parts of the electronics and semiconductor
              supply chain.
            </p>
            <p>
              The framework is broader than leading-edge silicon fabrication.
              It includes support mechanisms for semiconductor and display
              fabrication, compound semiconductors and related technologies,
              assembly and testing, and chip design. These activities have
              different economics and technical requirements, so they need
              complementary policies rather than a single one-size-fits-all
              approach.
            </p>

            <section aria-labelledby="demand-heading" className="pt-8">
              <div className="mb-5">
                <p className="text-sm font-medium uppercase tracking-widest text-gold">
                  Demand outlook
                </p>
                <h2
                  id="demand-heading"
                  className="mt-2 font-heading text-2xl font-bold text-foreground"
                >
                  What is driving demand for semiconductors?
                </h2>
              </div>
              <p className="mb-6 max-w-3xl">
                Demand is not one market. Different industries need different
                chip types, performance levels, manufacturing processes, and
                reliability profiles. The following map is illustrative, not a
                ranking or forecast.
              </p>
              <div
                role="list"
                aria-label="Illustrative semiconductor demand drivers"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {[
                  {
                    number: "01",
                    title: "AI and data centres",
                    detail:
                      "Accelerators, memory, networking, power management, and storage.",
                    icon: "01",
                  },
                  {
                    number: "02",
                    title: "Automotive and mobility",
                    detail:
                      "Power electronics, sensing, safety systems, connectivity, and compute.",
                    icon: "02",
                  },
                  {
                    number: "03",
                    title: "Phones and consumer devices",
                    detail:
                      "Processors, radio-frequency components, image sensors, and memory.",
                    icon: "03",
                  },
                  {
                    number: "04",
                    title: "Industry and infrastructure",
                    detail:
                      "Control, communications, sensing, and energy-efficient electronics.",
                    icon: "04",
                  },
                ].map((driver) => (
                  <div
                    key={driver.number}
                    role="listitem"
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <span className="text-xs font-semibold tracking-widest text-gold">
                      DRIVER {driver.icon}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {driver.title}
                    </h3>
                    <p className="mt-1 text-sm">{driver.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <h2 className="pt-6 font-heading text-2xl font-bold text-foreground">
              The semiconductor supply chain
            </h2>
            <p>
              A semiconductor product travels through many stages: architecture
              and circuit design, verification, fabrication, packaging, testing,
              and integration into an end product. Around those stages are
              essential suppliers of materials, manufacturing equipment,
              software tools, utilities, and specialist services. A strong
              ecosystem connects these capabilities so that ideas can reliably
              become qualified products.
            </p>
            <p>
              For India, this creates more than one route to growth. Chip design
              and verification can build on the country’s engineering talent.
              Assembly, testing, and packaging can create manufacturing
              experience and connect domestic products to global supply chains.
              Over time, deeper supplier networks and process expertise can
              support increasingly complex manufacturing. Each step matters,
              even when it is not a wafer fab.
            </p>

            <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                From idea to deployed product
              </h3>
              <p className="mb-6 text-sm">
                A simplified view of connected stages and supporting inputs.
              </p>
              <div
                role="img"
                aria-label="Semiconductor supply chain from chip design and verification, through wafer fabrication and assembly and test, to product integration. Materials, equipment, software, utilities, and skilled people support the chain."
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                  {[
                    ["01", "Design", "Architecture, RTL, verification"],
                    ["02", "Fabrication", "Wafer processing"],
                    ["03", "Assembly & test", "Packaging, validation"],
                    ["04", "Product systems", "Devices and infrastructure"],
                  ].map(([step, title, detail], index) => (
                    <div key={step} className="relative">
                      <div className="h-full rounded-xl border border-blue/30 bg-blue/5 p-4">
                        <span className="text-xs font-semibold tracking-widest text-gold">
                          STAGE {step}
                        </span>
                        <h4 className="mt-2 font-semibold text-foreground">
                          {title}
                        </h4>
                        <p className="mt-1 text-xs">{detail}</p>
                      </div>
                      {index < 3 ? (
                        <ArrowRight
                          className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold sm:block"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-gold/20 bg-gold/5 px-4 py-3 text-center text-sm">
                  <span className="font-semibold text-gold">Enablers across the chain:</span>{" "}
                  materials · equipment · EDA software · utilities · skilled workforce
                </div>
              </div>
              <figcaption className="mt-4 text-xs text-muted">
                Stages are simplified for illustration; real supply chains
                include many specialised suppliers, routes, and feedback loops.
              </figcaption>
            </figure>

            <section aria-labelledby="economics-heading" className="pt-8">
              <div className="mb-5">
                <p className="text-sm font-medium uppercase tracking-widest text-gold">
                  Economics
                </p>
                <h2
                  id="economics-heading"
                  className="mt-2 font-heading text-2xl font-bold text-foreground"
                >
                  Big markets, different product economics
                </h2>
              </div>
              <p className="mb-6 max-w-3xl">
                SIA reported 2024 global sales of $212.6B for logic and $165.1B
                for memory. The chart compares those two reported categories
                with the remaining $252.8B of the $630.5B total; that remainder
                is calculated, not a separately reported category.
              </p>
              <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                <div className="mb-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    2024 global sales by broad product group
                  </h3>
                  <p className="text-sm text-muted">
                    Revenue, US$ billions; segments scaled to total sales
                  </p>
                </div>
                <div
                  role="img"
                  aria-label="Stacked bar of 2024 worldwide semiconductor sales: logic 212.6 billion US dollars, memory 165.1 billion, and other products 252.8 billion, totaling 630.5 billion."
                >
                  <div className="flex h-12 overflow-hidden rounded-lg text-xs font-semibold text-background">
                    <div
                      className="flex items-center justify-center bg-blue px-1 text-center"
                      style={{ width: "33.7%" }}
                    >
                      Logic
                    </div>
                    <div
                      className="flex items-center justify-center bg-gold px-1 text-center"
                      style={{ width: "26.2%" }}
                    >
                      Memory
                    </div>
                    <div
                      className="flex items-center justify-center bg-slate-500 px-1 text-center"
                      style={{ width: "40.1%" }}
                    >
                      Other
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      ["Logic", "$212.6B", "33.7%", "bg-blue"],
                      ["Memory", "$165.1B", "26.2%", "bg-gold"],
                      ["Other products*", "$252.8B", "40.1%", "bg-slate-500"],
                    ].map(([label, value, share, color]) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-lg bg-secondary/70 p-3"
                      >
                        <span
                          className={`h-3 w-3 shrink-0 rounded-sm ${color}`}
                          aria-hidden="true"
                        />
                        <span className="flex-1 text-sm text-foreground">
                          {label}
                        </span>
                        <span className="text-right text-sm font-semibold text-foreground">
                          {value}
                          <span className="block text-xs font-normal text-muted">
                            {share}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption className="mt-5 text-xs leading-relaxed text-muted">
                  *Other products is the arithmetic remainder after subtracting
                  SIA-reported logic and memory sales from the updated $630.5B
                  annual total. Percentages are rounded. Category data source:{" "}
                  <a
                    href="https://www.semiconductors.org/global-semiconductor-sales-increase-19-1-in-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-2"
                  >
                    SIA&apos;s 2024 market report
                  </a>
                  .
                </figcaption>
              </figure>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["Capital intensity", "Facilities, tools, and infrastructure require substantial upfront investment."],
                  ["Yield and utilisation", "Consistent quality and productive use of capacity shape unit economics."],
                  ["Customer qualification", "Long product lifecycles and reliability requirements make customer trust essential."],
                ].map(([heading, detail]) => (
                  <div
                    key={heading}
                    className="rounded-xl border border-border bg-secondary/50 p-4"
                  >
                    <h3 className="font-semibold text-foreground">{heading}</h3>
                    <p className="mt-1 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 max-w-3xl text-sm">
                This is why incentives alone do not guarantee a viable project.
                Economics also depend on process capability, reliable
                infrastructure, a skilled workforce, supplier depth, and
                dependable demand for the output.
              </p>
            </section>

            <h2 className="pt-6 font-heading text-2xl font-bold text-foreground">
              Why design and engineering talent matter
            </h2>
            <p>
              Incentives can help address the high cost and risk of
              semiconductor investment, but they cannot replace skilled teams
              and execution. Products still need engineers who can translate
              requirements into architecture, write and verify RTL, close
              timing, manage power, validate boards, and bring hardware and
              software together. Manufacturing also depends on process,
              equipment, quality, reliability, and test expertise.
            </p>
            <p>
              This makes collaboration important. Companies, universities,
              research groups, training providers, and government programmes
              each contribute different parts of the talent pipeline. Practical
              projects, access to tools and labs, and experience with complete
              design flows help turn theoretical knowledge into the skills
              teams need on real products.
            </p>

            <h2 className="pt-6 font-heading text-2xl font-bold text-foreground">
              The hard work ahead
            </h2>
            <p>
              Semiconductor projects require large, sustained investment,
              reliable infrastructure, specialised supply chains, demanding
              quality systems, and long qualification cycles. Building a
              competitive ecosystem takes time. Financial support can improve
              project economics, but long-term success also depends on
              predictable execution, customer demand, experienced operators,
              supplier development, and continued investment in people.
            </p>
            <p>
              Progress should therefore be judged by durable capability: teams
              that can deliver, facilities that can meet customer requirements,
              suppliers that can support production, and products that can
              compete on quality and reliability. The mission creates a
              framework for building these foundations; sustained industry and
              research collaboration will determine how deeply they take root.
            </p>

            <h2 className="pt-6 font-heading text-2xl font-bold text-foreground">
              A long-term opportunity
            </h2>
            <p>
              India’s Semiconductor Mission is an opportunity to connect the
              country’s engineering base with manufacturing, packaging, and
              product development. Its impact will not be measured by one
              announcement or one facility, but by the strength of the
              capabilities built across the full value chain. For engineers and
              technology companies, that means meaningful work at every layer:
              from designing a chip to integrating and validating the systems
              that use it.
            </p>

            <aside className="mt-10 rounded-xl border border-gold/20 bg-secondary/50 p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Official programme information
              </h2>
              <p className="mt-2 text-sm">
                For current scheme guidelines and programme details, refer to
                the Government of India’s MeitY Electronics System Design and
                Manufacturing (ESDM) resources.
              </p>
              <a
                href="https://ism.gov.in/schemes/semicon1.0/display-fab"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all"
              >
                Visit MeitY semiconductor programme information
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </article>

      <CtaSection
        title="Building Semiconductor Engineering Skills?"
        description="Explore our design, FPGA, ASIC, and embedded engineering services."
        buttonText="Explore Services"
        buttonHref="/services/"
      />
    </>
  );
}
