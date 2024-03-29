
import {motion} from "framer-motion";

import Link from "next/link";

export default function  Skills() {

    return (
        <motion.div id="skills" className="flex flex-col items-center md:w-screen md:h-screen mt-10 lg:m-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}>
            <div className="flex flex-col md:flex-row text-5xl md:text-6xl md:mt-10 text-center">
                <h2 className="flex">
                    What I can do for  
                </h2>
                <h2 className="flex text-theme-highlight md:px-4 justify-center">YOU!</h2>
            </div>
            <p className="text-center">There are many different services that I can provide that will add value to your business. Here are a few to list.</p>
            <p className="text-center">
                If you would like to know more about my expertise in these areas, visit the services page with the link below
                Or get in touch. I&apos;d love to have a chat!
                </p>
            <Link href="/services" className="px-5 py-2 my-8 rounded-3xl border-4 border-theme-highlight text-theme-highlight">Services</Link>
            <ul className="flex h-[100%] justify-center md:w-[60%]">
                <div className="flex flex-col justify-evenly text-center">
                    <h1>Landing Page Development</h1>
                    <h1>Group Coaching</h1>
                    <h1>Web App Development</h1>
                    <h1>Landing Page Development</h1>
                    <h1>Cloud Deployment</h1>
                    <h1>Cloud Management</h1>
                    <h1>Web Scraping</h1>
                    <h1>SEO Optimisation</h1>
                </div>
            </ul>
        </motion.div>
    );
}