"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiSolidHelpCircle } from "react-icons/bi";
import "./style.scss";


const Header = () => {
  return (
    <header className="header fluid">
      <div className="left_header">
        <Image src="/assets/icon/Logo.svg" width={10} height={50} alt="Logo" />
      </div>

      <div className="right_header">
        <Link href="/">Offer</Link>
        <Link href="/">
          <BiSolidHelpCircle />
          Need help
        </Link>
      </div>
    </header>
  );
};

export default Header;
