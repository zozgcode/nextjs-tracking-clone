'use client';

import Link from 'next/link';
import { useState } from 'react';
import { menuLink } from './MockData';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const noHeader = ['/track'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="bg-[#4D148C] z-50 fixed w-full top-0 left-0 right-0">
          <div className="max-w-[1100px] flex justify-between mx-auto p-4 pt-[30px] pb-[30px]">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold flex items-baseline">
                <span className="text-[#ffffff]">Fed</span>
                <span className="text-[#ff6600]">Ex</span>
                <span className="text-sm align-super relative top-[2px] text-red-700">®</span>
              </Link>
              <nav
                className={`ml-16 max-[812px]:ml-0 max-[812px]:absolute max-[812px]:bg-white max-[812px]:w-full max-[812px]:top-[90px] max-[812px]:left-0 max-[812px]:right-0 max-[812px]:h-screen ${
                  isOpen ? 'max-[812px]:block' : 'max-[812px]:hidden'
                }`}
              >
                <ul className="flex max-[812px]:flex-col max-[812px]:gap-0 gap-10 max-[812px]:text-[#333333] text-white font-semibold text-sm">
                  {menuLink.map((navLink, i) => (
                    <li key={i}>
                      <Link href={navLink.slug} className="flex max-[812px]:p-[25px] max-[812px]:border gap-2" onClick={closeMenu}>
                        <span>{navLink.label}</span>
                        {/* <span><i className="fa-solid fa-chevron-down"></i></span> */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              {/* <i className="fa-regular text-3xl text-white fa-circle-user"></i> */}
              <div onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose className="fa-solid text-3xl text-white hidden max-[812px]:block" /> : <FaBars className="fa-solid text-3xl text-white hidden max-[812px]:block" />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
