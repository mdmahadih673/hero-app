"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/APPS" },
    { name: "Installation", href: "/Installation" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <div
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                ? "border-gray-200 bg-white/80 shadow-md backdrop-blur-md"
                : "border-transparent bg-white"
                }`}
        >
            <div className="navbar container mx-auto max-w-6xl px-4 py-3">
                {/* Logo */}
                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Book Vibe" width={34} height={34} priority />
                        <span className="text-xl font-extrabold tracking-tight text-gray-800">
                            HERO.<span className="text-green-600">IO</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-2 rounded-full bg-gray-50 p-1.5 ring-1 ring-gray-200">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(link.href)
                                        ? "bg-green-600 text-white shadow-sm"
                                        : "text-gray-600 hover:bg-white hover:text-green-600 hover:shadow-sm"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-3">
                    <div className="hidden items-center gap-3 sm:flex">


                        <Link
                            href="/register"
                            className="rounded-full bg-gradient-to-r from-green-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle text-xl"
                            aria-label="Open menu"
                        >
                            ☰
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-10 mt-3 w-60 gap-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
                        >
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`rounded-xl font-medium ${isActive(link.href)
                                            ? "bg-green-50 text-green-600"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                            <div className="my-2 border-t border-gray-100" />


                            <li>
                                <Link
                                    href="/register"
                                    className="justify-center rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 font-semibold text-white"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;