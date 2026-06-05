// content.ts

export const siteMeta = {
  name: "Scott Cullum",
  tagline: "A creative technologist who helps teams cut through ambiguity and move the work forward.",
  email: "scott@scullum.com",
  social: {
    linkedin: "https://www.linkedin.com/in/scullum/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

// ---------- HOME ----------

export const homePage = {
  hero: {
    title: "Scott Cullum",
    subtitle: "I am a creative technologist who helps teams cut through ambiguity and move the work forward.",
    body: [
      "I help teams make better decisions and turn early ideas into working products. My work sits across design, engineering, and product, so I can bridge conversations that often slow progress.",
      "I work in an AI-native way, which means faster exploration and fewer wasted cycles.",
      "Most clients bring me in part-time for senior direction and hands-on support. When a project needs more depth, I work with a small network of trusted collaborators.",
    ],
    cta: {
      label: "View work",
      href: "/work",
    },
  },
  howIHelp: {
    heading: "How I help",
    items: [
      "Advisory support for product and technology leaders",
      "AI-native prototyping and technical exploration",
      "Capability building for teams adopting modern workflows",
    ],
  },
};

// ---------- ABOUT ----------

export const aboutPage = {
  hero: {
    kicker: "",
    title: "About",
    subtitle: "A creative technologist who helps teams cut through ambiguity and move the work forward.",
  },
  sections: [
    {
      heading: "",
      body: [
        "I've spent more than twenty years in roles that sit between design, engineering, and strategy. That range shaped how I approach the work: teams rarely struggle because of technology alone. They struggle because direction is unclear, handoffs are slow, and ideas stay abstract for too long.",
        "I focus on the middle space where creativity, constraints, and clarity intersect. It is where decisions either get made or stall. My job is to help teams see their options earlier and move in a direction they trust.",
        "AI-native tools have compressed the time it takes to explore ideas and test assumptions. They do not replace judgment or taste. They give you a way to bring those things into the process sooner.",
        "I work flexibly so organizations can access senior experience without adding another full-time leader. I stay close to the work, and when an engagement needs more depth, I pull in people I have worked with before who can contribute quickly.",
        "I am based near Washington, DC, and work remote with teams across the country.",
      ],
    },
  ],
};

// ---------- SERVICES ----------

export const servicesPage = {
  hero: {
    title: "Services",
    intro: [
      "I work with organizations that need senior guidance across product, design, and engineering without adding another full-time leader.",
      "Most teams work with me on a part-time basis for clarity, direction, and hands-on support. When a project benefits from added depth, I bring in trusted collaborators I have worked with for years.",
      "AI-native tools are part of how I work. They shorten timelines and improve exploration. The result is better decisions, not more noise.",
    ],
  },
  services: [
    {
      id: "fractional-advisory",
      name: "Fractional Advisory",
      summary: "Ongoing leadership across product, design, and technology.",
      description: [
        "Some teams do not need another headcount. They need someone who can cut through ambiguity, bring a clear point of view, and keep work moving.",
      ],
      whatThisIncludes: [
        "Weekly or biweekly working sessions",
        "Prioritization, direction, and feasibility guidance",
        "Translating loose concepts into concrete next steps",
        "Input on AI-native workflows and delivery patterns",
      ],
      goodFor: [
        "Organizations that want senior perspective without the overhead of a permanent role.",
      ],
    },
    {
      id: "ai-native-exploration",
      name: "AI-Native Exploration & Prototyping",
      summary: "Move from idea to clarity faster.",
      description: [
        "AI-native engineering allows exploration of multiple directions in parallel, pressure-testing assumptions, and producing tangible artifacts earlier in the process. The goal is sharper thinking, not inflated output.",
      ],
      whatThisIncludes: [
        "Prototypes and proofs of concept",
        "Fast-turn exploration across design and engineering",
        "Hands-on collaboration with your team",
        "Clear, practical recommendations",
      ],
      goodFor: [
        "Teams evaluating new concepts, preparing for investment, or reducing risk before committing.",
      ],
    },
    {
      id: "capability-support",
      name: "Capability Support",
      summary: "Better ways of working for modern teams.",
      description: [
        "Many teams know they can move faster, but the bottlenecks are not always obvious. I help identify the friction, simplify workflows, and integrate AI-native tools in ways that make sense.",
      ],
      whatThisIncludes: [
        "Workflow and process improvements",
        "Stronger collaboration between design and engineering",
        "Coaching on AI-native tooling",
        "Reduction of unnecessary complexity",
      ],
      goodFor: [
        "Organizations under pressure to deliver faster, collaborate more tightly, or adopt modern workflows.",
      ],
    },
    {
      id: "technical-direction",
      name: "Technical Direction",
      summary: "Hands-on technical leadership focused on front-end and experience quality.",
      description: [
        "I help teams make sound technical decisions early, support design partners, and set a path that holds up once real users arrive.",
      ],
      whatThisIncludes: [
        "Front-end architecture and planning",
        "Component and design system guidance",
        "Technical scoping and decision support",
        "Bridging conversations between design and engineering",
      ],
      goodFor: [
        "Teams that need steady technical leadership without hiring a full-time lead.",
      ],
    },
    {
      id: "flexible-team-support",
      name: "Flexible Team Support",
      summary: "A trusted network that can scale with the work.",
      description: [
        "When the engagement calls for it, I bring in a small network of designers, engineers, and specialists I trust. This keeps the work lightweight, scalable, and grounded in senior experience.",
      ],
      whatThisIncludes: [],
      goodFor: [],
    },
  ],
};

// ---------- WORK ----------

export const workPage = {
  hero: {
    title: "Work",
    intro: [
      "I have spent more than two decades working across design, engineering, and product, shaping prototypes, platforms, and experiences for organizations ranging from early-stage teams to global enterprises.",
      "The work here follows a consistent pattern: complex problems, interdisciplinary teams, and the need to turn ideas into something tangible early.",
      "My role shifts based on the engagement — creative technologist, product partner, technical lead, senior advisor — but the throughline is the same: make the work clear, reduce friction, and move it forward.",
    ],
  },
  projects: [
    {
      slug: "cadence",
      name: "Cadence",
      company: "Cullum & Co",
      tagline:
        "An open-source ambient context layer that lets coding agents read the room, not just the prompt.",
      image: "/images/work/cadence/cadence.webp",
      externalUrl: "https://cullumco.github.io/cadence/",
      externalLabel: "Visit the Cadence site →",
      sections: [
        {
          heading: "",
          body: [
            "Coding agents have one input channel: text. Your prompt doesn't say you're tired but still shipping, that you just got back from a long break, or that you want the agent to stop asking permission and make the call. Cadence is the second channel — an ambient context layer I'm building and shipping in the open as a Cullum & Co project.",
            "It reads the room around the prompt: time, git state, prompt rhythm, music, Focus mode, and a self-reported state become visible context, distilled into four independent dials — pace, tone, posture, and proactivity. Every prompt then carries an inspectable state block plus a lens for reading what you meant. It's a lens, not a leash: it never rewrites your words or constrains the agent, and it always defers to what you actually typed.",
            "The result is the same prompt landing differently in different rooms. In a shipping cadence, \"how should I structure the retry logic?\" gets the call made — backoff with jitter, here's the diff. In a thinking cadence, it gets the trade-offs explored patiently, no pressure to pick. The alpha ships as a Claude Code plugin, macOS-first because the signals read the Mac around you — but Claude Code is just the alpha surface. The product is the context layer underneath it.",
          ],
        },
      ],
    },
    {
      slug: "kettel",
      name: "Kettel",
      company: "Cullum & Co",
      tagline:
        "An open-source workspace where strategy, creative, and technology think together before the agent builds.",
      image: "/images/work/kettel/kettel.webp",
      externalUrl: "https://kettel.vercel.app",
      externalLabel: "Visit the Kettel site →",
      sections: [
        {
          heading: "",
          body: [
            "Every team scaling AI-native delivery hits the same wall: the creative partnership that produces excellent work — the back-and-forth between strategy, creative, and technology — gets flattened into one person's conversation with an LLM. The rest of the team becomes a spectator. Intent gets lost. Craft gets diluted. Kettel is a Cullum & Co product, built in the open, that rebuilds the room.",
            "Its core artifact is the plan file: structured markdown that lives in your git repo, where each section has an owner and each annotation has a perspective. Strategy writes intent, creative writes direction, technology writes approach — three voices attributed, three colors of ink. Upstream, a notebook holds research, customer quotes, and technical spikes as a linked graph rather than a folder, so the agent traverses connected thinking instead of a pile of files. The agent reads all of it and ships the synthesis, not just the last prompt.",
            "The plan is also the handoff: self-contained enough for Claude Code, Cursor, or Windsurf to execute without needing access to Kettel at all. The model is open core — the plan file, notebook, and agent integration are free and open source, with the v0.1 web app live and an MCP server next on the roadmap. The plan file is the room. The code is downstream.",
          ],
        },
      ],
    },
    {
      slug: "ignition-zero-project-air",
      name: "Ignition Zero & Project AIR",
      company: "World Wide Technology",
      tagline:
        "Two AI-native programs serving different needs: one accelerates exploration, the other delivers custom AI solutions.",
      image: "/images/work/ignition/ignition-zero-project-air.avif",
      sections: [
        {
          heading: "",
          body: [
            "Most organizations want to move faster with AI but do not know where to start. Some need help testing ideas quickly; others need help building tailored AI solutions that solve real business problems. I created two complementary programs to meet those needs: Ignition Zero and Project AIR.",
          ],
        },
        {
          heading: "Ignition Zero",
          subheading:
            "A lightweight, AI-native product acceleration model designed to move from ambiguity to clarity at speed.",
          body: [
            "Ignition Zero helps teams explore product ideas quickly and get to something tangible in days, not weeks. It uses AI-native engineering to prototype multiple directions in parallel, tighten feedback loops, and reduce the friction that usually slows early product work.",
            "It is intentionally lean: rapid intake, tight collaboration between design and engineering, and outputs that help stakeholders make decisions based on something real, not theoretical slides. Ignition Zero is about momentum — shrinking the gap between idea and evidence.",
          ],
        },
        {
          heading: "Project AIR",
          subheading:
            "A structured AI solution-development program focused on building custom models, workflows, and POCs for clients.",
          body: [
            "Project AIR takes the next step. When a client needs more than exploration — when they need a real AI solution, a working proof of concept, or a roadmap for adoption — AIR provides the framework. It brings together engineering, data, and partner ecosystems to design AI-driven capabilities grounded in feasibility and business value.",
            "Where Ignition Zero answers 'What is possible?' AIR answers 'What should we build?' and 'How do we build it at scale in a responsible way?' Together, they create a modern AI-native operating model: fast enough for early exploration, structured enough for real delivery.",
          ],
        },
      ],
    },
    {
      slug: "real-time-ai-translation",
      name: "Real-Time AI Translation for a Defense Agency",
      company: "World Wide Technology",
      tagline:
        "A secure, real-time multilingual translation prototype that enabled mission-speed intelligence in air-gapped environments.",
      image: "/images/work/defense/real-time-ai-translation.jpg",
      externalUrl: "https://www.wwt.com/case-study/real-time-ai-translation-expands-tactical-intelligence-for-defense-agency",
      sections: [
        {
          heading: "",
          body: [
            "A defense agency needed to translate large volumes of open-source intelligence from multiple languages into actionable reports. Manual processes were slow and risked losing critical time. Existing cloud solutions could not meet the security constraints, and most platforms lacked the regional dialect nuance required for trusted output.",
            "I led the design of a prototype built within a secure AI proving ground, combining speech recognition, document translation, and automated information retrieval in an air-gapped environment. The team refined regional language models, optimized GPU inference, and demonstrated real-time translation—all in three weeks.",
            "The result: a working prototype that reduced manual translation time from hours to minutes, preserved cultural nuance, and operated without internet connectivity, giving the agency a viable path to scale mission-ready intelligence workflows.",
          ],
        },
      ],
    },
    {
      slug: "wwf-together",
      name: "WWF Together",
      company: "AKQA",
      tagline:
        "An Apple Design Award–winning iPad experience that turned conservation facts into tactile, personal moments.",
      image: "/images/work/wwf/wwf-together.webp",
      videoUrl: "https://www.youtube.com/embed/pCkjfC5se7c",
      sections: [
        {
          heading: "",
          body: [
            "WWF Together is an interactive iPad experience designed to help people connect with endangered animals through tactile, hardware-driven interactions. When I joined, the project was drifting: quality concerns, unclear ownership, and slipping deadlines were putting the launch at risk.",
            "I stepped in to stabilize the technical direction, reset expectations with the external development team, and set a workable cadence with the creative lead.",
            "I partnered closely with design to concept bespoke interactions for each animal, using the iPad's capabilities to turn simple facts into moments that felt personal. With a lean, cross-disciplinary team, we shipped a focused, intimate experience that earned an Apple Design Award. It remains one of the clearest expressions of how I like to work: design instinct, technical fluency, and steady leadership in equal measure.",
          ],
        },
      ],
    },
    {
      slug: "verizon-express-store",
      name: "Verizon Express Store",
      company: "AKQA",
      tagline:
        "A prototype-driven retail concept that tested self-service models in smaller, faster Verizon stores.",
      image: "/images/work/verizon/verizon-express-store.webp",
      videoUrl: "https://player.vimeo.com/video/521468161?title=0&byline=0&portrait=0",
      sections: [
        {
          heading: "",
          body: [
            "Verizon needed to test a new retail model: smaller footprints, lighter staffing, and faster service. I led the prototyping of the large wall experiences and self-service kiosks, owning the interaction patterns, flows, and hands-on experimentation required to create something usable in a physical environment.",
            "We built a full-scale prototype store in the office, rebuilt it in a warehouse, and eventually took it into market. The hardest parts were aligning hardware constraints with digital intent, syncing flows with back-end and point-of-sale systems, and maintaining a fast loop with design and retail operations.",
            "The pilot showed that key transactions could move to self-service touchpoints, opening the door for new store formats and more flexible retail investment.",
          ],
        },
      ],
    },
    {
      slug: "audiusa",
      name: "AudiUSA.com",
      company: "AKQA",
      tagline:
        "A full platform redesign that modernized Audi's U.S. digital presence and improved model-year delivery.",
      image: "/images/work/audi/audiusa.webp",
      videoUrl: "https://player.vimeo.com/video/350079404?title=0&byline=0&portrait=0",
      sections: [
        {
          heading: "",
          body: [
            "When AKQA became Audi's digital partner in the United States, the platform was dated, slow, and hard to evolve. Model-year updates were painful, the content system struggled with complex vehicle data, and the front-end layer could not support the experience Audi wanted to present.",
            "I led the front-end team across architecture, workflows, and design prototyping to create a more sustainable base for the redesign. My work focused on unblocking creative exploration, defining reusable components, and setting up a predictable development process that aligned distributed teams in San Francisco, Washington, DC, and within Audi.",
            "The result was a more stable, more flexible platform and a faster model-year cadence, which strengthened AKQA's long-term partnership with Audi and gave the client greater confidence in future digital work.",
          ],
        },
      ],
    },
    {
      slug: "aarp-now",
      name: "AARP Now",
      company: "AKQA",
      tagline:
        "A mobile product vision that clarified purpose, sharpened member value, and set the direction for AARP's next-generation app.",
      image: "/images/work/aarp/aarp-now.webp",
      videoUrl: "https://www.youtube.com/embed/2KvnUApNEcs",
      sections: [
        {
          heading: "",
          body: [
            "AARP knew their mobile experience was falling behind. Members struggled to navigate core features, and the value of membership wasn't coming through. They asked for a reimagined mobile product that could drive stronger engagement and communicate clearer purpose.",
            "I joined the team to help refine the concept and build a vision that could rise above internal constraints. The initial pitch raised a wave of questions from AARP's leadership, signaling that the product needed stronger positioning and a clearer reason to exist. I worked closely with the team to reexamine user needs, sharpen the narrative around member value, and evolve the concept into something more focused and intentional.",
            "We spent the following weeks in steady contact with client stakeholders, iterating on flow, feature priority, and the core proposition. The result was a product vision that gave the client renewed confidence and energy, providing a clear guide for the MVP now in production. It showed AARP a version of the app that matched the expectations of modern members and clarified why the mobile experience mattered.",
          ],
        },
      ],
    },
    {
      slug: "watchdogs-digital-shadow",
      name: "Ubisoft Watch_Dogs: Digital Shadow",
      company: "AKQA",
      tagline:
        "A data-driven social campaign that turned Facebook's open graph into a narrative about personal exposure.",
      image: "/images/work/watchdogs/watchdogs-digital-shadow.webp",
      videoUrl: "https://www.youtube.com/embed/Dvn5aegzcts",
      sections: [
        {
          heading: "",
          body: [
            "Ubisoft wanted a campaign that could extend the themes of Watch_Dogs into the real world and reinforce the idea that personal data is more revealing than most people realize. The original brief called for multiple digital tent-pole moments connected to PAX, the trailer reveal, and other beats in the launch calendar.",
            "I joined the concept team to develop ideas that supported those moments and tied directly to the game's surveillance narrative. Early sessions focused on mapping user journeys and exploring how to connect marketing goals with the underlying lore. As budgets tightened, the work narrowed to a single execution that became Digital Shadow.",
            "This was during a window when Facebook's open graph still exposed meaningful connections and behavioral signals. We used this to build a narrative experience that felt like a personal audit. Instead of 'hacking' users, we reframed publicly available data into a story: who interacts with your posts, who you ignore, which relationships look unbalanced, and how those patterns could be exploited through simple social engineering. The impact came from showing people how exposed they already were.",
            "My work centered on shaping the narrative structure, refining how we interpreted data, and building quick prototypes that helped the client understand the tone, flow, and boundaries of the experience. Digital Shadow became the lead social campaign for the Watch_Dogs launch and a clear expression of the game's core themes.",
          ],
        },
      ],
    },
  ],
};

// ---------- TIMELINE ----------

export const timelinePage = {
  hero: {
    title: "Experience",
    subtitle: "More than two decades building, leading, and shaping the space between design, engineering, and strategy.",
  },
  timeline: [
    {
      period: "2023–Present",
      company: "World Wide Technology",
      companyUrl: "https://www.wwt.com",
      role: "Director of Creative Technology",
      location: "St Louis, Missouri · Remote",
      description: [
        "I lead a small, sharp team focused on making emerging technology—especially AI—practical inside a $20B enterprise. We prototype fast, frame clearly, and challenge slow-moving models. The work lives between strategy and execution: building tools, shaping narratives, and influencing how the business moves.",
        "I introduced new offerings like Project AIR (an AI accelerator) and Ignition Zero (a framework for AI-assisted product delivery). Both shift the way WWT sells and delivers work—less bespoke, more repeatable, and better aligned with client urgency.",
      ],
      highlights: [
        "Applied AI (LLMs, coding agents, architecture patterns)",
        "Prototyping as a strategy tool",
        "Technical framing for enterprise sales",
        "Designing and leading cross-functional teams",
        "Making complex systems legible and actionable",
      ],
    },
    {
      period: "2021–2023",
      company: "Red Antler",
      companyUrl: "https://www.redantler.com",
      role: "Head of Technology",
      location: "Brooklyn, New York · Remote",
      description: [
        "Brought a creative technologist's lens to a brand-first agency. My role was part builder, part translator—helping early-stage companies make smart technical bets while expanding the agency's POV on what technology could do.",
        "I led engineering efforts across a portfolio of DTC and SaaS brands, from fast-turn marketing sites to scalable platform builds. I also introduced standards, tooling, and delivery patterns to support growth without sacrificing craft.",
        "When resources were limited, I pushed for smarter use of no-code and modular systems. When expectations were unclear, I built prototypes that helped teams align. And when clients didn't know what they needed yet—I helped them figure it out.",
      ],
      highlights: [
        "Technical strategy for brand and product work",
        "Engineering leadership in lean environments",
        "Modular systems and JAMstack architecture",
        "No-code/low-code enablement",
        "Prototypes to sell, scope, and steer",
      ],
      clients: ["Figure", "Shopify Ventures", "Expressable"],
    },
    {
      period: "2009–2021",
      company: "AKQA",
      companyUrl: "https://www.akqa.com",
      role: "Developer to Director of Creative Technology",
      location: "San Francisco, CA and Washington, DC · On-site",
      description: [
        "Twelve years of building, leading, and evolving what creative technology meant inside one of the industry's most awarded agencies. I started as a front-end developer and eventually led emerging tech efforts across multiple offices—prototyping new interactions, onboarding major accounts, and mentoring teams through both polish and chaos.",
        "My work ranged from early mobile web to Alexa skills, from pitch sprints to production launches. I helped shape the relationship between technology and creativity—ensuring our ideas worked as well as they looked.",
      ],
      highlights: [
        "Led the tech track for Verizon's Express retail pilot, from hardware to commerce integration",
        "Built an award-winning iPad app for WWF, honored with an Apple Design Award",
        "Created a dungeon-quest Alexa skill for Bethesda's E3 showcase",
        "Supported Audi of America through a major platform transition as they named AKQA AOR",
      ],
      focus: [
        "Creative development and front-end architecture",
        "Prototyping across platforms (mobile, voice, retail)",
        "Technical leadership across global teams",
        "Scoping and delivery for brand-centric innovation work",
        "Building client trust through craft and clarity",
      ],
    },
    {
      period: "2006–2009",
      company: "Under Armour",
      companyUrl: "https://www.underarmour.com",
      role: "Manager - Interactive Technology",
      location: "Baltimore, Maryland · On-site",
      description: [
        "Joined as e-commerce became a core growth engine. I led development for campaign sites and boutique commerce tools, supporting key brand moments like the launch of Under Armour's footwear category and the relaunch of its women's line.",
        "I worked across marketing, product, and engineering to scale UnderArmour.com through three major iterations—helping grow DTC revenue from $4M to over $100M. Along the way, I helped shape how the brand delivered digital content at speed without compromising quality.",
      ],
      highlights: [
        "Front-end development for campaign and commerce experiences",
        "Cross-functional delivery with brand, marketing, and product teams",
        "Scalable architecture for high-traffic retail",
        "Fast-turn production for new product launches",
        "Elevating technical craft inside a brand-led organization",
      ],
    },
    {
      period: "2004–2006",
      company: "Congruent Media",
      role: "Lead Designer",
      location: "Baltimore, Maryland · On-site",
      description: [],
      highlights: [],
    },
    {
      period: "2003–2004",
      company: "North Charles Street Design Organization",
      companyUrl: "https://www.ncsdo.com",
      role: "Web Developer",
      location: "Baltimore, Maryland · On-site",
      description: ["Contract position focused on web development."],
      highlights: [],
    },
    {
      period: "1999–2002",
      company: "Radicus Internet",
      role: "Web Designer",
      location: "Baltimore, Maryland Area",
      description: [],
      highlights: [],
    },
    {
      period: "1998–2004",
      company: "Headcold Laboratories",
      role: "Partner",
      location: "Baltimore, Maryland Area",
      description: ["Freelance partnership focused on early web design and development."],
      highlights: [],
    },
  ],
  education: {
    school: "University of Maryland Baltimore County",
    period: "1997–2001",
  },
};

// ---------- FOOTER ----------

export const footer = {
  heading: "Get in touch",
  email: "scott@scullum.com",
  linkedinLabel: "LinkedIn →",
  availability: "Currently accepting select engagements for 2026.",
  tagline: "A creative technologist who helps teams cut through ambiguity and move the work forward.",
};
