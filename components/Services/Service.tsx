import Link from "next/link";

export default function Service () {
    return (
        <div className="flex flex-col items-center">
        <article className="flex flex-wrap flex-col justify-center items-center py-10 w-[80%]">
            <div className="flex text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow-3xl m-5 p-10 w-[90%] lg:w-[50%]">
                <div id="card" className="flex flex-col justify-center items-center">
                <p className="text-4xl">Custom Website Development</p>
                <p className="text-lg">Whether you are just a small businesses or a large corporate, everyone needs a website. A website does so much more than just display products or contact information. Your website is the face of your business. If your website is unprofessional what is that going to tell your customers or clients?</p>

                <Link className="text-theme-link text-xl hover:underline" href="/contact">Get in Touch</Link>
                </div>
            </div>
        </article>

        <article className="flex flex-wrap flex-col justify-center items-center py-10 w-[80%]">
            <div className="flex text-center items-center justify-center self-center bg-theme dark:bg-theme-dark drop-shadow-3xl m-5 p-10 w-[90%] lg:w-[50%]">
                <div id="card" className="flex flex-col justify-center items-center">
                <p className="text-4xl">Custom Web App and Software Development</p>
                <p className="text-lg">Do you have an out of date software system or no system at all? I can develop anything from CRM's to Marketing Automation tools. Get in touch an we can talk about your needs and potential solutions</p>

                <Link className="text-theme-link text-xl hover:underline" href="/contact">Get in Touch</Link>
                </div>
            </div>
        </article>
    </div> 
    );
}