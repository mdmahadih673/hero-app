import Image from "next/image";
import Link from "next/link";
import footLogo from "@/assets/logo.png"

const FooterPage = () => {
    return (
        <footer className="bg-[#00182c] text-white mt-10">
            <div className="max-w-7xl container mx-auto px-6 py-5">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={footLogo}
                            alt="Logo"
                            width={40}
                            height={15}
                            className="object-contain"
                        />
                    </Link>

                    {/* Social Links */}
                    <div className="text-center">
                        <p className="text-sm font-medium mb-2">
                            Social Links
                        </p>

                        <div className="flex justify-center gap-3">
                            <a
                                href="#"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#00182c] hover:bg-gray-200 transition"
                            >
                                <span aria-hidden="true" className="text-[10px] font-bold">GH</span>
                            </a>

                            <a
                                href="#"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#00182c] hover:bg-gray-200 transition"
                            >
                                <span aria-hidden="true" className="text-[10px] font-bold">in</span>
                            </a>

                            <a
                                href="#"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#00182c] hover:bg-gray-200 transition"
                            >
                                <span aria-hidden="true" className="text-[11px] font-bold">f</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-4"></div>

                {/* Copyright */}
                <div className="text-center pt-3">
                    <p className="text-[11px] text-gray-300">
                        Copyright © 2026 - All right reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default FooterPage;