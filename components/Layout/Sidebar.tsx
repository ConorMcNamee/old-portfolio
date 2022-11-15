import { useEffect, useRef } from "react"
import {Link} from "react-scroll"

export default function Sidebar() {


    return (
    <section className="hidden text-xl fixed bottom-0 left-10 z-50 origin-top-left -rotate-90 w-[50%] justify-center md:flex">
        <section className="flex w-[30%] justify-between ">
            <Link activeClass={"active"} smooth={true} to="skills">Skills</Link>
            <Link smooth={true} to="about">About</Link>
            <Link smooth={true} to="home">Home</Link>
        </section>
      </section>
    )
}