export const roadmaps = {
  frontend: {
    title: "Front-end Development",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "frontend-html",
            title: "HTML",
            desc: "Learn the structure and semantic elements of web pages.",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
          },
          {
            id: "frontend-css",
            title: "CSS",
            desc: "Learn how to style and design responsive web pages.",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
          },
          {
            id: "frontend-javascript-basics",
            title: "JavaScript Basics",
            desc: "Learn variables, functions, arrays, objects, loops and DOM manipulation.",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          },
          {
            id: "frontend-responsive-design",
            title: "Responsive Design",
            desc: "Learn how to make websites work on different screen sizes.",
            link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "frontend-advanced-javascript",
            title: "Advanced JavaScript",
            desc: "Learn ES6+, promises, async/await, modules and advanced concepts.",
            link: "https://javascript.info/"
          },
          {
            id: "frontend-git-github",
            title: "Git & GitHub",
            desc: "Learn version control and how to manage projects with Git and GitHub.",
            link: "https://docs.github.com/en/get-started/start-your-journey/hello-world"
          },
          {
            id: "frontend-apis-fetch",
            title: "APIs & Fetch",
            desc: "Learn how to communicate with APIs and handle external data.",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          },
          {
            id: "frontend-npm",
            title: "npm",
            desc: "Learn how to install and manage JavaScript packages.",
            link: "https://docs.npmjs.com/"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "frontend-react",
            title: "React",
            desc: "Learn components, props, state, hooks and building React applications.",
            link: "https://react.dev/learn"
          },
          {
            id: "frontend-react-router",
            title: "React Router",
            desc: "Learn how to build multiple pages and routes in React applications.",
            link: "https://reactrouter.com/"
          },
          {
            id: "frontend-state-management",
            title: "State Management",
            desc: "Learn how to manage application state using Context API and other solutions.",
            link: "https://react.dev/learn/scaling-up-with-reducer-and-context"
          },
          {
            id: "frontend-projects",
            title: "Frontend Projects",
            desc: "Build real projects to practice and strengthen your frontend skills.",
            link: "https://github.com/"
          }
        ]
      }
    ]
  },

  backend: {
    title: "Back-end Development",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "backend-programming-fundamentals",
            title: "Programming Fundamentals",
            desc: "Learn variables, conditions, loops, functions, arrays and basic problem solving.",
            link: "https://developer.mozilla.org/en-US/docs/Learn"
          },
          {
            id: "backend-nodejs",
            title: "Node.js",
            desc: "Learn how to run JavaScript on the server side.",
            link: "https://nodejs.org/en/learn"
          },
          {
            id: "backend-express",
            title: "Express.js",
            desc: "Learn how to build web servers and REST APIs with Express.",
            link: "https://expressjs.com/"
          },
          {
            id: "backend-rest-apis",
            title: "REST APIs",
            desc: "Learn HTTP methods, status codes, requests and responses.",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "backend-sql",
            title: "SQL",
            desc: "Learn how to store, retrieve and manipulate data using SQL.",
            link: "https://www.w3schools.com/sql/"
          },
          {
            id: "backend-mysql",
            title: "MySQL",
            desc: "Learn relational databases and how to work with MySQL.",
            link: "https://dev.mysql.com/doc/"
          },
          {
            id: "backend-mongodb",
            title: "MongoDB",
            desc: "Learn how to work with NoSQL databases and MongoDB.",
            link: "https://www.mongodb.com/docs/"
          },
          {
            id: "backend-authentication",
            title: "Authentication",
            desc: "Learn login systems, password hashing, sessions and authentication.",
            link: "https://jwt.io/introduction"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "backend-database-design",
            title: "Database Design",
            desc: "Learn relationships, normalization and database architecture.",
            link: "https://www.geeksforgeeks.org/dbms/database-normalization-normal-forms/"
          },
          {
            id: "backend-api-security",
            title: "API Security",
            desc: "Learn common security concepts for backend APIs.",
            link: "https://owasp.org/www-project-api-security/"
          },
          {
            id: "backend-testing-apis",
            title: "Testing APIs",
            desc: "Learn how to test backend APIs using Postman.",
            link: "https://learning.postman.com/docs/getting-started/introduction/"
          },
          {
            id: "backend-deployment",
            title: "Deployment",
            desc: "Learn how to deploy backend applications and APIs.",
            link: "https://render.com/docs"
          }
        ]
      }
    ]
  },

  ai: {
    title: "Artificial Intelligence",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "ai-python",
            title: "Python",
            desc: "Learn Python programming fundamentals for AI and data applications.",
            link: "https://docs.python.org/3/tutorial/"
          },
          {
            id: "ai-numpy",
            title: "NumPy",
            desc: "Learn numerical computing and array operations in Python.",
            link: "https://numpy.org/doc/stable/user/quickstart.html"
          },
          {
            id: "ai-linear-algebra",
            title: "Linear Algebra",
            desc: "Learn vectors, matrices and mathematical concepts used in AI.",
            link: "https://www.khanacademy.org/math/linear-algebra"
          },
          {
            id: "ai-probability-statistics",
            title: "Probability & Statistics",
            desc: "Learn probability and statistics concepts used in machine learning.",
            link: "https://www.khanacademy.org/math/statistics-probability"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "ai-machine-learning",
            title: "Machine Learning",
            desc: "Learn supervised and unsupervised machine learning algorithms.",
            link: "https://scikit-learn.org/stable/user_guide.html"
          },
          {
            id: "ai-pandas",
            title: "Pandas",
            desc: "Learn how to manipulate and analyze datasets using Python.",
            link: "https://pandas.pydata.org/docs/getting_started/index.html"
          },
          {
            id: "ai-data-preprocessing",
            title: "Data Preprocessing",
            desc: "Learn how to clean, transform and prepare data for machine learning.",
            link: "https://scikit-learn.org/stable/modules/preprocessing.html"
          },
          {
            id: "ai-model-evaluation",
            title: "Model Evaluation",
            desc: "Learn how to evaluate machine learning models using different metrics.",
            link: "https://scikit-learn.org/stable/modules/model_evaluation.html"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "ai-deep-learning",
            title: "Deep Learning",
            desc: "Learn neural networks and deep learning concepts.",
            link: "https://www.tensorflow.org/learn"
          },
          {
            id: "ai-computer-vision",
            title: "Computer Vision",
            desc: "Learn how AI can understand and process images and videos.",
            link: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html"
          },
          {
            id: "ai-nlp",
            title: "Natural Language Processing",
            desc: "Learn how AI systems process and understand human language.",
            link: "https://huggingface.co/learn/nlp-course/chapter1/1"
          },
          {
            id: "ai-projects",
            title: "AI Projects",
            desc: "Build practical AI projects to apply machine learning concepts.",
            link: "https://www.kaggle.com/"
          }
        ]
      }
    ]
  },

  datascience: {
    title: "Data Science",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "ds-python",
            title: "Python",
            desc: "Learn Python programming fundamentals for data analysis.",
            link: "https://docs.python.org/3/tutorial/"
          },
          {
            id: "ds-numpy",
            title: "NumPy",
            desc: "Learn numerical operations and array manipulation.",
            link: "https://numpy.org/doc/stable/user/quickstart.html"
          },
          {
            id: "ds-pandas",
            title: "Pandas",
            desc: "Learn how to manipulate, clean and analyze datasets.",
            link: "https://pandas.pydata.org/docs/getting_started/index.html"
          },
          {
            id: "ds-data-cleaning",
            title: "Data Cleaning",
            desc: "Learn how to handle missing values, duplicates and inconsistent data.",
            link: "https://pandas.pydata.org/docs/user_guide/missing_data.html"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "ds-data-visualization",
            title: "Data Visualization",
            desc: "Learn how to visualize data using charts and graphs.",
            link: "https://matplotlib.org/stable/tutorials/index.html"
          },
          {
            id: "ds-statistics",
            title: "Statistics",
            desc: "Learn statistical concepts needed for data analysis.",
            link: "https://www.khanacademy.org/math/statistics-probability"
          },
          {
            id: "ds-sql-data-analysis",
            title: "SQL for Data Analysis",
            desc: "Learn how to query and analyze data stored in databases.",
            link: "https://www.w3schools.com/sql/"
          },
          {
            id: "ds-exploratory-data-analysis",
            title: "Exploratory Data Analysis",
            desc: "Learn how to explore datasets and discover patterns.",
            link: "https://www.kaggle.com/learn/pandas"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "ds-machine-learning",
            title: "Machine Learning",
            desc: "Learn how to build predictive models from data.",
            link: "https://scikit-learn.org/stable/user_guide.html"
          },
          {
            id: "ds-feature-engineering",
            title: "Feature Engineering",
            desc: "Learn how to create and select useful features for machine learning.",
            link: "https://scikit-learn.org/stable/modules/feature_selection.html"
          },
          {
            id: "ds-model-evaluation",
            title: "Model Evaluation",
            desc: "Learn how to measure and compare machine learning models.",
            link: "https://scikit-learn.org/stable/modules/model_evaluation.html"
          },
          {
            id: "ds-projects",
            title: "Data Science Projects",
            desc: "Practice data analysis and machine learning using real datasets.",
            link: "https://www.kaggle.com/"
          }
        ]
      }
    ]
  },

  cybersecurity: {
    title: "Cybersecurity",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "cyber-networking-fundamentals",
            title: "Networking Fundamentals",
            desc: "Learn IP addresses, TCP/IP, DNS, HTTP and basic networking.",
            link: "https://www.cloudflare.com/learning/network-layer/what-is-the-tcp-ip-model/"
          },
          {
            id: "cyber-linux-basics",
            title: "Linux Basics",
            desc: "Learn Linux commands and basic system administration.",
            link: "https://ubuntu.com/tutorials/command-line-for-beginners"
          },
          {
            id: "cyber-operating-systems",
            title: "Operating Systems",
            desc: "Understand processes, memory, files and permissions.",
            link: "https://www.geeksforgeeks.org/operating-systems/operating-systems/"
          },
          {
            id: "cyber-security-fundamentals",
            title: "Cybersecurity Fundamentals",
            desc: "Learn basic security concepts, threats and defense mechanisms.",
            link: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "cyber-web-security",
            title: "Web Security",
            desc: "Learn common vulnerabilities in web applications.",
            link: "https://owasp.org/www-project-top-ten/"
          },
          {
            id: "cyber-ethical-hacking",
            title: "Ethical Hacking",
            desc: "Learn the fundamentals of penetration testing and ethical hacking.",
            link: "https://www.kali.org/docs/"
          },
          {
            id: "cyber-cryptography",
            title: "Cryptography",
            desc: "Learn encryption, hashing and basic cryptographic concepts.",
            link: "https://www.khanacademy.org/computing/computer-science/cryptography"
          },
          {
            id: "cyber-network-security",
            title: "Network Security",
            desc: "Learn firewalls, secure protocols and network defense.",
            link: "https://www.cloudflare.com/learning/security/"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "cyber-penetration-testing",
            title: "Penetration Testing",
            desc: "Learn the methodology and tools used in security testing.",
            link: "https://www.offsec.com/kali-linux/"
          },
          {
            id: "cyber-digital-forensics",
            title: "Digital Forensics",
            desc: "Learn how digital evidence is collected and analyzed.",
            link: "https://www.nist.gov/programs-projects/digital-forensics"
          },
          {
            id: "cyber-security-monitoring",
            title: "Security Monitoring",
            desc: "Learn how organizations detect and respond to security events.",
            link: "https://www.ibm.com/topics/siem"
          },
          {
            id: "cybersecurity-projects",
            title: "Cybersecurity Projects",
            desc: "Practice cybersecurity concepts through labs and security projects.",
            link: "https://tryhackme.com/"
          }
        ]
      }
    ]
  },

  testing: {
    title: "Software Testing",
    levels: [
      {
        name: "Level 1",
        topics: [
          {
            id: "testing-fundamentals",
            title: "Software Testing Fundamentals",
            desc: "Learn the basic concepts, principles and types of software testing.",
            link: "https://www.istqb.org/"
          },
          {
            id: "testing-manual-testing",
            title: "Manual Testing",
            desc: "Learn how to create test cases and execute software tests.",
            link: "https://www.guru99.com/manual-testing.html"
          },
          {
            id: "testing-test-cases",
            title: "Test Cases",
            desc: "Learn how to write clear and effective test cases.",
            link: "https://www.browserstack.com/guide/test-case"
          },
          {
            id: "testing-bug-reporting",
            title: "Bug Reporting",
            desc: "Learn how to identify, document and report software bugs.",
            link: "https://www.atlassian.com/software/jira"
          }
        ]
      },

      {
        name: "Level 2",
        topics: [
          {
            id: "testing-api-testing",
            title: "API Testing",
            desc: "Learn how to test REST APIs and validate responses.",
            link: "https://learning.postman.com/docs/getting-started/introduction/"
          },
          {
            id: "testing-selenium",
            title: "Selenium",
            desc: "Learn browser automation and automated web testing.",
            link: "https://www.selenium.dev/documentation/"
          },
          {
            id: "testing-test-automation",
            title: "Test Automation",
            desc: "Learn how to automate repetitive software testing tasks.",
            link: "https://playwright.dev/docs/intro"
          },
          {
            id: "testing-git-github",
            title: "Git & GitHub",
            desc: "Learn version control for testing and development projects.",
            link: "https://docs.github.com/en/get-started/start-your-journey/hello-world"
          }
        ]
      },

      {
        name: "Level 3",
        topics: [
          {
            id: "testing-automation-frameworks",
            title: "Automation Frameworks",
            desc: "Learn how to structure maintainable automated testing projects.",
            link: "https://playwright.dev/docs/intro"
          },
          {
            id: "testing-ci-cd",
            title: "CI/CD Testing",
            desc: "Learn how automated tests can run as part of CI/CD pipelines.",
            link: "https://docs.github.com/en/actions"
          },
          {
            id: "testing-performance",
            title: "Performance Testing",
            desc: "Learn how to test application performance and scalability.",
            link: "https://jmeter.apache.org/"
          },
          {
            id: "testing-projects",
            title: "Testing Projects",
            desc: "Build testing projects and practice writing automated test suites.",
            link: "https://github.com/"
          }
        ]
      }
    ]
  }
};