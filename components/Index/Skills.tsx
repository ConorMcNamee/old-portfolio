import SkillsCard from "./SkillsCard"; 


export default function  Skills() {

    return (
        <div id="skills" className="flex justify-center flex-col items-center md:w-screen md:h-screen mt-10 lg:m-0">
            <h1 className="text-2xl mt-10">Skills</h1>
            <ul className="flex flex-wrap wrap md:flex-col md:w-[60%]">
                <div className="flex flex-row flex-wrap justify-center">
                    <SkillsCard title="HTML" img={'/html.webp'} desc={"I learned HTML when I was 11. HTML is most fundamental skill as a web developer"} />
                    <SkillsCard title="CSS" img={'/css.webp'} desc={"I have know CSS for around the same amount of time as I have known HTML so around 9 years"}/>
                    <SkillsCard title="Javascript" img={'/javascript.webp'} desc={"I've known JS for 9 years but mastered it for about 4 years"}/>
                    <SkillsCard title="React" img={'/react.webp'} desc={"I've been using React now for about 3-4 years"}/>
                    <SkillsCard title="Tailwind" img={'/tailwind.webp'} desc={"I've only started using Tailwind CSS for the past 5-6 months. It's much quicker than manual css"}/>
                    <SkillsCard title="Django" img={'/django.webp'} desc={"I've known Django for around 4 Years."}/>
                    <SkillsCard title="Web Design" img={'/web-design.webp'} desc={"I began studying web design principles about 1 a year ago now. I'm still a beginner but I'm learning as I go"}/>
                    <SkillsCard title="SEO" img={'/google.webp'} desc={"SEO is a tricky one. I've always known about SEO and how its done but I only really started to pay attention to it a year ago"} />
                    <SkillsCard title="Next.js" img={'/next-js.webp'} desc={"Next.js is another framework I've only picked up recently. It's help put things in production much faster"} />
                </div>
            </ul>
        </div>
    );
}