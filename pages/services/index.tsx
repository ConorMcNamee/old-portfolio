import Link from "next/link";

export default function ServiceList() {
    return (
        <section className="flex flex-col justify-center">
            <div className="flex flex-col text-center items-center">
                <h1 className="flex text-3xl p-5 m-5">Products and Services</h1>
                <p className="flex text-xl opacity-75 p-5">A simple list of the services I provide to clients an a list of products I personally sell</p>
            </div>

            <div className="flex flex-col items-center p-10">
                <h1 className="text-4xl font-medium">Products</h1>
                <article className="flex flex-wrap flex-col justify-center items-center py-10">
                    <div className="flex text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow-3xl m-5 p-10 w-[90%] lg:w-[50%]">
                        <div id="card" className="flex flex-col justify-center items-center">
                        <p className="text-4xl">Shopify Theme Pages</p>
                        <p className="text-lg">If you are running a successful e-commerce store or are looking to start on the right foot. Don't waste your time building your own site. Buy a theme that has been designed to be customizable and high converting</p>

                        <Link className="text-theme-link text-xl hover:underline" href="/">Click to see more!</Link>
                        </div>
                    </div>
                </article>
            </div> 

            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-medium">Services</h1>
                <article>
                    <h1>Full Stack Freelance</h1>               
                </article>

                <article>
                    <h1>Web Design</h1>
                </article>

                <article>
                    <h1>SEO</h1>
                </article>
            </div>  
        </section>
    );
}