import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import weather_photo from "../assets/projects/weather_photo.png";
import food from "../assets/projects/project-food.jpg";

export const HERO_CONTENT = `I’m a Software Developer focused on building modern, responsive, and scalable web applications using React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, and Redux Toolkit. I enjoy creating clean user interfaces, optimizing performance, and developing seamless digital experiences that solve real-world problems.`;

export const ABOUT_TEXT = `I am a passionate software developer with experience in building full-stack web applications using modern technologies like React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux Toolkit, Node.js, Express.js, MongoDB, MySQL, and AWS. I enjoy developing scalable applications, integrating APIs, and creating intuitive user experiences with clean and efficient code. I have worked on projects including AI-powered applications, interactive dashboards, and dynamic web platforms that focus on performance and usability. Along with development, I actively practice Data Structures and Algorithms and enjoy continuously learning new technologies to improve my skills as a developer.`;
export const EXPERIENCES = [
  {
    year: "March-2025 - Present",
    role: "Software developer",
    company: "SHL",
    description: ` Developed 8+ full-stack features using React.js, Node.js, Express.js and other technologies, delivering scalable
    solutions that supported 1,000+ active users.
    • Incorporated various third-party libraries, including Redux, Redux-toolkit and Tailwind CSS, resulting in a
    30% improvement in application performance and a 25% reduction in development time.
    • Optimized Redux architecture, enhancing performance by 20% and streamlining state management for improved
    user interactivity.
    • Enhanced system efficiency by identifying repetitive operational tasks and implementing automation scripts and
    backend services, resulting in improved workflow productivity and reduced manual intervention.`,
    technologies: ["Nodejs", "React.js", "MongoDB", "MSSQL", "Mysql", "Redux", "AWS", "ElasticSearch"],
  },
  {
    year: "Jan-2024 - June-2024",
    role: "Software developer Intern",
    company: "InsureInfinite Consulting",
    description: `Led the development and maintenance of web applications, utilizing HTML, CSS, JavaScript, Bootstrap, and jQuery to create responsive and visually appealing user interfaces.
Worked on two significant projects, seamlessly integrating ColdFusion and MSSQL for robust backend functionality, ensuring smooth data management and server-side operations.
Collaborated closely with a cross-functional team to align front-end design with backend systems, significantly improving user experience through intuitive and efficient interfaces.
`,
    technologies: ["Javascript", "React.js", "Coldfusion", "MSSQL", "jQuery"],
  },
];

export const PROJECTS = [
   {
    title: "CodeMate",
    image: weather_photo,
    description: "Developed a scalable full-stack dating platform using the MERN stack, enabling users to connect through profile-based matching and interaction features. Developed a secure Node.js/Express backend with JWT authentication, Stripe payment integration, and MongoDB for scalable data management. Engineered a responsive frontend using React, Redux Toolkit, and Tailwind CSS for efficient state handling and modern UI. Containerized the application using Docker and Docker Compose and configured Nginx reverse proxy for scalable and reliable deployment.",
    technologies: ["Nodejs", "Reactjs", "Expressjs", "Mongodb", "REST API", "Stripe", "Docker", "Nginx"],
    link: "https://codemate-frontend-bfx9.onrender.com"
  },
  {
    title: "Weather App",
    image: weather_photo,
    description: "Architected a full-stack weather app with JWT-based auth — access tokens (15 min) in localStorage and HttpOnly refresh token cookies (7 days) with silent auto-rotation via Axios interceptors, making token expiry invisible to users. Implemented Redis caching layer for weather API responses (10-min TTL), reducing redundant OpenWeatherMap API calls; added a cron-based pre-fetcher every 9 minutes to warm cache for 6 high-traffic cities, ensuring near-instant responses. Integrated Apache Kafka for event-driven email notifications — welcome emails on registration, login alerts, and daily 8 AM personalized weather digests via Nodemailer, all processed asynchronously without blocking API responses. Built IP-based rate limiting (100 requests/15 min) and bcrypt password hashing; automated nightly refresh token cleanup via cron to prevent MongoDB bloat. Implemented debounced search (500ms) on the frontend to minimize redundant API calls on partial input.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Kafka", "JWT", "Axios"],
    link:"https://weatherapp-frontend-six-mu.vercel.app/"
  },
  {
    title: "BlogPost",
    image: project5,
    description: "Developed a web application named Blogpost using React, enabling users to write and manage blogs.Integrated TinyMCE editor to provide a rich text editing experience for blog content.Implemented Redux Toolkit for efficient state management across the application.Utilized Appwrite for secure user authentication and as the backend database solution.Styled the application using Tailwind CSS, ensuring a modern and responsive design.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit (RTK)", "TinyMCE", " Appwrite"],
    link:"https://blogging-webapp-84bfz306d-piyushs-projects-bb9b9dd7.vercel.app/"
  },
  {
    title: "Food Junction",
    image: food,
    description: "Developed a dynamic food ordering website using React, delivering an interactive user experience.Integrated Redux Toolkit (RTK) for state management, ensuring smooth and efficient data handling across the application.Styled the website using Tailwind CSS, providing a modern, responsive, and visually appealing design.Dynamically loaded data from the Swiggy API to display real-time restaurant and food options, enhancing user engagement.",
    technologies: ["React" , "RTK","Tailwind CSS", "API"],
    link: "https://food-ordering-website-ecru.vercel.app/cart"
  },
  {
    title: "Insurance Quote Management System",
    image: project3,
    description: "Developed an Insurance Quote Management System utilizing JavaScript, jQuery, ColdFusion, Bootstrap, and MSSQL. The system streamlines the process of generating and managing insurance quotes, featuring a robust user authentication mechanism to ensure secure access. Leveraged Bootstrap to create a responsive, user-friendly interface, while MSSQL was employed for efficient data handling and storage.",
    technologies: [ "Javascript", "jQuery","Coldfusion", "Bootstrap", "MSSQL"],
    link: "https://github.com/Piyushjoshi9795/Insurance-Quote-Management-System"
  },
  {
    title: "Chatting App",
    image: project4,
    description: "Developed a real-time chat application using React and Firebase, incorporating user authentication for secure communication. The app allows users to send and receive messages instantly, with Firebase handling the backend for data storage and synchronization.",
    technologies: ["React", "Tailwind CSS", "firebase"],
    link : "https://github.com/Piyushjoshi9795/ChatApp"
  },
];

export const CONTACT = {
  address: "KH.504 sarai seikh ,Chinnhat ,Lucknow ",
  phoneNo: "+917905075550 ",
  email: "piyushjoshi9795@gmail.com",
};
