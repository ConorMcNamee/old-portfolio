import Link from "next/link";
import {useTheme} from 'next-themes';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

export default function  Navbar() {


        const {systemTheme, theme, setTheme} = useTheme()
        const [mounted, setMounted] = useState(false);

        const [dropdown, setDropdown] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);
    
        const renderThemeChanger = () => {
            if(!mounted) return null;
            const currentTheme = theme === 'system' ? systemTheme : theme;
    
            if(currentTheme === 'dark') {
                return (
                    <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
                )
            }else{
                return (
                    <MoonIcon className="w-7 h-7 " role="button" onClick={() => setTheme('dark')} />
                )
            }
        }

    return (
        <nav className="relative bg-theme dark:bg-theme-dark w-full h-24 z-[10000] md:fixed">
            <section className="flex w-full h-full p-5 justify-between">
                <div className="p-5 flex h-full items-center">
                        {renderThemeChanger()}
                </div>

                <section className="flex flex-col justify-center items-center lg:w-[100%]">
                    <ul className="hidden lg:flex p-5">
                        <Link href='/'>
                            <li className="px-5 ml-10 text-xl hover:border-b">Home</li>
                        </Link>

                        <Link href='/portfolio'>
                            <li className="px-5 ml-10 text-xl hover:border-b">Portfolio</li>
                        </Link>

                        <Link href='/blog'>
                            <li className="px-5 ml-10 text-xl hover:border-b">Blog</li>
                        </Link>

                        <Link href='/testimonials'>
                            <li className="px-5 ml-10 text-xl hover:border-b">Testimonials</li>
                        </Link>

                        <Link href='/contact'>
                            <li className="px-5 ml-10 text-xl hover:border-b">Contact</li>
                        </Link>

                    </ul>

                    <hr className="hidden border-1 opacity-25 w-[25%] md:flex" />
                </section>


                <div className="flex justify-end">
                    <Bars3Icon role="button" className="lg:hidden flex" onClick={() => setDropdown(!dropdown)}></Bars3Icon>
                </div>
            </section>   

            
                {
                dropdown? (
                    <motion.section className="absolute w-screen h-screen bg-theme items-center dark:bg-theme-dark"
                        animate={{opacity: 1, transition: { duration: .5}}} initial={{ opacity:0}}
                    >
                        <ul className="flex flex-col w-screen h-screen text-center">
                        <Link href='/'>
                            <li onClick={() => setDropdown(false)} className="text-xl p-5">Home</li>
                        </Link>

                        <Link href='/portfolio'>
                            <li onClick={() => setDropdown(false)} className="text-xl p-5">Portfolio</li>
                        </Link>

                        <Link href='/blog'>
                            <li onClick={() => setDropdown(false)} className="text-xl p-5">Blog</li>
                        </Link>

                        <Link href='/testimonials'>
                            <li onClick={() => setDropdown(false)} className="text-xl p-5">Testimonials</li>
                        </Link>

                        <Link href='/contact'>
                            <li onClick={() => setDropdown(false)} className="text-xl p-5">Contact</li>
                        </Link>

                    </ul>
                    </motion.section>
                    ): null
                }       
        </nav>
    );
}