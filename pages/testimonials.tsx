import Image from "next/image"
import { Link } from "react-scroll";

export default function Testimonials() {
    return (
        <div className="flex flex-col justify-center items-center p-5 m-5 ">
            <h1 className="flex flex-col text-3xl">
                See What Previous Client Have Had to Say!
            </h1>

            <div className="relative sm:h-96 sm:w-96 m-5">
                    <Image
                        className="drop-shadow-3xl"
                        src={"/testimonials/potion.png"}
                        alt={"Freelance Full Stack Developer"}    
                        height={250}
                        width={400}                   
                    />
                </div>

            <p className="md:w-[60%] text-center">
            "Conor the web developer, 
            Working with him has truly been a pleasure. 
            Consistent, reliable, outstanding workmanship, 
            and dedicated to completion of tasks. 
            He has been a partner in the creation, management, 
            and general upkeep of my photography website for quite a while now. 
            And I can truly say he has sealed a lifetime partnership with me. " - Josiah
            </p>

            
            <div className="flex justify-center flex-col items-center text-center py-5">
                <h2 className="text-5xl">Reach Out</h2>
                <h3 className="text-3xl">
                    If you would like to become one of the many people 
                    who I have provided results for!
                </h3>

                <Link href="/contact" id="button" className="w-52 rounded-xl px-6 py-4">Get in Touch</Link>
            </div>
        </div>
    );
}