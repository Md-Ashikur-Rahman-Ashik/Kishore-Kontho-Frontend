"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";


const navLinks = [
    { name: "হোম", href: "/" },
    { name: "কিশোরকণ্ঠ শপ", href: "/shop" },
    { name: "আমাদের সম্পর্কে", href: "/about-us" },
    { name: "যোগাযোগ", href: "/contact-us" },
];

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <header className="bg-[#1d283a] text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    কিশোরকণ্ঠ
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm transition hover:text-white ${isActive(link.href)
                                    ? "font-semibold underline underline-offset-4"
                                    : "text-gray-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="border rounded px-4 py-1 text-sm hover:bg-white hover:text-black transition"
                    >
                        লগইন
                    </Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="text-white">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#1d283a] text-white w-64">
                            <SheetHeader>
                                <SheetTitle className="text-white">মেনু</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm transition hover:text-white ${isActive(link.href)
                                                ? "font-semibold underline underline-offset-4"
                                                : "text-gray-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/login"
                                    className="border rounded px-4 py-1 text-sm hover:bg-white hover:text-black transition w-fit"
                                >
                                    লগইন
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}