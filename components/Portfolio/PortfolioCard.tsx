import { useEffect, useRef } from "react"
import Image from "next/image"

import Link from "next/link"

const PortfolioProjects = [
    {
      "title": "Potion.so",
      "desc": "This is a client I have been working with to develop a pomodoro timer widget that embeds into Notion.",
      "img": "/potion-pomodoro.png",
      "link": "https://potion.so/",
    },
    {
      "title": "ByteLoop",
      "desc": "This is a Open Source Project that I am working on with the Owner Nick. First contribution to the project has been an SQL Schema. As there is no frontend I'm not able to include any images however, the github is linked below",
      "link": "https://github.com/nickpickcodes/ByteLoop.Database"
    },
    // {
    //   "title": "Go, GraphQL Todo List",
    //   "desc": "This is a client I have been working with to develop a pomodoro timer widget that embeds into Notion",
    //   "img": "/potion-pomodoro.png"
    // },
]

export default function PortfolioCard() {


    return (
    <div className="relative flex flex-col justify-center items-center md:my-20">
      {
        PortfolioProjects.map((project:any, key) => (
          <div key={key} className="flex relative text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow-3xl m-5 p-10 w-[90%] lg:w-[50%]">
            <div id="card" className="flex flex-col justify-center items-center">
              <p className="text-4xl">{project.title}</p>
              <p className="text-lg">{project.desc}</p>
              {
                project.img?               
                <Image
                src={project.img}
                alt={project.title}
                height={400}
                width={600}
                /> : null
              }

              <Link className="text-theme-link text-xl hover:underline" href={project.link}>Click to see more!</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

              {/* {
                project.imgs.map((img:any) => (
                  <Image
                    src={img}
                  />
                ))
              } */}