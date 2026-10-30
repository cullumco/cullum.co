// content.ts

export const siteMeta = {
  name: "Cullum & Co",
  tagline: "I'm Scott Cullum, a creative technologist and hands-on technical leader. I help teams shape ideas, build prototypes, and guide products through delivery.",
  url: "https://cullumandco.com",
  email: "scott@cullumandco.com",
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
    title: "Cullum & Co",
    subtitle: "I'm Scott Cullum. I help teams turn early ideas into working products.",
    body: [
      "I'm a creative technologist and hands-on technical leader. I shape the experience, build prototypes to test difficult ideas, and guide the technical decisions behind delivery.",
      "Cullum & Co is my practice, with room for trusted collaborators and AI agents when the work calls for them. You work directly with me.",
    ],
    cta: {
      label: "View work",
      href: "/work",
    },
  },
  howIHelp: {
    heading: "How I help",
    items: [
      { label: "Direction and decisions", href: "/services#direction-and-decisions" },
      { label: "Prototyping and technical leadership", href: "/services#prototyping-and-technical-leadership" },
      { label: "Helping teams work better", href: "/services#helping-teams-work-better" },
    ],
  },
  featuredWork: {
    heading: "Selected work",
    intro: "Work in conservation, retail, and applied AI, alongside a product from my own practice.",
    projects: [
      {
        slug: "wwf-together",
        description: "I helped shape the interactions and stabilized technical delivery on an Apple Design Award–winning iPad experience.",
      },
      {
        slug: "verizon-express-store",
        description: "I led hands-on prototyping of self-service kiosks and wall experiences for a new retail model.",
      },
      {
        slug: "real-time-ai-translation",
        description: "I led the design of an offline translation prototype, demonstrated by the team in three weeks.",
      },
      {
        slug: "kettel",
        description: "A shared planning workspace for strategy, design, and engineering teams working with AI coding agents.",
      },
    ],
  },
};

// ---------- ABOUT ----------

export const aboutPage = {
  hero: {
    kicker: "",
    title: "About Scott Cullum",
    subtitle: "A background in design and a career in building.",
  },
  sections: [
    {
      heading: "Scott Cullum",
      body: [
        "I started in web design and front-end development. My work grew from campaign and commerce sites at Under Armour to apps, platforms, and retail experiences at AKQA, then engineering leadership at Red Antler and creative technology at World Wide Technology.",
        "I've stayed hands-on as the roles changed. The work has involved developing interactions with designers, building prototypes, leading engineering teams, and helping clients decide what to make.",
      ],
    },
    {
      heading: "What shaped my approach",
      body: [
        "On WWF Together at AKQA, I helped stabilize a project whose launch was at risk while partnering with design on the animal interactions. The job required attention to both the creative idea and the working relationship with the external developers. The team shipped an iPad experience that earned an Apple Design Award.",
        "Verizon Express Store put the work in a physical setting. I led prototypes of kiosks and wall experiences, working through hardware constraints and connections to point-of-sale systems. We tested a full-scale store in the office and a warehouse before taking it into market.",
        "At Red Antler, I worked with early-stage companies and lean teams, using prototypes to clarify expectations and modular systems when resources were limited. At World Wide Technology, I created Ignition Zero and Project AIR to support two different needs: testing product ideas and developing custom AI solutions.",
        "That experience shapes how I work now. I build early enough to test the idea, work through the constraints with the people responsible for delivery, and stay involved as the details change. I'm based near Washington, DC, and work remotely with teams across the country.",
      ],
    },
  ],
};

// ---------- SERVICES ----------

