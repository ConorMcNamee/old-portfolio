import Link from "next/link";

export default function  About() {

    return (
        <section id="about" className="flex md:w-screen justify-center items-center md:m-0">
            <div className='flex flex-col text-center md:w-[50%] mt-10'>
                <h3 className="text-4xl m-5">About</h3>
                <hr className="border-2 opacity-25 w-[50%] self-center" />
                <div className="text-xl m-5">
                    
                    <p>
                        20 Year old Full Stack Developer from Belfast, U.K
                    </p>

                    <br />

                    <p>
                    I started learning how to program when I was 11. Making simple HTML, CSS and Javascript web pages‍
                    </p>

                    <br />

                    <p>From there I started to learn Java and C++ but never really got anywhere with those languages
                        I then started to experiment with many other languages like Ruby, SQL, Python and Even Haskell</p>

                    <br />

                    <p>
                        Once I got nowhere with any of those languages around 2019 I began to focus on just web development
                        learning React, Django and then Flask and different databases like MySQL, Postgres
                    </p>
                    <br />
                    <p>
                        And over the past year I've been really beginning to become an expert on Cloud services like AWS and Google Cloud Platform
                    </p>

                    <br />

                    <p>
                        
                        <Link className="text-theme-highlight" href="/contact">Get in touch</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}