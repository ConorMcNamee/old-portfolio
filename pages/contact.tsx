import Logos from "../components/Layout/Logos";

export default function Contact() {
    return (
        <section id="contact" className="h-screen flex flex-col text-center justify-center self-center p-10">
            <h1 className="flex flex-col text-4xl text-center">Do you want to Grow your Business?</h1>
            <h1 className="flex flex-col text-2xl">Get in touch</h1>

            {/* <form className="flex flex-col h-[50%] py-20 w-[50%] justify-center self-center" method="post">
<h1 className="flex text-4xl justify-center">Join My Newsletter</h1>

<section className="w-[70%] self-center mb-10">
<input type="text" className="flex py-5 justify-end w-full text-2xl p-4 text-center mb-5" />
<input type="submit" className="bg-blue-500 w-full py-4 mb-5"></input>
</section>
</form> */}

            <section className="text-2xl mt-5">
                <h1>Drop me and Email or follow me on my socials!</h1>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNrcxCtVXGkjskcMWwzvBbSqrSksbhZhGkKXlrcxCgGstFBLfWqkWGQWfTvHzGwzcsPJBV">cmcnamee4@gmail.com</a>
            </section>

            <Logos></Logos>
        </section>
    );
}

