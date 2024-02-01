"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiSolidHelpCircle } from "react-icons/bi";
import "./style.scss";


const Header = () => {

  //! header scroll ederken fonksiyonluq
  const [lastScrollTop, setLastScrollTop] = React.useState(0);
  const [visible, setVisible] =React. useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset
      if(currentScrollPos > lastScrollTop || (currentScrollPos == 0)) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollTop(currentScrollPos < 0 ? 0 : currentScrollPos);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop])


  return (
    <header className={`header fluid ${visible ? "visible" : ""}`}>
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
