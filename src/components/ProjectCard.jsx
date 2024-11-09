import {FaGithubSquare} from "react-icons/fa";
import {TbWorldWww} from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({img, url, title, text, github}) => {
	return (
		<article className="bg-white rounded-lg shadow-md hover:shadow-xl">
			<img src={img} className="rounded-t-lg w-full h-auto" />
			<div className="px-5 py-10">
				<p className="capitalize tracking-wide py-2 font-bold">{title}</p>
				<p className="text-slate-600">{text}</p>
				<div className="flex gap-3 mt-5">
					<a href={url}>
						<TbWorldWww className="h-6 w-6 text-slate-500 hover:text-black duration-300"/>
					</a>
					<a href={github}>
						<FaGithubSquare className="h-6 w-6 text-slate-500 hover:text-black duration-300"/>
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
