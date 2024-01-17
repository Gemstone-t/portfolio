import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  git,
  threejs,
  hf,
  bny,
  holopin,
  clg,
  school,
  crypto,
  oop,
  yml,
  crud,
  dwld,
  onetomany,
  trie,
  ds,
  cg,
  socrates,
  menux,
  cyop,
  champion,
  offernight,
  be,
  sql,
  mini,
  snl
} from '../assets'

const profiles = [
  {
    link: 'https://auth.geeksforgeeks.org/user/aarti_rathi',
    icon: 'https://img.icons8.com/color/344/GeeksforGeeks.png'
  },
  {
    link: 'https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL',
    icon: 'https://img.icons8.com/fluency/344/google-cloud.png'
  },
  {
    link: 'https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0',
    icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png'
  },
  {
    link: 'https://www.hackerrank.com/_shinchancode',
    icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png'
  },
  {
    link: 'https://dev.to/shinchancode',
    icon: hf
  },
  {
    link: 'https://www.holopin.io/@shinchancode#badges',
    icon: holopin
  }
]

const achievements = [
  {
    title:
      '8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.'
  },
  {
    title: 'Two times State level Table-Tennis Winner (2021 and 2022)'
  },
  {
    title:
      '1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)'
  },
  {
    title: 'Branch Head of Information Technology Department (2021 - 2022)'
  },
  {
    title:
      'Selected in top 100 candidates for Google Cloud Training among 20k Students.'
  },
  {
    title:
      'Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)'
  },
  {
    title: 'Played Nationals in Throwball for U-14 category. (2015)'
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'Bootstrap',
    icon: 'https://img.icons8.com/color/480/000000/bootstrap.png'
  },
  {
    name: 'Google Cloud Firebase',
    icon: 'https://img.icons8.com/color/480/000000/firebase.png'
  },
  {
    name: 'AWS',
    icon: 'https://img.icons8.com/color/480/000000/amazon.png'
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'Figma',
    icon: figma
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind
  // },
  // {
  //   name: 'C++ tool',
  //   icon: 'https://img.icons8.com/color/480/000000/c-plus-plus-logo.png'
  // },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'MySql',
    icon: 'https://img.icons8.com/color/480/000000/mysql-logo.png'
  }
]

const list = [
  {
    id: 'web',
    title: 'Web Development'
  }
  // {
  //   id: 'java',
  //   title: 'Java'
  // },
  // {
  //   id: 'c++',
  //   title: 'C++'
  // }
  // {
  //   id: 'web',
  //   title: 'Web Dev'
  // },
  // {
  //   id: 'other',
  //   title: 'Other'
  // }
]

export const javaProject = [
  {
    name: 'Cryptography',
    description:
      'The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.',
    tags: [
      {
        name: 'cryptography',
        color: 'blue-text-gradient'
      },
      {
        name: 'security',
        color: 'green-text-gradient'
      },
      {
        name: 'java',
        color: 'pink-text-gradient'
      }
    ],
    image: crypto,
    source_link: 'https://github.com/shinchancode/Cryptography',
    source_code_link: 'https://github.com/shinchancode/Cryptography'
  },
  {
    name: 'Snake Yaml',
    description:
      'Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)',
    tags: [
      {
        name: 'yaml',
        color: 'blue-text-gradient'
      },
      {
        name: 'springboot',
        color: 'green-text-gradient'
      },
      {
        name: 'postman',
        color: 'pink-text-gradient'
      }
    ],
    image: yml,
    source_link: 'https://github.com/shinchancode/Snake-Yaml-Project',
    source_code_link: 'https://github.com/shinchancode/Snake-Yaml-Project'
  },
  {
    name: 'CRUD operations',
    description:
      'Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient'
      },
      {
        name: 'springboot',
        color: 'green-text-gradient'
      },
      {
        name: 'crud',
        color: 'pink-text-gradient'
      }
    ],
    image: crud,
    source_link: 'https://github.com/shinchancode/CRUD-Operation',
    source_code_link: 'https://github.com/shinchancode/CRUD-Operation'
  },
  {
    name: 'Byte-Array-to-File',
    description:
      'Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient'
      },
      {
        name: 'byteArray',
        color: 'green-text-gradient'
      },
      {
        name: 'file',
        color: 'pink-text-gradient'
      }
    ],
    image: dwld,
    source_link: 'https://github.com/shinchancode/byte-array-to-file',
    source_code_link: 'https://github.com/shinchancode/byte-array-to-file'
  },
  {
    name: 'Spring Boot One To Many',
    description:
      'Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.',
    tags: [
      {
        name: 'onetomany',
        color: 'blue-text-gradient'
      },
      {
        name: 'springbott',
        color: 'green-text-gradient'
      },
      {
        name: 'crud',
        color: 'pink-text-gradient'
      }
    ],
    image: onetomany,
    source_link: 'https://github.com/shinchancode/oneTomany-springboot',
    source_code_link: 'https://github.com/shinchancode/oneTomany-springboot'
  },
  {
    name: 'OOP Lab',
    description:
      'These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient'
      },
      {
        name: 'oop',
        color: 'green-text-gradient'
      },
      {
        name: 'coding',
        color: 'pink-text-gradient'
      }
    ],
    image: oop,
    source_link:
      'https://github.com/shinchancode/Object-Oriented-Programming-Lab',
    source_code_link:
      'https://github.com/shinchancode/Object-Oriented-Programming-Lab'
  }
]

