import Image from "next/image"

export default function Testimonials() {
    return (
        <div className="p-5 m-5">
            <h1 className="flex flex-col text-3xl items-center">
                See What Previous Client Have Had to Say!
                <div className="relative sm:h-96 sm:w-96 m-5">
                    <Image
                        className="drop-shadow-3xl"
                        src={"/testimonials/potion.png"}
                        alt={"Freelance Full Stack Developer"}    
                        height={250}
                        width={400}                   
                    />
                </div>
            </h1>
        </div>
    );
}