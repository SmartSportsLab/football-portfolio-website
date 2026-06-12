const skillGroups = [
  {
    title: "Programming & Data",
    skills: ["Python", "R", "SQL", "APIs", "Web Scraping", "Git / GitHub"],
  },
  {
    title: "Analytics & Modelling",
    skills: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Machine Learning",
      "LLMs",
      "Event Data",
      "Tracking Data",
      "Report Automation",
    ],
  },
  {
    title: "Visualization & Communication",
    skills: [
      "Tableau",
      "Power BI",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Data Storytelling",
    ],
  },
  {
    title: "Football Platforms",
    skills: [
      "Wyscout",
      "Catapult",
      "Metrica Nexus",
      "Nacsport",
      "SkillCorner",
    ],
  },
  {
    title: "Football Data & Analysis",
    skills: [
      "Player Profiling",
      "Recruitment Analysis",
      "Scouting Workflows",
      "Performance Trends",
      "Opposition Analysis",
    ],
  },
  {
    title: "Delivery & Collaboration",
    skills: [
      "Stakeholder Communication",
      "Project Scoping",
      "Technical Documentation",
      "Reproducible Workflows",
      "Presentation Design",
      "Decision-Ready Reporting",
    ],
  },
]

const projects = [
  {
    title: "Championship - Home Hold-Up Play Analysis",
    thumbnail: "/projects/championship-home-holds.png",
    summary:
      "League-wide tactical study of hold-up play on home soil across the EFL Championship, profiling how target forwards link play, retain possession under pressure and translate physical duels into territorial gain. Combines event data with structured visual analysis to compare clubs and individual players.",
    tools: "Event Data, Python, Pandas, Data Visualisation, Tactical Analysis",
    outcome:
      "Surfaces which forwards are most valuable as a tactical reference point at home and how their hold-up output supports the team's attacking patterns. Pitchable to recruitment and tactical staff for both opposition prep and target identification.",
    liveUrl: "/championship-home-holds.pdf",
    liveLabel: "View Report",
    codeUrl: "#",
  },
  {
    title: "Post-Match Physical Performance Report",
    thumbnail: "/projects/physical-performance-report.png",
    summary:
      "Post-match physical performance report covering team and individual running metrics - distance covered, high-speed running, sprints, accelerations and decelerations - benchmarked against expected outputs and broken down by playing position. Designed for the post-match debrief between performance staff, coaches and analysts.",
    tools: "GPS / Tracking Data, Python, Pandas, Data Visualisation, Sports Science",
    outcome:
      "Turns raw physical-output data into a clear, position-aware narrative the coaching staff can act on. Demonstrates how to combine sports-science context with analyst-style presentation in a decision-ready format.",
    liveUrl: "/physical-performance-report-post-match.pdf",
    liveLabel: "View Report",
    codeUrl: "#",
  },
  {
    title: "Andrei Ratiu - Player Report & Due Diligence",
    thumbnail: "/projects/andrei-ratiu-report.png",
    summary:
      "Two-part recruitment package on Romanian international full-back Andrei Ratiu: a concise on-pitch Player Report covering profile, role, technical and tactical attributes, plus a detailed Due Diligence Report digging into background, character, injury history and risk factors that decision-makers need before signing.",
    tools: "Wyscout, Public Sources, Football Scouting Methodology, Data Visualisation",
    outcome:
      "Pairs the analytical and the off-pitch view of a single target so a recruitment lead has both halves of the picture in one place. Demonstrates how scouting outputs can be packaged for technical staff alongside background due diligence.",
    liveUrl: "/andrei-ratiu-player-report.pdf",
    liveLabel: "Player Report",
    extraLinks: [
      { url: "/andrei-ratiu-due-diligence-report.pdf", label: "Due Diligence Report" },
    ],
    codeUrl: "#",
  },
  {
    title: "Peru Rodriguez - Individual Scouting Report",
    thumbnail: "/projects/peru-rodriguez-scouting-report.png",
    summary:
      "End-to-end scouting report on Peruvian forward Peru Rodriguez covering profile, technical attributes, tactical fit, statistical benchmarking against league peers, and a final recruitment recommendation. Built from raw event and player data into a presentation-ready PDF.",
    tools: "Wyscout, Python, Pandas, Data Visualisation, Football Scouting Methodology",
    outcome:
      "A self-contained recruitment dossier of the kind shared with technical staff and recruitment leads. Demonstrates how raw event data can be turned into a clear, decision-ready evaluation of an individual player.",
    liveUrl: "/peru-rodriguez-scouting-report.pdf",
    liveLabel: "View Report",
    codeUrl: "#",
  },
  {
    title: "Portland Thorns - Player Call & Scouting App",
    thumbnail: "/projects/portland-thorns.png",
    summary:
      "Streamlit scouting workspace for tracking recruitment phone calls, video reviews, follow-ups and per-player dossiers. Insights dashboard aggregates the entire pipeline; Player Summary drills into a single prospect with cascading Conference -> Team -> Player filters and a one-click branded PDF report.",
    tools: "Python, Streamlit, Pandas, Altair, ReportLab",
    outcome:
      "Built originally for Portland Thorns FC scouting staff. Public version ships with Showcase Mode pre-loaded with 1,000 fictional calls, 393 video reviews and 300 NCAA prospects so recruiters can explore every page without setup.",
    liveUrl: "https://portland-thorns-analysis.streamlit.app/",
    codeUrl: "https://github.com/SmartSportsLab/portland-thorns-player-call-app",
  },
  {
    title: "EDLP - Online Store Intelligence",
    thumbnail: "/projects/edlp-online-stores.png",
    summary:
      "Built a deployed analytics platform for Estudiantes de La Plata benchmarking the official online stores of six Argentine Primera Division clubs (EDLP, Boca, River, Racing, Independiente, San Lorenzo) on range, category mix, pricing, demographic coverage and variant depth.",
    tools: "Python, Streamlit, Pandas, Web Scraping, Plotly, Render",
    outcome:
      "Surfaces commercial whitespace and benchmarks merchandising decisions; built as the practical output of my Master's thesis with EDLP.",
    liveUrl: "https://edlp-online-stores.onrender.com/",
    codeUrl: "https://github.com/SmartSportsLab/edlp_online_stores",
  },
  {
    title: "Smart Sports Lab Match Coder",
    thumbnail: "/projects/match-coder.png",
    summary:
      "Designed and built a browser-based video tagging tool for football match analysis. Coders can tag passes, shots, defensive actions, dribbles, fouls and pitch zones live, save full sessions, and export to multiple formats (CSV, Excel, XML, JSON, SQL).",
    tools: "JavaScript, HTML, CSS, GitHub Pages",
    outcome:
      "Lightweight, no-install tool with custom event templates, button presets and structured exports - usable by any analyst with a browser.",
    liveUrl: "https://smartsportslab.github.io/football-match-coder/",
    codeUrl: "https://github.com/smartsportslab/football-match-coder",
  },
  {
    title: "Cibao FC - Wyscout Analytics Hub",
    thumbnail: "/projects/cibao-fc.png",
    summary:
      "Streamlit-based analytics workspace built for Cibao FC (Liga Dominicana de Futbol) covering collective performance and opposition analysis from raw Wyscout exports. Multi-page hub spanning Liga and CONCACAF Copa Centroamericana, with a per-90 normalisation pipeline and one-click PDF match reports.",
    tools: "Python, Streamlit, Pandas, Plotly, ReportLab",
    outcome:
      "Delivered to the club's analysis staff to drive opposition prep and post-match review. Spanish UI matching the production deployment, with the login gate removed for portfolio use.",
    liveUrl: "https://cibao-fc-analysis-app.streamlit.app/",
    codeUrl: "https://github.com/SmartSportsLab/cibao-fc-analysis-app",
  },
]

