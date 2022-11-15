import SkillsCard from "./SkillsCard"; 

export default function  Skills() {

    return (
        <div id="skills" className="flex w-screen h-screen justify-center items-center">
            <ul className="flex flex-wrap wrap flex-col w-[50%]">
                <div className="flex flex-row flex-wrap justify-center">
                    <SkillsCard title="HTML" img={'/html.webp'} />
                    <SkillsCard title="CSS" img={'/css.webp'}/>
                    <SkillsCard title="Javascript" img={'/javascript.png'}/>
                    <SkillsCard title="React" img={'/react.png'}/>
                    <SkillsCard title="Tailwind" img={'/tailwind.png'}/>
                    <SkillsCard title="Django" img={'/django.png'}/>
                    <SkillsCard title="Web Design" img={'/web-design.png'}/>
                    <SkillsCard title="SEO" img={'/google.png'} />
                </div>
            </ul>
        </div>
    );
}