import React from "react";
import Nav from "./nav";

export default function Layout({ children }) {
    return (
        <div
            className="
      flex 
      flex-col 
      pt-36
      pb-12
      mx-auto
      w-4xl
      w-52.5
      h-screen
      font-mono
      text-sm
    "
        >
            <div class="flex space-x-40 h-full pb-12">
                <Nav />
                <section className=" w-full h-full overflow-y-auto no-scrollbar">
                    {children}
                </section>
            </div>

            <div
                className="
        flex 
        w-full 
        justify-center
      "
            >
                Designed and Built by Karlo Miguel Palisoc
            </div>
        </div>
    );
}
