import Image from "next/image";
import Link from "next/link";

export default function  Home() {

    return (
        <section id="home" className="flex h-screen w-screen items-center">
            <div className="flex flex-row w-[100%] justify-evenly">
                <header className="h-max flex flex-col ">
                    <h2 className="text-5xl p-5">Hello, I&#39;m Conor</h2>
                    <div className="text-2xl leading-loose">
                        <hr className="boreder-2 opacity-25" />
                        <h1>I am a Freelance <a className="bg-gradient-to-r text-[#517EE1] from-theme-gradientFrom to-theme-gradientTo bg-clip-text">Full Stack Web</a> Developer</h1>
                        <p>React, Django, Tailwind CSS, SQL, Cloud Hosting</p>
                        <p>Helping your business Save and Make Money</p>
                        
                    </div>
                    <Link href="/contact" className="flex justify-center self-center p-5 m-10 bg-gradient-to-r from-theme-gradientFrom to-theme-gradientTo w-[50%] text-center text-theme"> Get in Touch</Link>
                </header>

                <div id="profile-picture" className="flex border-l-1 border- px-5">
                    <Image
                        className="drop-shadow-3xl"
                        src={"/me.jpg"}
                        alt={"Freelance Full Stack Developer"}
                        height={480}
                        width={400}
                    />
                </div>
            </div>
        </section>
    );
}