import Link from "next/link";

export default function  About() {

    return (
        <section id="about" className="flex md:w-screen md:h-screen justify-center items-center mt-5 md:m-0">
            <div className='flex flex-col text-center md:w-[50%] mt-10'>
                <h3 className="text-4xl m-5">About</h3>
                <hr className="boreder-2 opacity-25 w-[50%] self-center" />
                <div className="text-xl m-5 md:text-3xl">
                    
                    <p className="">
                        20 Year old Full Stack Developer from Belfast, U.K
                    </p>

                    <br />

                    <p className="">
                        Developer for 9 Years. 1 Year Industry, 5 Months as a Freelancer
                    </p>

                    <br />

                    <p>Look below to see the different skills I can provide to help your business grow</p>

                    <br />

                    <p>
                        Also capable of managing or creating your SEO Strategy If you would like to discuss 
                        this in greater detail get <Link className="text-[#517EE1]" href="/contact">in contact</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}