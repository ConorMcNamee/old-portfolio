import Image from "next/image";
import Link from "next/link";

export default function  Home() {

    return (
        <section id="home" className="flex md:h-screen md:w-screen items-center text-center md:text-left mt-32 lg:mt-0">
            <div className="flex flex-col w-[100%] sm:justify-evenly sm:flex-row">
                <header className="h-max flex flex-col">
                    <h2 className="text-5xl p-5 m-5">Hello, I&#39;m Conor</h2>
                    <hr className="opacity-25 w-[75%]" />
                    <div className="text-2xl md:leading-loose p-5 m-5">
                        
                        <h1>I am a Freelance <Link href="/contact" className="text-theme-link">Full Stack Web</Link> Developer</h1>
                        <p>Frontend, Backend, Database, Deployment or SEO</p>
                        <p>Helping your business Save and Make Money</p>
                        
                    </div>
                    <Link href="/contact" className="flex justify-center self-center p-5 m-10 bg-gradient-to-r from-theme-gradientFrom to-theme-gradientTo w-[50%] text-center text-theme"> Get in Touch</Link>
                </header>

                <div id="profile-picture" className="flex border-l-1 border- px-5 self-center lg:self-auto">
                    <div className="relative w-72 h-72 sm:h-96 sm:w-96">
                        <Image
                            className="drop-shadow-3xl"
                            src={"/me2.jpg"}
                            alt={"Freelance Full Stack Developer"}
                            layout={"fill"}                            
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}