import Link from "next/link";

export default function Product () {
    return (
        <div className="flex flex-col items-center">
        <article className="flex flex-wrap flex-col justify-center items-center py-10 w-[80%]">
            <div className="flex text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow-3xl m-5 p-10 w-[90%] lg:w-[50%]">
                <div id="card" className="flex flex-col justify-center items-center">
                <p className="text-4xl">Shopify Theme Pages</p>
                <p className="text-lg">If you are running a successful e-commerce store or are looking to start on the right foot. Don&#39;t waste your time building your own site. Buy a theme that has been designed to be customizable and high converting</p>

                <Link className="text-theme-link text-xl hover:underline" href="/contact">Get in Touch</Link>
                </div>
            </div>
        </article>
    </div> 
    );
}