import Link from "next/link";

interface Props {
    title: string,
    desc: string
}

export default function Service ({ title, desc }:Props) {
    return (
        <div className="flex flex-col justify-center items-center p-5 m-5">
            <h1 className="text-5xl">{title}</h1>
            <p>{desc}</p>
        </div> 
    );
}