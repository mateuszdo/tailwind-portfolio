import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
	return (
		<section id="about" className="bg-white py-20">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutImg} className="w-full h-64" />
				<article>
					<SectionTitle text="code and coffee" />
					<p className="text-slate-600 mt-8 leading-loose">
						Hi, I am Mateusz, front-end developer based in London, UK. I like to
						craft simple, eye-pleasant and functional applications. Once I
						leave the desk you can find me outdoors connecting with the nature.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
