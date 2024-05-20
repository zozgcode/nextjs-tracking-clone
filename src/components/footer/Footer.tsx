"use client"

import Link from "next/link";
import { footerLinks, socialLinks } from "./MockData";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import { usePathname } from "next/navigation";

type FooterLinkItem = { title: string; slug: string } | { form: boolean };

function isFooterLinkWithSlug(
  item: FooterLinkItem
): item is { title: string; slug: string } {
  return (item as { slug: string }).slug !== undefined;
}

interface IconComponents {
  [key: string]: React.ComponentType<IconBaseProps>;
}

const iconComponents: IconComponents = {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
};

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ["/track"];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="mt-[50px]">
          <div className="bg-[#FAFAFA] pt-[30px] pb-[30px]">
            <div className="custom_container">
              <div>
                <div className="flex flex-col gap-[20px] md:flex-row">
                  {footerLinks.map((fLinks, index) => (
                    <div key={index} className="w-full">
                      <h3 className="text-[#4d148c] text-[10px] font-bold uppercase mb-[11px]">
                        {fLinks.title}
                      </h3>
                      <ul>
                        {fLinks.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-[5px]">
                            {isFooterLinkWithSlug(item) ? (
                              <Link
                                href={item.slug}
                                className="text-[#333333] hover:underline text-xs font-normal leading-slug"
                              >
                                {item.title}
                              </Link>
                            ) : item.form ? (
                              <div className="relative max-w-max">
                                <input
                                  type="text"
                                  className="border border-[#c2c2c2] p-4 bg-white"
                                  value="English"
                                  disabled
                                />
                                <i className="fa-solid text-[#333333] absolute right-[15px] top-[20px] fa-chevron-down"></i>
                              </div>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-[20px] mt-[30px]">
                {socialLinks.map((sLinks, index) => (
                  <div key={index} className="w-full flex items-center gap-5">
                    <h3 className="text-[#4d148c] text-[10px] font-bold uppercase">
                      {sLinks.title}
                    </h3>
                    <ul className="flex gap-3">
                      {sLinks.list.map((item, itemIndex) => {
                        const IconComponent = iconComponents[item.icon];
                        return (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link
                              href={item.slug}
                              className="text-[#333333] flex items-center justify-center border-2 border-black w-[30px] h-[30px] rounded-full text-xs font-normal leading-slug"
                            >
                              <IconComponent />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#4D148C]">
            <div className="custom_container text-white flex flex-wrap gap-5 justify-between">
              <div>© FedEx 1995-2023</div>
              <ul className="flex gap-3 items-center">
                <li>
                  <Link className="hover:underline" href="">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Security and Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