export const cProject = [
  {
    name: 'Spell Checker',
    description:
      'Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient'
      },
      {
        name: 'trie',
        color: 'green-text-gradient'
      },
      {
        name: 'dictionary',
        color: 'pink-text-gradient'
      }
    ],
    image: trie,
    source_link: 'https://github.com/shinchancode/Trie-Data-structure',
    source_code_link: 'https://github.com/shinchancode/Trie-Data-structure'
  },
  {
    name: 'DSA Lab',
    description:
      'These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.',
    tags: [
      {
        name: 'DSA',
        color: 'blue-text-gradient'
      },
      {
        name: 'C++',
        color: 'green-text-gradient'
      },
      {
        name: 'semester',
        color: 'pink-text-gradient'
      }
    ],
    image: ds,
    source_link: 'https://github.com/shinchancode/Data-Structure-Algorithms',
    source_code_link:
      'https://github.com/shinchancode/Data-Structure-Algorithms/'
  },
  {
    name: 'Computer Graphics Lab',
    description:
      'These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.',
    tags: [
      {
        name: 'computergraphics',
        color: 'blue-text-gradient'
      },
      {
        name: 'C++',
        color: 'green-text-gradient'
      },
      {
        name: 'semester',
        color: 'pink-text-gradient'
      }
    ],
    image: cg,
    source_link: 'https://github.com/shinchancode/Computer-Graphics',
    source_code_link: 'https://github.com/shinchancode/Computer-Graphics'
  }
]

export const webProject = [
  {
    name: 'Learn with Socrates',
    description: `Gamified educational project for Schools,individual parents and teachers, school administrators and children from K-8. The product was sold to 20000+ users and made 80K income each month.`,
    tags: [
      {
        name: 'Django',
        color: 'blue-text-gradient'
      },
      {
        name: 'React',
        color: 'green-text-gradient'
      },
      {
        name: 'Material UI',
        color: 'pink-text-gradient'
      },
      {
        name: 'Google Firebase',
        color: 'gray-text-gradient'
      }
    ],
    image: socrates,
    source_link: 'https://practiceplaygrow.com/login',
    source_code_link: 'https://github.com/shinchancode/3d-react-portfolio'
  },
  {
    name: 'CyOp protocol',
    description:
      'This is DAO project where investors simply invest into an ever recharging crypto fund, the CyOp Protocol, constantly triggerring a massive buying frenzy on any given ERC-20 token. CyOp holders stake their tokens and vote for their favorite projects using the hacker-inspired blockchain terminal.',
    tags: [
      {
        name: 'Express.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'React',
        color: 'green-text-gradient'
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient'
      }
    ],
    image: cyop,
    source_link: 'https://cyop.io',
    source_code_link: 'https://github.com/shinchancode/React-Portfolio'
  },
  {
    name: 'MenuX Digital Restaurant',
    description:
      'Menux Website is digital restaurant management system. This website includes Admin panel for the restaurant admin and Customer Panel for restaurant customers. Menux increases the order amounts with smart upsells and cross-sells.',
    tags: [
      {
        name: 'Firebase',
        color: 'blue-text-gradient'
      },
      {
        name: 'Express.js',
        color: 'green-text-gradient'
      },
      {
        name: 'React',
        color: 'pink-text-gradient'
      }
    ],
    image: menux,
    source_link: 'https://portal.menuxdigital.com',
    source_code_link: 'https://github.com/shinchancode/30-Days-of-Javascript'
  },
  {
    name: 'OfferNights',
    description:
      'With the power of OpenStreetMap, we bring you a seamless and immersive experience in searching for the perfect property. Explore a vast collection of homes, apartments, and villas with our user-friendly interface. This is the most popular website of Map API.',
    tags: [
      {
        name: 'Nest.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'React',
        color: 'green-text-gradient'
      },
      {
        name: 'OpenStreetMap',
        color: 'pink-text-gradient'
      }
    ],
    image: offernight,
    source_link: '',
    source_code_link:
      'https://github.com/shinchancode/Chit-Chat-Real_time_chat_app'
  },
  {
    name: 'Champions',
    description:
      'The largest athletic merchandise and video engagement platform for sports fans, where anyone can find merchandise, live streaming events, and training videos with local and world-known athletes.',
    tags: [
      {
        name: 'Node.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'React',
        color: 'green-text-gradient'
      },
      {
        name: 'GraphQL',
        color: 'pink-text-gradient'
      }
    ],
    image: champion,
    source_link: '',
    source_code_link: ''
  }
]

