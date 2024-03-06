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
    id: "tech-partnerships",
    title: "tech partnerships",
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
    paragraphs: [
      `Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users' needs from students to makers and all the way to professional developers. content platform, with several cool projects to follow step by step`,
    ],
    link: [`Find out more`],
  },
  {
    id: "mission-vison",
    title: "Our Mission & Vision",
    paragraphs: [
      `Arduino's mission is to enable anyone to enhance their lives through accessible electronics and digital technologies. There was once a barrier between the electronics, design, and programming world and the rest of the world. Arduino has broken down that barrier`,
      `Over the years, our products have been the brains behind thousands of projects, from everyday objects to complex scientific instruments. A worldwide community, comprising students, hobbyists, artists, programmers, and professionals, has gathered around this open-source platform, their contributions adding up to an incredible amount of accessible knowledge.`,
      `Our vision is to make Arduino available to everyone, whether you are a student, maker or professional, which is why we now have three segments to our business. These segments work together as an ecosystem with a shared mindset: we started with Maker, and that has evolved into Education and PRO solutions.`,
    ],
    children: [
      {
        id: "maker",
        title: "maker",
        paragraphs: [
          `Find creative solutions to everyday challenges`,
          `For makers around the world, our goal is to democratize the most advanced technologies and create a new set of opportunities for creative people, whether that's through connected products, advanced sensors, Cloud & Apps, machine learning, AI, etc.`,
          `Arduino empowers creative minds to master technology and intuitively solve everyday problems. Our platform simplifies the use of otherwise complex tools. For example, programming a securely connected IoT device is just a few clicks away with the use of the Arduino Cloud.`,
        ],
      },

      {
        id: "edu",
        title: "Edu",
        paragraphs: [
          `Empower the next generations of students to be the disruptors of the future`,
          `For middle school, high school, and university educators who want to deliver relevant, fun, and creative STEAM lessons that enable all students to thrive, Arduino Education's open-source approach and cross-curriculum content are essential tools that develop and empower students as they progress through their STEAM education.`,
          `Our classroom programs include kits, bundles, and boards with project-based learning paths for individual and collaborative educational approaches. Teaching remotely? We have kits designed for remote, individual learning, making hands-on STEAM education accessible even when the classroom isn't.`,
          `Find out more about Education.`,
        ],
      },
      {
        id: "pro",
        title: "Pro",
        paragraphs: [
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
        tables: [
          {
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
                title: "Tom Igoe",
                position: "Co-founder",
                description: [
                  `Tom Igoe is the area head for physical computing courses, in which students learn to consider the motivations and actions of the people for whom they're designing as the foundation for physical interaction design. His research interests also include networks, lighting design, the environmental and social impacts of technology development, and monkeys. He has written four books and a number of articles related to electronics and physical interaction.`,
                  `He has consulted for various museums and interactive design companies as well. He hopes to visit Svalbard someday.`,
                ],
                imageSrc:
                  "https://www.arduino.cc/wiki/static/8b930b217003cf1f4a639fc6d5cea1dd/c1b63/tom-igoe.png",
              },
              {
                id: 3,
                title: "David Mellis",
                position: "Co-founder",
                description: [
                  `David A. Mellis is a software architect at Autodesk, building software for circuit design. His work seeks to engage new audiences in using electronics for creative and do-it-yourself practices. Previously, David was a postdoc at UC Berkeley with Björn Hartmann. David completed his graduate studies at the MIT Media Lab, getting his PhD in Mitchel Resnick's Lifelong Kindergarten group and his master's in Leah Buechley's High-Low Tech group.`,
                  `Prior to the Media Lab, David taught at the Copenhagen Institute of Interaction Design (Denmark). He has a master's in interaction design from the Interaction Design Institute Ivrea (Italy).`,
                ],
                imageSrc:
                  "https://www.arduino.cc/wiki/static/e8f405b6230a314267cb58ce9150f280/c1b63/david-mellis.png",
              },
            ],
          },
        ],
      },

      {
        id: "management-team",
        title: "management team",
        tables: [
          {
            content: [
              {
                id: 0,
                title: "Fabio Violante",
                position: "CEO",
                description: [
                  `Fabio has been working with Arduino since late 2015, and became CEO in 2017. Prior to joining Arduino, he co-founded enterprise software firm Neptuny, before selling it to BMC Software and acting as CTO for five years.`,
                  `Fabio is also a co-founder of The Moviri Group (which includes Moviri, Cleafy, Contentwise, and Akamas), and holds a Ph.D. in Computer Engineering from Politecnico di Milano.`,
                ],
                imageSrc:
                  "https://www.arduino.cc/wiki/static/34f3c36efac16307bedce614b7d255d1/c1b63/fabio-violante.png",
              },
              {
                id: 1,
                title: "Pietro Dore",
                position: "COO",
                description: [
                  `Pietro joined Arduino in 2014 following more than 15 years of executive experience at high-growth tech companies across Europe.`,
                  `Prior to that, he was a Senior Manager at Bain & Co. Pietro holds an MBA from Columbia Business School.`,
                ],
                imageSrc:
                  "https://www.arduino.cc/wiki/static/4a287b88dbc1a064213f188581494376/c1b63/pietro-dore.png",
              },
              {
                id: 2,
                title: "Giuseppe Ferrara",
                position: "Global Finance Director",
                description: [
                  `Giuseppe has been with Arduino since 2017 and has more than 20 years of experience in the finance field, with experience across different sectors in Italy and the UK.`,
                ],
                imageSrc:
                  "https://www.arduino.cc/wiki/static/93320cd3049eba122baebb8b87d2f8ba/c1b63/giuseppe-ferrara.png",
              },
            ],
          },
          {
            columns: 4,
            content: [
              {
                id: 0,
                title: "Alessandro Ranellucci",
                position: "Head of Makers Business",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/6d1c8e8e6dd64cd4873e4579d73b6fb5/c1b63/alessandro-ranellucci.png",
              },
              {
                id: 1,
                title: "Adriano Chinello",
                position: "Head of PRO Business",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/de4979c23bf8c8fd3b48e0701c318bfe/c1b63/adriano-chinello.png",
              },
              {
                id: 2,
                title: "Guneet Bedi",
                position: "SVP and GM - Americas",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/bf1f3a497c4f4736fab2159344325fac/7cc5e/Guneet.jpg",
              },
              {
                id: 3,
                title: "Yu Hu",
                position: "Head of Education Business",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/acff212cc3a9ef1b4c9e95642c06e081/c1b63/yu-hu.png",
              },
              {
                id: 4,
                title: "Stefano Visconti",
                position: "CIO - Head of Engineering",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/77c109e81299cc342acb4bab296570f6/c1b63/stefano-visconti.png",
              },
              {
                id: 5,
                title: "Stefano Implicito",
                position: "Marketing",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/b822950f4be20b87ff8688e5e4c80069/4d836/Implicito.jpg",
              },
              {
                id: 6,
                title: "Giovanni Fagherazzi",
                position: "Global Sales",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/674bf850b6096700d505992a9c9e4629/c1b63/fagherazzi.png",
              },
              {
                id: 7,
                title: "Francesca Manna",
                position: "Human Resources",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/74ad50fc37ef4a8494538ed603294c20/9d5da/francesca-manna.png",
              },
              {
                id: 8,
                title: "Judit Martinez",
                position: "Customer Experience",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/a6686a8f087ccc4e5f73feecc09db4cd/c1b63/judit-martinez.png",
              },
              {
                id: 9,
                title: "Daria Baradel",
                position: "Supply Chain",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/079f4e8aa7dab768cdad880f8a511198/c1b63/daria-baradel.png",
              },
              {
                id: 10,
                title: "Nerea De La Riva Iriepa",
                position: "Education Sales",
                imageSrc:
                  "https://www.arduino.cc/wiki/static/f49fc07701ed8f6e703033927a566a84/c1b63/nerea-iriepa.png",
              },
              {
                id: 11,
                title: "",
                position: "",
                imageSrc: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "tech-partnerships",
    title: "Tech Partnerships",
    paragraphs: [
      `We work closely with technology leaders around the world to ensure our products are always cutting edge, aligned with the latest trends, and grounded in the real world`,
    ],
    table: {
      content: [
        {
          id: 0,
          description: [
            `Altium is a leading CAD software tool manufacturer. We collaborate on desktop and web-based electronic design tools.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/3fe8c1990886f7f147de56229f8876ad/altium.svg",
        },
        {
          id: 1,
          description: [
            `ARM is a key MCU technology and operating system partner. Our deep collaboration includes market development.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/006c94eee418e12c277c106b6ad8d5e1/arm.svg",
        },
        {
          id: 2,
          description: [
            `Bosch is a development partner and hardware supplier for a variety of sensors including pressure, temperature, and humidity.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/2d3fd9774dd6d64a1ef1959bb849148e/bosch.svg",
        },
        {
          id: 3,
          description: [
            `Cyberon is a leading embedded speech solution provider for mobile devices, offering a natural & reliable user experience.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/72b8fa40f5d5bb6030335b139c9540fe/cyberon.svg",
        },
        {
          id: 4,
          description: [
            `Edge Impulse is a Silicon Valley-based machine learning software partner focusing on TinyML SDKs for developers.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/14ee4cd456177e8ff5a7c7aa335fe9a3/edge-impulse.svg",
        },
        {
          id: 5,
          description: [
            `Arduino leverages the cloud-based DevOps platform from Foundries.io to reinvent the way embedded Linux solutions are built, tested, deployed and maintained.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/f536f2e9d8d4f53f72c7c164c66a8078/foundriesio.svg",
        },
        {
          id: 6,
          description: [
            `Google is an Arduino partner in the development of machine learning for microcontrollers with TensorFlow Lite, and a partner in Education with Arduino taking on the next generation of the Science Journal enabling children to learn interactively.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/854aa9ec45a4958770f224926c8203f2/google.svg",
        },

        {
          id: 7,
          description: [
            `Intel is a technology on hardware partner of low power FPGA.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/0e22236c033662727711de9f070a25c9/intel.svg",
        },
        {
          id: 8,
          description: [
            `Lauterbach is a leading manufacturer of professional debugging tools that provides a free version for Arduino users.`,
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/eed22440c7d36c57b09c17938f23fbb9/lauterbach.svg",
        },
        {
          id: 9,
          description: [
            "Microchip is a chip supplier in Arduino solutions providing microcontroller units, Bluetooth® Low Energy, touch sensors, and memory chips.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/53f6e428ac022e65f69054ba2ba3c6cd/microchip.svg",
        },
        {
          id: 10,
          description: [
            "Murata is a key supplier of capacitors and inductors for the Arduino range of products.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/b703dac0ddade0267e8e8040e280f681/murata.svg",
        },
        {
          id: 11,
          description: [
            "NXP is an Arduino partner providing chips and software for MCUs, Bluetooth® Low Energy, motion sensors, and a variety of other chips.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/a781768ffe6b7b8ee1cec81614e16b6f/nxp.svg",
        },
        {
          id: 12,
          description: [
            "OpenMV’s IDE is compatible with Arduino boards, providing an easy way into computer vision & AI/ML algorithms out of the box.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/8537655c2e390e7772a9898bca4c4a15/openmv.svg",
        },
        {
          id: 13,
          description: [
            "Raspberry Pi is an ecosystem partner and chip supplier for the latest Arduino Nano RP2040 Connect.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/682e0571d23d22e00d0bef36e734cbd0/raspberry-pi.svg",
        },
        {
          id: 14,
          description: [
            "Renesas Electronics Corporation is a global leader in microcontrollers, analog, power, and SoC products.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/555dfdfc060b57a082d2221c44cd7e71/Renesas_Electronics_logo.svg",
        },
        {
          id: 15,
          description: [
            "Segger manufactures low-cost debugging tools. We distribute Segger products & use their firmware in some boards.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/03cafcfec5d5713bc714194495471e7f/segger.svg",
        },
        {
          id: 16,
          description: [
            "ST is a partner and supplier for chips for microcontroller units, security, motion sensors, and a variety of other chips.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/d415c4f086eb843d1ad0eabd6277dd52/st-microelectronics.svg",
        },
        {
          id: 17,
          description: [
            "Syntiant is a key partner and supplier of Neural Processors for embedded applications for sensor and speech data intelligence.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/45375e07b5c4d7cbee993aee1e99dc7e/syntiant.svg",
        },
        {
          id: 18,
          description: [
            "Thales is a partner that provides cyber security connecting devices.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/b222af39fb1b94dad647dde2a4dd9fef/thales.svg",
        },
        {
          id: 19,
          description: [
            "Ublox is a key supplier of modules and chips for location and connectivity in Arduino solutions.",
          ],
          imageSrc:
            "https://www.arduino.cc/wiki/1fdd926ab1d27a94ba1df80e0f2b8107/ublox.svg",
        },
      ],
    },
  },

  //   ----------------------
  
];