export const servicesPage = {
  hero: {
    title: "Services",
    intro: [
      "Bring me in when you need to choose a direction, test a difficult idea, or help your team deliver it.",
    ],
  },
  services: [
    {
      id: "direction-and-decisions",
      name: "Direction and decisions",
      summary: "Work out what to make, why it matters, and what it will take.",
      description: [
        "When priorities compete or an idea is still taking shape, I help your team choose a direction and make the product and technical decisions behind it.",
      ],
      whatThisIncludes: [
        "Prioritization, direction, and feasibility guidance",
        "Translating loose concepts into concrete next steps",
        "Technical scoping and decision support",
        "Connecting design intent with engineering constraints",
      ],
      goodFor: [
        "Teams choosing a direction, weighing trade-offs, or needing an ongoing senior perspective.",
      ],
    },
    {
      id: "prototyping-and-technical-leadership",
      name: "Prototyping and technical leadership",
      summary: "Test the idea in something people can use.",
      description: [
        "I build prototypes to explore interactions and test assumptions, then help shape the architecture and delivery approach for the work ahead.",
      ],
      whatThisIncludes: [
        "Prototypes and proofs of concept",
        "Fast-turn exploration across design and engineering",
        "Front-end architecture and planning",
        "Component and design system guidance",
        "Hands-on collaboration with your team",
        "Clear, practical recommendations",
      ],
      goodFor: [
        "Teams testing a concept before committing, preparing for investment, or needing technical leadership through delivery.",
      ],
    },
    {
      id: "helping-teams-work-better",
      name: "Helping teams work better",
      summary: "Improve how design and engineering work together.",
      description: [
        "I work with your team to find bottlenecks, simplify handoffs, and introduce tools and practices they can use in the work.",
      ],
      whatThisIncludes: [
        "Workflow and process improvements",
        "Stronger collaboration between design and engineering",
        "Coaching on AI tools and agent workflows",
        "Reduction of unnecessary complexity",
      ],
      goodFor: [
        "Teams that need to improve delivery, collaborate more closely, or put AI tools to practical use.",
      ],
    },
  ],
  engagement: {
    heading: "How engagements work",
    body: [
      "I usually work part-time as a fractional partner, combining advisory support with hands-on work. Weekly or biweekly working sessions give us a regular place to make decisions and review progress.",
      "I use AI tools and agents where they help me explore, prototype, and build. When an engagement needs more depth, I bring in designers, engineers, and specialists I've worked with before.",
    ],
  },
};

// ---------- WORK ----------

