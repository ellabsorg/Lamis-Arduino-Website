export const ABOUT_TOC = [
  {
    id: "what-is-arduino",
    title: "what is arduino",
  },
  {
    id: "mission-vision",
    title: "Our Mission & Vision",
    children: [
      {
        id: "maker",
        title: "maker",
      },
      {
        id: "edu",
        title: "edu",
      },
      {
        id: "pro",
        title: "pro",
      },
    ],
  },
  {
    id: "arduino-team",
    title: "the arduino team",
    children: [
      {
        id: "founders",
        title: "founders",
      },
      {
        id: "management-team",
        title: "management team",
      },
    ],
  },
  {
    id: "tech-partnership",
    title: "tech partnership",
  },
  {
    id: "distributors",
    title: "our distributors",
  },
];

export const aboutMainContent = [
  {
    id: "what-is-arduino",
    title: "what is arduino",

    text: [
      `Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users’ needs from students to makers and all the way to professional developers. content platform, with several cool projects to follow step by step`,
    ],
    link: [`Find out more`],
  },
  {
    id: "mission-vison",
    title: "Our Mission & Vision",

    text: [
      `Arduino’s mission is to enable anyone to enhance their lives through accessible electronics and digital technologies. There was once a barrier between the electronics, design, and programming world and the rest of the world. Arduino has broken down that barrier`,
      `Over the years, our products have been the brains behind thousands of projects, from everyday objects to complex scientific instruments. A worldwide community, comprising students, hobbyists, artists, programmers, and professionals, has gathered around this open-source platform, their contributions adding up to an incredible amount of accessible knowledge.`,
      `Our vision is to make Arduino available to everyone, whether you are a student, maker or professional, which is why we now have three segments to our business. These segments work together as an ecosystem with a shared mindset: we started with Maker, and that has evolved into Education and PRO solutions.`,
    ],
    children: [
      {
        id: "maker",
        title: "maker",
        text: [
          `Find creative solutions to everyday challenges`,
          `For makers around the world, our goal is to democratize the most advanced technologies and create a new set of opportunities for creative people, whether that’s through connected products, advanced sensors, Cloud & Apps, machine learning, AI, etc.`,
          `Arduino empowers creative minds to master technology and intuitively solve everyday problems. Our platform simplifies the use of otherwise complex tools. For example, programming a securely connected IoT device is just a few clicks away with the use of the Arduino Cloud.`,
        ],
      },

      {
        id: "edu",
        title: "Edu",
        text: [
          `Empower the next generations of students to be the disruptors of the future`,
          `For middle school, high school, and university educators who want to deliver relevant, fun, and creative STEAM lessons that enable all students to thrive, Arduino Education’s open-source approach and cross-curriculum content are essential tools that develop and empower students as they progress through their STEAM education.`,
          `Our classroom programs include kits, bundles, and boards with project-based learning paths for individual and collaborative educational approaches. Teaching remotely? We have kits designed for remote, individual learning, making hands-on STEAM education accessible even when the classroom isn’t.`,
          `Find out more about Education.`,
        ],
      },
      {
        id: "pro",
        title: "Pro",
        text: [
          `Enable businesses of any size to exploit the potential of AI and IoT`,
          `The PRO line is designed to enable businesses to quickly and securely connect remote sensors to business logic within one simple IoT application development platform, transferring the productivity and creativity that makers enjoy with Arduino into the business world.`,
          `We aim to help companies transform their business models with IoT, providing robust, hackable, and understandable IoT hardware and SaaS platforms.`,
          `Arduino can support the full development, production, and operation lifecycle, from hardware and firmware to low code, Cloud, and mobile apps..`,
          `Find out more about PRO.`,
        ],
      },
    ],
  },
  {
    id: "arduino-team",
    title: "The arduino Team",

    children: [
      {
        id: "founders",
        title: "founders",
        table: {
          columns: 2,
          content: [
            {
              id: 0,
              title: "Massimo Banzi",
              position: "Co-founder, Chairman & CMO",
              description: [
                `Massimo Banzi is an interaction designer, educator, open-source hardware pioneer, and TED speaker. His background is in electrical engineering, but he spent most of his early career working as a software architect before spending four years at the Interaction Design Institute Ivrea as an Associate Professor. He has taught workshops and has been a guest speaker at institutions all over the world.`,
                `Always interested in what's new, Massimo started the first FabLab in Italy, and is also the author of the book “Getting Started with Arduino”.`,
                `He currently teaches at USI University and SUPSI in Switzerland, and is a visiting professor at CIID in Copenhagen.`,
              ],
              imageSrc:
                "https://www.arduino.cc/wiki/static/ca7bd98aeb62be1f15e8f701526b437f/c1b63/massimo-banzi.png",
            },
            {
              id: 1,
              title: "David Cuartielles",
              position: "Co-founder & Content Lead",
              description: [
                `David is a university lecturer and leads the Content Unit at Arduino.`,
                `He holds an MSc in Telecommunications Engineering and a PhD in Interaction Design, and has lectured at Malmö University in Sweden since 2000. David has been a visiting scholar at universities in the Americas, Europe, and Asia, has written several books on programming, and is an international speaker on open-source hardware and STEAM education.`,
                `David has been awarded both for his work at Arduino and his professional career, is an Ashoka Fellow for Spain, and actively supports several SMEs in Spain and the Americas in the field of technology and education.`,
              ],
              imageSrc:
                "https://www.arduino.cc/wiki/static/49af50898f7fbbc41a7d7ef056cedb1c/c1b63/david-cuartielles.png",
            },
            {
              id: 2,
              title: "Massimo Banzi",
              position: "Co-founder, Chairman & CMO",
              description: [
                `Massimo Banzi is an interaction designer, educator, open-source hardware pioneer, and TED speaker. His background is in electrical engineering, but he spent most of his early career working as a software architect before spending four years at the Interaction Design Institute Ivrea as an Associate Professor. He has taught workshops and has been a guest speaker at institutions all over the world.`,
                `Always interested in what's new, Massimo started the first FabLab in Italy, and is also the author of the book “Getting Started with Arduino”.`,
                `He currently teaches at USI University and SUPSI in Switzerland, and is a visiting professor at CIID in Copenhagen.`,
              ],
              imageSrc:
                "https://www.arduino.cc/wiki/static/ca7bd98aeb62be1f15e8f701526b437f/c1b63/massimo-banzi.png",
            },
            {
              id: 3,
              title: "David Cuartielles",
              position: "Co-founder & Content Lead",
              description: [
                `David is a university lecturer and leads the Content Unit at Arduino.`,
                `He holds an MSc in Telecommunications Engineering and a PhD in Interaction Design, and has lectured at Malmö University in Sweden since 2000. David has been a visiting scholar at universities in the Americas, Europe, and Asia, has written several books on programming, and is an international speaker on open-source hardware and STEAM education.`,
                `David has been awarded both for his work at Arduino and his professional career, is an Ashoka Fellow for Spain, and actively supports several SMEs in Spain and the Americas in the field of technology and education.`,
              ],
              imageSrc:
                "https://www.arduino.cc/wiki/static/49af50898f7fbbc41a7d7ef056cedb1c/c1b63/david-cuartielles.png",
            },
          ],
        },
      },

      {
        id: "edu",
        title: "Edu",
        text: [
          `Empower the next generations of students to be the disruptors of the future`,
          `For middle school, high school, and university educators who want to deliver relevant, fun, and creative STEAM lessons that enable all students to thrive, Arduino Education’s open-source approach and cross-curriculum content are essential tools that develop and empower students as they progress through their STEAM education.`,
          `Our classroom programs include kits, bundles, and boards with project-based learning paths for individual and collaborative educational approaches. Teaching remotely? We have kits designed for remote, individual learning, making hands-on STEAM education accessible even when the classroom isn’t.`,
          `Find out more about Education.`,
        ],
      },
      {
        id: "pro",
        title: "Pro",
        text: [
          `Enable businesses of any size to exploit the potential of AI and IoT`,
          `The PRO line is designed to enable businesses to quickly and securely connect remote sensors to business logic within one simple IoT application development platform, transferring the productivity and creativity that makers enjoy with Arduino into the business world.`,
          `We aim to help companies transform their business models with IoT, providing robust, hackable, and understandable IoT hardware and SaaS platforms.`,
          `Arduino can support the full development, production, and operation lifecycle, from hardware and firmware to low code, Cloud, and mobile apps..`,
          `Find out more about PRO.`,
        ],
      },
    ],
  },
  {
    id: "retired",
    title: "retired",
    text: [
      `To view all retired Arduino products, please visit our Retired Products & Legacy Documentation page. This includes all legacy products, getting started guides and other documentation that is considered legacy.`,
    ],
  },
];
