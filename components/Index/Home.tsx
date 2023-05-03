import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function  Home() {

    return (
        <section id="home" className="flex relative md:h-screen md:w-screen items-center text-center md:text-left mt-32 lg:mt-0">
            <motion.div className="flex flex-col w-[100%] sm:justify-evenly sm:flex-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .5 }}>

                <header className="h-max flex flex-col md:w-[40%] items-center">
                    <h2 className="text-5xl md:text-7xl m-5 text-theme-highlight">Hello, I&#39;m Conor</h2>
                    <hr className="opacity-25 w-[75%]" />
                    <div className="flex flex-col text-xl items-center text-center md:leading-loose md:text-2xl">
          
                        <h1><Link href="/contact" className="text-theme-highlight ">Full Stack Web and Cloud Developer</Link></h1>
                        <p>Helping businesses create websitesdevelop software,
                        operate in the cloud and increase their traffic through SEO</p>
                        <Link id="button" href="/contact" className="flex justify-center self-center p-5 m-5 w-[30%]"> Get in Touch</Link>
                    </div>
                </header>

                <div id="profile-picture" className="flex border-l-1 border- px-5 self-center lg:self-auto">
                    <div className="relative w-72 h-72 sm:h-96 sm:w-96">
                        <Image
                            className="drop-shadow-3xl"
                            src={"/me2.webp"}
                            alt={"Freelance Full Stack Developer"}
                            layout={"fill"}                            
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}