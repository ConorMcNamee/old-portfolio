import React, { ReactNode } from "react";


interface Props{
    children?: ReactNode
}


export default function  Layout({ children }: Props) {

    return (
        <main>
            { children }

            <div id="absolute-elements">
            </div>
        </main>
    );
}