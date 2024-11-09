import { MdEmail } from "react-icons/md";

const Footer = () => {
	return <footer className="bg-lime-100 py-10 flex flex-col gap-5">
      <h2 className="text-2xl font-medium tracking-wider capitalize mx-auto">Contact</h2>
      <div className="mx-auto my-50px flex gap-3">
         <MdEmail className="h-8 w-8 text-black-100 hover:text-black duration-300" />
         <a href='mailto: dobrzynskimateusz@gmail.com' className="pt-1">dobrzynskimateusz@gmail.com</a>
      </div>
   </footer>;
};

export default Footer;
