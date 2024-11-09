// eslint-disable-next-line react/prop-types
const SkillsCard = ({title, text, icon}) => {
	return (
		<article className="flex gap-16 flex-row md:flex-col md:gap-8">
			<div className="">{icon}</div>
			<div className="flex flex-col gap-4">
				<h4 className="font-bold">{title}</h4>
				<p className="text-slate-500">{text}</p>
			</div>
		</article>
	);
};

export default SkillsCard;
