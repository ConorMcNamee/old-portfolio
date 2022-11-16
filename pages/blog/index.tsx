import Link from "next/link";
import Logos from "../../components/Layout/Logos";

export default function Blog() {
    return (
        <section className="h-screen w-screen flex justify-center text-center items-center">
            <div className="flex flex-col text-xl">
                <h1>This page is unable right now!</h1>
                <h1>Come back later!</h1>
                <Link className="text-[#517EE1] hover:underline" href="/">Go home</Link>
            </div>
            <Logos></Logos>
        </section>
    );
}