export const workPage = {
  hero: {
    title: "Work",
    intro: [
      "Selected projects from Cullum & Co and my work at AKQA and World Wide Technology, with my role and contributions in each case study.",
    ],
  },
  projects: [
    {
      slug: "cadence",
      name: "Cadence",
      company: "Cullum & Co",
      tagline:
        "An open-source context layer that helps coding agents adapt to how you're working.",
      image: "/images/work/cadence/cadence.webp",
      externalUrl: "https://cullumco.github.io/cadence/",
      externalLabel: "Visit the Cadence site →",
      sections: [
        {
          heading: "",
          body: [
            "A prompt can leave out how you want to work: whether you're exploring a decision, trying to ship, or returning after a break. I'm building Cadence to give coding agents that context, using signals from the work around the prompt.",
            "I developed it in the open through Cullum & Co, with an alpha implemented as a macOS-first Claude Code plugin. It adds an inspectable context block to each prompt, describing pace, tone, posture, and proactivity while leaving your words intact.",
          ],
        },
        {
          heading: "Making the context visible",
          body: [
            "Time, git state, prompt rhythm, music, Focus mode, and a self-reported state inform four independent dials. You can inspect what the agent receives, and your explicit instructions take precedence.",
            "The aim is to let the agent adjust its response to the situation. A question about retry logic might call for a concrete implementation when you're shipping, or a slower discussion of trade-offs when you're exploring. That is the behavior the context layer is designed to support.",
          ],
        },
      ],
    },
    {
      slug: "kettel",
      name: "Kettel",
      company: "Cullum & Co",
      tagline:
        "A shared planning workspace for strategy, design, and engineering teams working with coding agents.",
      image: "/images/work/kettel/kettel.webp",
      externalUrl: "https://kettel.cullum.co",
      externalLabel: "Visit the Kettel site →",
      sections: [
        {
          heading: "",
          body: [
            "When a team's work moves into one person's conversation with a coding agent, the thinking behind it can become hard for everyone else to see or shape. Kettel gives strategy, design, and engineering a shared place to develop the plan before implementation.",
            "Kettel is a product from my practice, Cullum & Co, developed in the open. Its central artifact is a structured Markdown plan in the team's git repository, with an owner for each section and attributed annotations. The plan can be handed to a coding agent without giving it access to Kettel.",
          ],
        },
        {
          heading: "Keeping the thinking with the handoff",
          body: [
            "Strategy contributes intent, design contributes direction, and engineering contributes the technical approach. A linked notebook holds research, customer quotes, and technical experiments so the agent can follow the relationships behind the plan.",
            "The plan file, notebook, and agent integration are open source. The handoff is self-contained for tools such as Claude Code, Cursor, and Windsurf, so the team's reasoning can travel with the work.",
          ],
        },
      ],
    },
    {
      slug: "ignition-zero-project-air",
      name: "Ignition Zero & Project AIR",
      company: "World Wide Technology",
      tagline:
        "Two programs I created at WWT for product exploration and custom AI solution development.",
      image: "/images/work/ignition/ignition-zero-project-air.avif",
      sections: [
        {
          heading: "",
          body: [
            "At World Wide Technology, I created Ignition Zero and Project AIR for clients with different starting points. Some needed to test a product idea; others needed a custom AI model, workflow, or proof of concept.",
            "I separated those needs into two programs. Ignition Zero uses early prototypes to support product decisions. Project AIR brings engineering, data, and technology partners together around feasibility and solution development.",
          ],
        },
        {
          heading: "Ignition Zero",
          body: [
            "A short intake and close collaboration between design and engineering give the team a starting point for exploration. AI-assisted engineering supports prototypes of multiple directions in parallel, with feedback used to narrow the options. Stakeholders can review something working before committing to a direction.",
          ],
        },
        {
          heading: "Project AIR",
          body: [
            "Project AIR provides a framework for developing custom models, workflows, and proofs of concept. Engineering, data, and partner expertise inform what is feasible and how a client could adopt the solution. The scope can include a working proof of concept or an adoption roadmap.",
          ],
        },
      ],
    },
    {
      slug: "real-time-ai-translation",
      name: "Real-Time AI Translation for a Defense Agency",
      company: "World Wide Technology",
      tagline:
        "An offline translation prototype demonstrated in three weeks for a defense agency.",
      image: "/images/work/defense/real-time-ai-translation.jpg",
      externalUrl: "https://www.wwt.com/case-study/real-time-ai-translation-expands-tactical-intelligence-for-defense-agency",
      sections: [
        {
          heading: "",
          body: [
            "A defense agency needed to translate large volumes of open-source intelligence, but cloud services could not meet its security constraints. I led the design of an offline prototype combining speech recognition, document translation, and automated information retrieval.",
            "The team demonstrated real-time translation in three weeks. The working prototype reduced manual translation from hours to minutes and operated without internet connectivity.",
          ],
        },
        {
          heading: "Working within the security and language constraints",
          body: [
            "The prototype ran in an air-gapped environment inside a secure AI proving ground. The team refined regional language models to preserve dialect and cultural nuance, and optimized GPU inference for real-time output. Those constraints shaped both the architecture and the translation workflow.",
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
            "When I joined WWF Together at AKQA, quality concerns, unclear ownership, and slipping deadlines were putting the launch at risk. I reset the technical direction and expectations with the external developers, and established a workable cadence with the creative lead.",
            "I also partnered with design on bespoke interactions for the animals. Our team shipped an iPad experience that helped people connect with endangered species and earned an Apple Design Award.",
          ],
        },
        {
          heading: "Using the device to tell the story",
          body: [
            "We used the iPad's hardware capabilities to turn conservation facts into tactile interactions. Each animal called for its own idea and behavior. I worked closely with design to develop those interactions while keeping technical delivery on course with the external team.",
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
            "Verizon wanted to test smaller stores with lighter staffing and faster service. I led hands-on prototyping of the large wall experiences and self-service kiosks, including their interaction patterns and transaction flows.",
            "The team took the concept from a full-scale prototype into market. The pilot showed that key transactions could move to self-service touchpoints, giving Verizon a basis for exploring new store formats.",
          ],
        },
        {
          heading: "Testing at the scale of a store",
          body: [
            "We built the prototype store in the office, rebuilt it in a warehouse, and then tested it in market. I worked through hardware constraints and connections to back-end and point-of-sale systems, keeping a fast feedback loop with design and retail operations. Testing the physical environment was part of designing the digital experience.",
          ],
        },
      ],
    },
    {
      slug: "audiusa",
      name: "AudiUSA.com",
      company: "AKQA",
      tagline:
        "Front-end leadership for a platform redesign that made model-year updates easier to deliver.",
      image: "/images/work/audi/audiusa.webp",
      videoUrl: "https://player.vimeo.com/video/350079404?title=0&byline=0&portrait=0",
      sections: [
        {
          heading: "",
          body: [
            "Audi's U.S. website was slow and difficult to update. The content system struggled with complex vehicle data, and the front end limited the experience the brand wanted. I led AKQA's front-end team across architecture, workflows, and design prototyping for the redesign.",
            "We delivered a more stable, flexible platform and a faster model-year update process. My focus was a reusable component base and a development process that worked across the client and agency teams.",
          ],
        },
        {
          heading: "Making the redesign easier to maintain",
          body: [
            "I used design prototypes to explore the experience while defining reusable components for implementation. The delivery process had to connect teams in San Francisco, Washington, DC, and within Audi, so architecture and workflow decisions were part of the same effort.",
          ],
        },
      ],
    },
    {
      slug: "aarp-now",
      name: "AARP Now",
      company: "AKQA",
      tagline:
        "A mobile product vision organized around the value of AARP membership.",
      image: "/images/work/aarp/aarp-now.webp",
      videoUrl: "https://www.youtube.com/embed/2KvnUApNEcs",
      sections: [
        {
          heading: "",
          body: [
            "AARP members struggled to navigate core mobile features and see the value of membership. I joined AKQA's team to refine the product concept, working on user needs, the member-value narrative, and the proposition behind the app.",
            "After the initial pitch raised questions from AARP's leadership, we spent the following weeks revising the vision with client stakeholders. We reexamined what the app should do for members and produced a more focused set of flows and feature priorities to guide the MVP.",
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
            "Ubisoft wanted to bring the surveillance themes of Watch_Dogs into the real world. I joined AKQA's concept team, shaping the narrative, refining how we interpreted data, and building prototypes that let the client judge the tone, flow, and boundaries of the experience.",
            "As the budget narrowed, the work moved from several launch moments to one execution: Digital Shadow. It became the lead social campaign for the Watch_Dogs launch, using people's Facebook data to make personal exposure tangible.",
          ],
        },
        {
          heading: "Turning available data into a personal story",
          body: [
            "At the time, Facebook's Open Graph exposed connections and behavioral signals that could support the experience. We used those signals to describe who interacted with your posts, which relationships looked unbalanced, and how those patterns could be used in social engineering.",
            "The prototypes helped us connect that personal audit to the game's narrative and the campaign's user journey. The experience drew on data available through the platform at the time; it did not depend on hacking users.",
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
        "I lead a team focused on applying emerging technology, especially AI, to enterprise work. We build prototypes and tools, develop technical proposals, and help teams evaluate possible approaches.",
        "I introduced Project AIR, a program for custom AI solutions, and Ignition Zero, a framework for AI-assisted product exploration.",
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
  heading: "Let's talk about the work",
  invitation: "Tell me what you're trying to make, where you're stuck, and what kind of help would be useful. If you have a timeline in mind, include that too.",
  email: siteMeta.email,
  linkedinLabel: "LinkedIn →",
  tagline: "Scott Cullum · Creative technology, design, and engineering.",
};
