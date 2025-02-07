import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import {FormFooter} from './helper/FormFooter'
import logo from '/logo.svg'


export function Footer() {
  return (
  <footer className="bg-gray-900 text-white py-10 px-4 md:px-8">
  		<div className="">
  			  <div className="lg:flex lg:justify-between lg:items-center lg:px-20 lg:gap-0 w-screen`">
                  <div className="hidden w-full h-96 lg:flex lg:flex-col lg:justify-between lg:items-start">
                    <div className="">
                    	<img src={logo} alt="logo" className="w-32"/>
                    </div>
                    <div className="text-white font-lora text-xl flex flex-col gap-16">
                      <div className="">+27 63 171 6764 <br /> <a href="#">info@site.com</a> </div>
                      <div className="">18 Paul Kruger St. <br /> Nelspruit, South Africa</div>
                    </div>
                  </div>
                  <div className="">
                    <div id="contact" className="text-4xl font-lora font-bold text-center text-white mb-16">Lets Work Togther!</div>
                    <FormFooter/>
                  </div>
                </div>
  		</div>
        
    	<div className="max-w-7xl mx-auto lg:px-16 flex flex-col md:flex-row items-center justify-between mt-20">
	        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Bayanda Dlamini. All rights reserved.</p>
	        
	        <div className="flex space-x-4 mt-4 md:mt-0">
	          <a href="https://github.com/softwareNinja-888" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
	            <FaGithub size={24} />
	          </a>
	          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
	            <FaLinkedin size={24} />
	          </a>
	          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
	            <FaTwitter size={24} />
	          </a>
	          <a href="mailto:mlandvodlamini03@gmail.com" className="text-gray-400 hover:text-white transition">
	            <FaEnvelope size={24} />
	          </a>
	        </div>
      	</div>
    

    </footer>
  );
};
