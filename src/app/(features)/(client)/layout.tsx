import NavBar from "@/app/_shared/components/templates/NavBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
}
