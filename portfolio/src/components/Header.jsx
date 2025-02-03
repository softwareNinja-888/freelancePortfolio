import menu from '/menuWhite.webp'
import logo from '/logo.svg'

import { Menu } from './helper/Menu';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export function Header(){

	// STATES
	const [menuOpen, setMenuOpen] = useState(false);

	// HANDLE SCROLL
	function toSection (section) {
	const contactSection = document.getElementById(section);
	contactSection?.scrollIntoView({ behavior: "smooth" });
	};

	// menuOpen ? alert('open') : alert("close")

	return ( 

		 <div className="flex justify-between items-center w-screen px-10 py-5">
            <img src={logo} className="w-12"/>
            <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5 lg:hidden" />
            {/* Full-Screen Menu */}
            {menuOpen && (
              <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            )}

            <nav className="hidden lg:flex space-x-20 text-sm text-white font-mont">
                <div onClick={()=>{toSection('home')}} className="cursor-pointer  hover:underline">Home</div>
                <div onClick={()=>{toSection('about')}}  className="cursor-pointer  hover:underline">About Me</div>
                <div onClick={()=>{toSection('subscribe')}}  className="cursor-pointer  hover:underline">Contact Me</div>
                <div onClick={()=>{toSection('projects')}} className="cursor-pointer  hover:underline">View Projects</div>
            </nav>
         </div>
		)
}