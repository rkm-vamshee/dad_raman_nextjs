import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

const NavBar = () => {
    return (
        <nav className="flex justify-between border-2 border-gray-400 p-5 bg-amber-500">
            <Link href={""} className="font-bold">
                Raman
            </Link>
            <Link href={""} className="font-bold border-2 px-3">
                Numerology Calculator
            </Link>
            <Link href={""} className="font-bold flex gap-2">
                <LuLogOut size={24} />
                Logout
            </Link>
        </nav>
    );
};

export default NavBar;
