import Link from "next/link";

export default function  About() {

    return (
        <section id="about" className="flex w-screen h-screen justify-center items-center mt-5 md:m-0">
            <div className='flex flex-col text-center md:w-[50%] mt-10'>
                <h3 className="text-4xl m-5">About</h3>
                <hr className="boreder-2 opacity-25 w-[50%] self-center" />
                <div className="text-xl mt-5">
                    
                    <p className="">
                        I am a 20 Year old Full Stack Developer from U.K
                    </p>

                    <p className="">
                        I&#39;ve been a developer for 4 years with 1 year experience in Industry 
                        as well as a Freelancer for 4 months and a programmer for 9 years. I am also a Final Year Computer Science Student
                    </p>

                    <br />
                    <p>I have a very good understanding of the basics such as HTML, CSS and Javascript as well
                        as basic web design principles. I have worked with many backend technologies and I am currently
                        learning GraphQL. On top of this I also know SQL and have use PostgreSQL as well as MySQL. I also has solid grasp
                        on Docker and Cloud technologies. I have all the qualities of a good Full Stack Developer
                    </p>

                    <br />

                    <p>
                        I also SEO and I am more than capable of handling your SEO strategy. If you would like to discuss 
                        this in greater detail get <Link className="text-[#517EE1]" href="/contact">in contact</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}