const journalism = [
  {
    outlet: "The Guardian",
    logo: "/journalism/the-guardian.png",
    role: "Interactive Journalist",
    summary:
      "Built data-driven interactive features and visual explainers across sport, climate, politics, film, and breaking news. Work spanned the Premier League title race and Brexit's impact on football, the human cost of climate disasters, the UK general election poll tracker, the Oscars gender gap, and an early visual explainer of the coronavirus outbreak.",
    highlights: [
      {
        headline: "Premier League endgame: the data behind a historic title race",
        url: "https://www.theguardian.com/football/datablog/2019/may/11/premier-league-endgame-the-data-that-shows-up-an-historic-title-race",
      },
      {
        headline: "How might Brexit affect the Premier League?",
        url: "https://www.theguardian.com/football/ng-interactive/2019/feb/14/how-might-brexit-affect-premier-league",
      },
      {
        headline: "Deadly weather: the human cost of 2018's climate disasters – visual guide",
        url: "https://www.theguardian.com/environment/ng-interactive/2018/dec/21/deadly-weather-the-human-cost-of-2018s-climate-disasters-visual-guide",
      },
      {
        headline: "Is climate change making hurricanes worse?",
        url: "https://www.theguardian.com/weather/ng-interactive/2018/sep/11/atlantic-hurricanes-are-storms-getting-worse",
      },
      {
        headline: "Election opinion polls tracker: gap between Labour and Tories narrows with result in balance",
        url: "https://www.theguardian.com/politics/ng-interactive/2019/dec/11/election-opinion-polls-uk-2019-latest-poll-tracker-tories-labour",
      },
      {
        headline: "Oscars: the 92-year gender gap, visualised",
        url: "https://www.theguardian.com/film/ng-interactive/2020/feb/05/the-oscars-92-year-gender-gap-visualised-academy-awards",
      },
      {
        headline: "How the coronavirus spread across China and the world – visual explainer",
        url: "https://www.theguardian.com/world/ng-interactive/2020/feb/11/how-novel-coronavirus-spread-across-the-world-visual-explainer",
      },
    ],
    url: "https://www.theguardian.com/profile/levitt-daniel",
    urlLabel: "View Author Page",
  },
  {
    outlet: "FiveThirtyEight",
    logo: "/journalism/fivethirtyeight.png",
    role: "Sports Writer",
    summary:
      "Data-driven sports writing and analysis combining statistical models with reader-friendly storytelling. Work spanned NBA franchise history, contract analysis and on-court strategy, NFL clutch performance, the Winter Olympics, and World Cup qualifying drama for traditional powerhouses.",
    highlights: [
      {
        headline: "Fifty Years After Their Last NBA Title, The Knicks Are Still Adrift",
        url: "https://fivethirtyeight.com/features/fifty-years-after-their-last-nba-title-the-knicks-are-still-adrift/",
      },
      {
        headline: "Bradley Beal's New Contract Leaves The Wizards Stuck In The Middle",
        url: "https://fivethirtyeight.com/features/bradley-beals-new-contract-leaves-the-wizards-stuck-in-the-middle/",
      },
      {
        headline: "The Raptors Changed Their Whole Offense. Is It Good Enough To Beat LeBron?",
        url: "https://fivethirtyeight.com/features/the-raptors-changed-their-whole-offense-is-it-good-enough-to-beat-lebron/",
      },
      {
        headline: "Russell Wilson Is Mr. Fourth Quarter",
        url: "https://fivethirtyeight.com/videos/russell-wilson-is-mr-fourth-quarter/",
      },
      {
        headline: "What The Last Winter Olympics Would Have Looked Like Without Russia",
        url: "https://fivethirtyeight.com/features/what-the-last-winter-olympics-would-have-looked-like-without-russia/",
      },
      {
        headline: "The Netherlands Is In A World Of Trouble, And Argentina Might Be Too",
        url: "https://fivethirtyeight.com/features/the-netherlands-is-in-a-world-of-trouble-and-argentina-might-be-too/",
      },
    ],
    url: "https://fivethirtyeight.com/contributors/daniel-levitt/",
    urlLabel: "View Author Page",
  },
  {
    outlet: "The Texas Tribune",
    logo: "/journalism/texas-tribune.png",
    role: "Data Visuals Journalist",
    summary:
      "Data-led reporting and visualisation at Texas's leading nonprofit newsroom. Work paired Texas-specific datasets with broader public-interest stories - from how rapid population growth is exposing more residents to tornadoes, to the rising cost of college athletics at the state's flagship universities.",
    highlights: [
      {
        headline: "As cities sprawl, more Texans are exposed to tornadoes",
        url: "https://www.texastribune.org/2018/05/17/cities-sprawl-more-texans-are-exposed-tornadoes/",
      },
      {
        headline: "The cost of recruiting athletes has doubled at top Texas colleges. At some schools, students help foot the bill.",
        url: "https://www.texastribune.org/2018/05/01/texas-college-recruiting-costs-doubled-student-fees/",
      },
      {
        headline: "UT-Austin is once again revenue king in Texas sports; basketball success gives Tech a boost",
        url: "https://www.texastribune.org/2018/03/29/ut-austin-once-again-revenue-king-texas-sports-basketball-success-give/",
      },
    ],
    url: "https://www.texastribune.org/author/daniel-levitt/",
    urlLabel: "View Author Page",
  },
]

