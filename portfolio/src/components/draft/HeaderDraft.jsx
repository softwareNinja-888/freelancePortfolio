import menu from '/ui/menuWhite.webp'
import logo from '/logo.svg'

// import { Menu } from './helper/Menu';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export function HeaderDraft() {
    return (
        <div className="flex justify-around items-center p-5 font-['Space'] max-[500px]:flex-col max-[500px]:gap-2.5 max-[500px]:p-0">
            {/* Logo */}
            <div className="cursor-pointer">
               <img src={logo} alt="logo" className="" />
            </div>

            {/* Navigation Links */}
            <div className="flex gap-[50px] max-[500px]:gap-[35px]">
                <a href="#" className="
                    flex gap-1.5
                    no-underline relative
                    cursor-pointer text-inherit
                    after:content-[''] after:absolute
                    after:-bottom-0.5 after:left-0
                    after:w-full after:h-0.5
                    after:opacity-0 after:transition-opacity
                    after:duration-300 after:ease-in-out
                    hover:after:opacity-100
                    hover:after:bg-[#f0ef13]
                    text-base max-[500px]:text-xs
                ">
                    Home
                </a>
                <a href="#" className="
                    flex gap-1.5
                    no-underline relative
                    cursor-pointer text-inherit
                    after:content-[''] after:absolute
                    after:-bottom-0.5 after:left-0
                    after:w-full after:h-0.5
                    after:opacity-0 after:transition-opacity
                    after:duration-300 after:ease-in-out
                    hover:after:opacity-100
                    hover:after:bg-[#f0ef13]
                    text-base max-[500px]:text-xs
                ">
                    About
                </a>
                <a href="#" className="
                    flex gap-1.5
                    no-underline relative
                    cursor-pointer text-inherit
                    after:content-[''] after:absolute
                    after:-bottom-0.5 after:left-0
                    after:w-full after:h-0.5
                    after:opacity-0 after:transition-opacity
                    after:duration-300 after:ease-in-out
                    hover:after:opacity-100
                    hover:after:bg-[#f0ef13]
                    text-base max-[500px]:text-xs
                ">
                    Projects
                </a>
                <a href="#" className="
                    flex gap-1.5
                    no-underline relative
                    cursor-pointer text-inherit
                    after:content-[''] after:absolute
                    after:-bottom-0.5 after:left-0
                    after:w-full after:h-0.5
                    after:opacity-0 after:transition-opacity
                    after:duration-300 after:ease-in-out
                    hover:after:opacity-100
                    hover:after:bg-[#f0ef13]
                    text-base max-[500px]:text-xs
                ">
                    Contact
                </a>
            </div>

            {/* Social Links - Hidden on mobile/tablet */}
            <div className="hidden lg:flex gap-[25px]">
                <a href="http://github.com/softwareNinja-888" target="blank">
                    <svg
                        viewBox="0 0 128 128"
                        className="w-[25px]"
                    >
                        {/* GitHub SVG path remains same */}
                    </svg>
                </a>
                <a href="http://">
                    <svg
                        viewBox="0 0 128 128"
                        className="w-[25px]"
                    >
                        {/* LinkedIn SVG path remains same */}
                    </svg>
                </a>
            </div>
        </div>
    )
}