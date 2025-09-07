"use client";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import RouteConstants from "../../constants/RouteConstants";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const path = usePathname();
    return (
        <nav className="flex justify-between border-2 border-gray-400 p-5 bg-amber-500">
            <Link href={""} className="font-bold">
                Raman
            </Link>
            <div>
                <Link
                    href={RouteConstants.NUMEROLOGY_CALCULATOR}
                    className={`font-bold border-2 px-3 ${
                        path === RouteConstants.NUMEROLOGY_CALCULATOR
                            ? "bg-blue-500"
                            : ""
                    }`}
                >
                    Numerology Calculator
                </Link>
                <Link
                    href={RouteConstants.NUMEROLOGY_RULES}
                    className={`font-bold border-2 px-3 ${
                        path === RouteConstants.NUMEROLOGY_RULES
                            ? "bg-blue-500"
                            : ""
                    }`}
                >
                    Numerology Rules
                </Link>
            </div>
            <Link href={""} className="font-bold flex gap-2">
                <LuLogOut size={24} />
                Logout
            </Link>
        </nav>
    );
};

export default NavBar;
