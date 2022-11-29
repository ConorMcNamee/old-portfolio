import React, { ReactNode } from "react";


interface Props{
    children?: ReactNode
}


export default function  Layout({ children }: Props) {

    return (
        <main className="relative">
            { children }

            <div id="absolute-elements">
            </div>
        </main>
    );
}