import {nanoid} from "nanoid";
import {FaHtml5, FaJs, FaReact} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import quizImage from '../src/assets/quiz.png';
import menuImage from '../src/assets/menu.png';
import colorGeneratorImage from '../src/assets/colorGenerator.png';
import storeLightImage from '../src/assets/storeLight.png';

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
		img: quizImage,
		url: "https://react-quiz-by-mateusz.netlify.app/",
		github: "https://github.com/mateuszdo/react-quiz",
		title: "React Quiz",
		text: "Basic react quiz using Typescript and Styled components. Questions fetched from the external API.",
	},
	{
		id: nanoid(),
		img: menuImage,
		url: "https://menu-by-mateusz.netlify.app/",
		github: "https://github.com/mateuszdo/menu",
		title: "Menu",
		text: "Restaurant menu project showing different tabs and meals for each part of the day. Props passing practice.",
	},
	{
		id: nanoid(),
		img: colorGeneratorImage,
		url: "https://colorgenerator-by-me.netlify.app/",
		github: "https://github.com/mateuszdo/colorGenerator",
		title: "Color Generator",
		text: "Practising form handling in React to showcase all shades of each color and utilizing 'save to clipboard' feature.",
	},
	{
		id: nanoid(),
		img: storeLightImage,
		url: "https://next-storefront-git-main-mateuszs-projects-4e99508b.vercel.app/",
		github: "https://github.com/mateuszdo/nextStorefront",
		title: "eCommerce Store",
		text: "Full eCommerce Store allowing user to browse the catalog, add multiple products to the cart, checkout using stripe and leave the review. Admin can also manage catalog and view order history.",
	},
];