export const otherProject = [
  {
    name: 'Multilingual Multiple Choice Question Generation',
    description:
      'Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.',
    tags: [
      {
        name: 'machine learning',
        color: 'blue-text-gradient'
      },
      {
        name: 'multilingual',
        color: 'green-text-gradient'
      },
      {
        name: 'BE_Project',
        color: 'pink-text-gradient'
      }
    ],
    image: be,
    source_link:
      'https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l',
    source_code_link: 'https://github.com/shinchancode/Final-Year-Project'
  },

  {
    name: 'DBMS Lab',
    description:
      'Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.',
    tags: [
      {
        name: 'MySql',
        color: 'blue-text-gradient'
      },
      {
        name: 'dbms',
        color: 'green-text-gradient'
      },
      {
        name: 'semester',
        color: 'pink-text-gradient'
      }
    ],
    image: sql,
    source_link: 'https://github.com/shinchancode/DBMS-SQL-Lab',
    source_code_link: 'https://github.com/shinchancode/DBMS-SQL-Lab'
  },
  {
    name: 'SQL : Library Management System',
    description:
      'Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.',
    tags: [
      {
        name: 'sql',
        color: 'blue-text-gradient'
      },
      {
        name: 'management',
        color: 'green-text-gradient'
      },
      {
        name: 'miniproject',
        color: 'pink-text-gradient'
      }
    ],
    image: mini,
    source_link:
      'https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement',
    source_code_link:
      'https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement'
  },
  {
    name: 'Pyhton : Snake and Ladder',
    description:
      'Snake and Ladder game using python language. A simple command line interface snake and ladder game',
    tags: [
      {
        name: 'snake and ladder',
        color: 'blue-text-gradient'
      },
      {
        name: 'python',
        color: 'green-text-gradient'
      },
      {
        name: 'CLI',
        color: 'pink-text-gradient'
      }
    ],
    image: snl,
    source_link:
      'https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder',
    source_code_link:
      'https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder'
  }
]

const experiences = [
  {
    title: 'Senior Full Stack Developer | Project Manager',
    company_name: 'LearnWithSocrates',
    icon: bny,
    iconBg: '#383E56',
    date: '05/2020 - 10/2023',
    location: 'United State',
    link: '',
    points: [
      'Developed a brand new administration panel for the purchasing agent business, which increased the customer service by 90% and improved the efficiency of operating by over 25%',
      'Ensured compatibility with major browsers on mobile and desktop platforms by coordinating core server product development in MERN Stack',
      'Developed cross-platform web applications for E-Commerce, E-Learning, and private niche social networkin',
      'Created the front end of an invoice management app written in React; it was fully responsive and had a lot of custom inputs and dynamically generated pages',
      'Build a Node.js-based library, which acted as middleware for Express.js and Koa, that automatically captured user errors and sent them to a platform that aggregated and visualized them',
      'Worked on the admin and customer portals and rewrote them from Vue 2 to React/TypeScript. Introduced CI/CD for the front end via GitHub Actions'
    ],
    link: 'https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP'
  },
  {
    title: 'Senior Full Stack Developer | Node.js Expert',
    company_name: 'TRIM Agency',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png',
    iconBg: '#383E56',
    date: '02/2019 - 03/2020',
    location: 'Canada',
    link: '',
    points: [
      'Architected and led a development team building a Spotify-like application for a Series-A funded startup using Node.js, Electron, and React',
      'Worked full-stack on the team to develop a consumer-facing review platform with Node.js, React, GraphQL, Elasticsearch, and PostgreSQL',
      'Designed user-friendly websites with React including an optimized check-out page, resulting in a 25% increase in user clicks and subsequently 33% in customer purchases',
      'Developed an original e-commerce website with JS frameworks like React and Express'
    ],
    link: 'https://github.com/codewithrathi'
  },
  {
    title: 'Senior JavaScript & TypeScript Developer',
    company_name: 'Mercury Development, Inc',
    icon: 'https://img.icons8.com/color/344/GeeksforGeeks.png',
    iconBg: '#E6DEDD',
    date: '02/2018 - 01/2019',
    location: 'France',
    link: '',
    points: [
      'Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.',
      'Responsible for reviewing and writing articles based on Data Structures and Algorithms.'
    ],
    link: 'https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt'
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'HCL Japan Ltd',
    icon: 'https://img.icons8.com/color/344/GeeksforGeeks.png',
    iconBg: '#383E56',
    date: '09/2017 - 01/2018',
    location: 'Japan',
    link: '',
    points: [
      'Creative and experienced content writer with 2+ years of experience.',
      'Attracted over 5000+ visitors to the company website with powerful educational content.',
      'Wrote 50+ articles and improved 150+ articles on topics like Data Structures, Algorithms, Mathematics and related engineering topics'
    ],
    link: 'https://auth.geeksforgeeks.org/user/_shinchancode'
  }
]

const educations = [
  {
    degree: 'Bachelor Degree of Computer Science',
    branch: 'Computer Science',
    marks: 'CGPA : 9.43 / 10',
    name: 'University of Calgary',
    year: '(2013 - 2016)',
    image: school
  },
  {
    degree: 'Master Degree of Computer Science',
    branch: 'Computer Science',
    marks: 'CGPA: 9.13 / 10',
    name: 'University of Calgary',
    year: '(2016 - 2017)',
    image: school
  }
]

export { list, profiles, technologies, experiences, educations, achievements }
