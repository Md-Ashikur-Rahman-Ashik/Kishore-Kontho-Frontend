"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-4 py-10 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-3 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/websiteLogo.png"
              alt="Kishor Kantho Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-sm">বাংলাদেশের সর্বাধিক প্রকাশিত শিশুকিশোর মাসিক</p>
        </div>

        {/* Center - Contact Info */}
        <div className="flex-1 text-center md:text-left text-sm leading-relaxed">
          <h4 className="text-base font-semibold mb-1">যোগাযোগ</h4>
          <p>মোবাইল: +৮৮০ ১৮৯৬ ৪০ ৬৪ ০৮</p>
          <p>ইমেইল: kishorkantha@yahoo.com</p>
          <p>
            ঠিকানা: হাফেজ মঞ্জিল (ইনেন টাওয়ার) স্কুলের বিপরীতে, টমছমব্রিজ,
            কুমিল্লা-৩৫০০।
          </p>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-base font-semibold mb-2">সোশ্যাল মিডিয়া</h4>
          <div className="flex justify-center md:justify-start gap-4 text-gray-700">
              <a href={"https://www.facebook.com/kkcumillacity84"} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 hover:text-blue-600" />
              </a>
              <a href={"https://x.com"} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-blue-500" />
              </a>
              <a href={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-pink-600" />
              </a>
              <a href={"https://www.linkedin.com"} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-800" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}