const testimonials = [
  {
    quote:
      "Daniel was an exceptional student, always willing to go the extra mile thanks to his curiosity and work ethic, and he would be a great asset to any club he works with in the future.",
    name: "David R. Sáez",
    role: "CEO, Sports Data Campus",
  },
  {
    quote:
      "Daniel supported our scouting and recruitment department by providing data insights and detailed analysis on possible targets. Daniel's attention to detail, humility, and curious mind led to a level of work beyond our expectations and ultimately a successful recruitment window.",
    name: "Mike Norris",
    role: "Technical Director, Portland Thorns",
  },
]

export default function FootballOutreachPortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl space-y-6">
          <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            Football Data Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Daniel Levitt
          </h1>
          <p className="text-xl text-slate-300">
            Data analytics in football focused on turning complex data into clear recruitment and performance insight.
          </p>
          <p className="max-w-2xl text-slate-400">
            Recently completed a Master&apos;s in Data Analytics in Football with Sports Data Campus. I&apos;m actively looking to collaborate with clubs, agencies, and analysts through roles, summer projects, and informal conversations.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/football-outreach/contact"
              className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold">The Story So Far</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            My work sits between football understanding and technical analysis. I enjoy building tools and workflows that help answer practical questions: who to recruit, how profiles compare, where performance is trending, and how insights can be communicated clearly to decision-makers.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              {"thumbnail" in project && project.thumbnail && (
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.summary}</p>
              <p className="mt-3 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">Tools:</span> {project.tools}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">Impact:</span> {project.outcome}
              </p>
              <div className="mt-5 flex gap-3 text-sm">
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-cyan-400/40 px-3 py-2 text-cyan-200 hover:bg-cyan-400/10"
                  >
                    {("liveLabel" in project && project.liveLabel) || "Live"}
                  </a>
                )}
                {"extraLinks" in project && Array.isArray(project.extraLinks) && project.extraLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-cyan-400/40 px-3 py-2 text-cyan-200 hover:bg-cyan-400/10"
                  >
                    {link.label}
                  </a>
                ))}
                {project.codeUrl !== "#" && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-slate-700 px-3 py-2 text-slate-300 hover:border-slate-500"
                  >
                    Code
                  </a>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journalism" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Journalistic Work</h2>
        <p className="mt-2 text-slate-400">
          Earlier career writing data-driven sports and news features for The Guardian, FiveThirtyEight, and The Texas Tribune.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {journalism.map((entry) => (
            <article key={entry.outlet} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-16 items-center justify-center rounded-xl bg-white px-4 py-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.logo}
                  alt={`${entry.outlet} logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{entry.outlet}</h3>
              <p className="mt-1 text-sm text-cyan-200">{entry.role}</p>
              <p className="mt-3 text-slate-300">{entry.summary}</p>
              <p className="mt-4 text-sm font-semibold text-slate-200">Selected pieces</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-400">
                {entry.highlights.map((piece) => (
                  <li key={piece.url}>
                    -{" "}
                    <a
                      href={piece.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-200 underline-offset-2 hover:underline"
                    >
                      {piece.headline}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3 text-sm">
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-cyan-400/40 px-3 py-2 text-cyan-200 hover:bg-cyan-400/10"
                >
                  {entry.urlLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="mt-2 text-slate-400">
          What professors, mentors, and collaborators have said about working with me.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={`${t.name}-${t.quote.slice(0, 24)}`}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-cyan-300/70"
                fill="currentColor"
              >
                <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83V11.17H5.5c0-1.84 1.5-3.34 3.34-3.34V6H7.17Zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18h6.83V11.17H15.5c0-1.84 1.5-3.34 3.34-3.34V6h-1.67Z" />
              </svg>
              <blockquote className="mt-3 text-slate-200">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-slate-800 pt-4 text-sm">
                <p className="font-semibold text-slate-100">{t.name}</p>
                <p className="text-slate-400">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Data Analytics Toolkit</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="font-semibold text-cyan-200">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                {group.skills.map((skill) => (
                  <li key={skill}>- {skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-8">
          <h2 className="text-2xl font-semibold text-cyan-100">Let&apos;s Connect</h2>
          <p className="mt-3 max-w-3xl text-cyan-50/90">
            If you&apos;re open to a short chat about analysis projects, recruitment support, or entry-level opportunities in football data, I&apos;d be glad to connect.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/football-outreach/contact"
              className="rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-levitt-7225a7396/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-200/40 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
