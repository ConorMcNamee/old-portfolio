import { useEffect, useRef } from "react"
import {Link} from "react-scroll"
import Image from "next/image"

export default function Logos() {


    return (
    <section className="fixed bottom-0 right-0 border-l p-5">
        <div className="">
            <a href="https://twitter.com/conor_access"><Image 
                src="/socials/twitter.png"
                alt="twitter"
                height={50}
                width={50}
            /></a>
        </div>
    </section>
    )
}