import Image from "next/image";
import { useState } from "react";
import {motion} from "framer-motion"

interface Props {
    title: string
    img: string
    desc: string
}

const variants = {
    flipped: {
        rotateY: 180,
        duration: 1,
    },
    unflipped: {
        rotate: 0,
    },

    showText: {
        rotateY: 180,
        duration: 1,
        opacity: 1,
        zIndez: 10
    },

    hideText: {
        rotateY: 0,
        opacity: 0
    },
}




export default function  SkillsCard({title, img, desc}: Props) {

    const [flipped, setFlipped] = useState(false);

    const handleMouseDown = (e:any) => {
        setFlipped(!flipped);
    }


    return (
        <motion.div className="flex flex-col p-5 m-5 bg-theme drop-shadow-3xl dark:bg-theme-dark justify-between"
        variants={variants}
        key={'card'}
        initial={"unflipped"}
        onMouseDown={handleMouseDown}
        animate={flipped === true ? 'flipped' : 'unflipped'}
        transition={{ delay: .2 }}
        >
            <motion.div
                className="absolute text-center"
                variants={variants}
                initial={'hideText'}
                animate={flipped === true ? 'showText' : 'hideText'}
                transition={{ delay: .2 }}
            > {desc}
            </motion.div>

                <motion.div id='img'
                    variants={variants}
                    initial={'unflipped'}
                    animate={flipped === true ? {opacity: 0} : {opacity: 1}}
                    transition={{ delay: .2 }}
                >
                    <Image
                        src={img}
                        alt={title}
                        height={150}
                        width={150}
                     />
                </motion.div>

                <motion.div id='text-section' className="flex justify-center items-end">
                    <h1 className="text-2xl">{title}</h1>
                </motion.div>
        </motion.div>
    );
}