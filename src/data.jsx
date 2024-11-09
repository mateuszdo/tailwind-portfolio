import {nanoid} from "nanoid";
import {FaHtml5, FaJs, FaReact} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";

export const links = [
	{id: nanoid(), href: "#home", text: "home"},
	{id: nanoid(), href: "#skills", text: "skills"},
	{id: nanoid(), href: "#about", text: "about"},
  {id: nanoid(), href: "#projects", text: "projects"},
];

export const skills = [
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <FaHtml5 className="h-16 w-16 text-lime-500" />,
		text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
	},
	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className="h-16 w-16 text-lime-500" />,
		text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
	},
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className="h-16 w-16 text-lime-500" />,
		text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
	},
  {
		id: nanoid(),
		title: "MySQL",
		icon: <SiMysql className="h-16 w-16 text-lime-500" />,
		text: "Good understanding schema design, query optimization, and data integrity. Proficient in utilizing advanced MySQL features to enhance database performance and scalability.",
	},
  {
		id: nanoid(),
		title: "Tailwind",
		icon: <SiTailwindcss className="h-16 w-16 text-lime-500" />,
		text: "Combining Tailwind's pre-built utility classes to build complex layouts and interactions, ensuring a consistent and visually appealing user experience across all devices.",
	},
  {
		id: nanoid(),
		title: "Typescript",
		icon: <SiTypescript className="h-16 w-16 text-lime-500" />,
		text: "Leveraging TypeScript's advanced features, such as interfaces, generics, and custom types, to create well-structured and scalable applications.",
	}
];

export const projects = [
	{
		id: nanoid(),
		img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
		url: "https://react-quiz-by-mateusz.netlify.app/",
		github: "https://github.com/mateuszdo/react-quiz",
		title: "React Quiz",
		text: "Basic react quiz using Typescript and Styled components. Questions fetched from the external API.",
	},
	{
		id: nanoid(),
		img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
		url: "https://menu-by-mateusz.netlify.app/",
		github: "https://github.com/mateuszdo/menu",
		title: "Menu",
		text: "Restaurant menu project showing different tabs nad meals for each part of the day. Props passing practice.",
	},
	{
		id: nanoid(),
		img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
		url: "https://colorgenerator-by-me.netlify.app/",
		github: "https://github.com/john-smilga",
		title: "third project",
		text: "Practising form handling in React to showcase all shades of each color and utilizing 'save to clipboard' feature.",
	},
];
