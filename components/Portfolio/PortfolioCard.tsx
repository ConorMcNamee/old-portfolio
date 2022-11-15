import { useEffect, useRef } from "react"
import Image from "next/image"
import {Link} from "react-scroll"

const PortfolioProjects = [
    {
      "title": "Potion.so",
      "desc": "This is a client I have been working with to develop a pomodoro timer widget that embeds into Notion",
      "img": "/potion-pomodoro.png"
    },
    // {
    //   "title": "Go, GraphQL Todo List",
    //   "desc": "This is a client I have been working with to develop a pomodoro timer widget that embeds into Notion",
    //   "img": "/potion-pomodoro.png"
    // },

        // {
    //   "title": "ByteLoop",
    //   "desc": "This is a client I have been working with to develop a pomodoro timer widget that embeds into Notion",
    //   "img": "/potion-pomodoro.png"
    // },


]

export default function PortfolioCard() {


    return (
    <div className="h-screen flex flex-wrap flex-col justify-center items-center">
      {
        PortfolioProjects.map((project:any, key) => (
          <div key={key} className="flex text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow m-5 p-10">
            <div id="card" className="flex flex-col justify-center items-center w-1/2">
              <p className="text-4xl">{project.title}</p>
              <p className="text-lg">{project.desc}</p>
              <Image
              src={project.img}
              alt={project.title}
              height={400}
              width={600}
              />
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