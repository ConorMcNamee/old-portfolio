import Image from "next/image";

interface Props {
    title: string
    img: string
}

export default function  SkillsCard({title, img}: Props) {

    return (
        <article className="p-5 m-5 bg-theme shadow dark:bg-theme-dark">
            <div>
                <div id='img'>
                    <Image
                        src={img}
                        alt={title}
                        height={150}
                        width={150}
                     />
                </div>

                <div id='text-section' className="flex justify-center">
                    <h1 className="text-2xl">{title}</h1>
                </div>
            </div>
        </article>
    );
}