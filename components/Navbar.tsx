import Link from "next/link";
import {useTheme} from 'next-themes';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react";

export default function  Navbar() {


        const {systemTheme, theme, setTheme} = useTheme()
        const [mounted, setMounted] = useState(false);

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
        <nav className="fixed bg-theme dark:bg-theme-dark w-full h-24 z-[10000] md:fixed">
            <section className="flex w-full h-full p-5">
                <div className="p-5 flex h-full items-center">
                        {renderThemeChanger()}
                </div>

                <div className="">

                </div>

                <section className="flex flex-col justify-center items-center">
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

            </section>          
        </nav>
    );
}