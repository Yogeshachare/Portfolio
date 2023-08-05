import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  ecommerceProj,
  shoppingBag,
  chatApp,
  chatIcon,
  xoriant,
  pce,
} from "./assets";
const data = {
  heroPara:
    "A passionate Front-end React Developer based in Maharashtra, Navi Mumbai.",

  aboutMe:
    "As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, SCSS, JavaScript, React, Node, Express, and MongoDB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My experties lies in crafting dynamic, engaging interfaces through writing clean and opttimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in colaborating with cross-functional teams to produce outstanding web applications",

  ecommerce:
    "Shoppy is an exceptionally robust and user-friendly e-commerce website that empowers users to effortlessly browse through an extensive array of products and seamlessly make purchases. With its intuitive interface and efficient buying system, shopping on Shoppy becomes a delightful experience for every customer",
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Shoppy",
    image: ecommerceProj,
    desc: "Shoppy is an exceptionally robust and user-friendly e-commerce website that empowers users to effortlessly browse through an extensive array of products and seamlessly make purchases. With its intuitive interface and efficient buying system, shopping on Shoppy becomes a delightful experience for every customer",
    icon: shoppingBag,
    tech: ["React", "MERN"],
    code: "https://github.com/Yogeshachare/React/tree/development/Eccomerce",
    demo: "https://majestic-pony-c27de0.netlify.app",
  },
  {
    name: "Chatapp",
    image: chatApp,
    desc: "Chatapp is a versatile messaging application that enables users to create personal accounts, connect with friends and family, and exchange messages and images seamlessly through a convenient search feature.",
    icon: chatIcon,
    tech: ["React", "Firebase"],
    code: "https://github.com/Yogeshachare/React/tree/master/Chatapp",
    demo: "https://sensational-cendol-d5d941.netlify.app",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Xoriant",
    icon: xoriant,
    iconBg: "#383E56",
    date: "November 2021 - May 2023",
    points: [
      "Recognized and automated the repetitive process of updating carousel content on the company's internal website using a Form and database integration.",
      "Leveraged Drupal's content management capabilities to create web pages for policies and other content, applying HTML and CSS for structure and style",
      "Translated design mock-ups into fully functional Drupal themes to maintain a consistent and visually appealing user interface",
    ],
  },
  {
    title: "Associate Azure Administrator",
    company_name: "Xoriant",
    icon: xoriant,
    iconBg: "#383E56",
    date: "November 2021 - May 2023",
    points: [
      "Proficient in working with Azure and Terraform for infrastructure creation and resource deployment in the Azure cloud environment",
      "Utilized Azure Monitor and Azure Log Analytics to establish custom metrics, alerts, and log queries for proactive monitoring of virtual machines and other resources.",
    ],
  },
];

const links = {
  cv: "https://firebasestorage.googleapis.com/v0/b/my-project-1554615786115.appspot.com/o/resume.pdf?alt=media&token=0ca9130f-fe21-4568-af7b-d9a0e0d1a174",
  linkedin: "https://www.linkedin.com/in/yogesh-achare-201a3a199",
};

export { data, technologies, projects, experiences, links };
