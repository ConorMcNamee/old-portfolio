import SkillsCard from "./SkillsCard"; 


export default function  Skills() {

    return (
        <div id="skills" className="flex justify-center flex-col items-center md:w-screen md:h-screen mt-10 lg:m-0">
            <h1 className="text-2xl mt-10">Skills</h1>
            <ul className="flex flex-wrap wrap md:flex-col md:w-[60%]">
                <div className="flex flex-row flex-wrap justify-center">
                    <SkillsCard title="HTML" img={'/html.webp'} />
                    <SkillsCard title="CSS" img={'/css.webp'}/>
                    <SkillsCard title="Javascript" img={'/javascript.png'}/>
                    <SkillsCard title="React" img={'/react.png'}/>
                    <SkillsCard title="Tailwind" img={'/tailwind.png'}/>
                    <SkillsCard title="Django" img={'/django.png'}/>
                    <SkillsCard title="Web Design" img={'/web-design.png'}/>
                    <SkillsCard title="SEO" img={'/google.png'} />
                    <SkillsCard title="SEO" img={'/next-js.png'} />
                </div>
            </ul>
        </div>
    );
}