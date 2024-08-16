import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import food from "../assets/projects/project-food.jpg";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and jQuery, as well as back-end technologies like Coldfusion, MySQL, MSSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, jQuery, Coldfusion and TailwindCSS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
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
