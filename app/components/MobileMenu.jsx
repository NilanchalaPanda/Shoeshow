import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];

  return (
    <ul className="md:hidden flex flex-col font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col"
                onClick={() => setShowCatMenu((prev) => !prev)}
              >
                <div className="flex justify-between items-center">
                  {item?.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] my-5 rounded-xl mx-3">
                    {subMenuData.map((subMenu) => (
                      <Link
                        href={"/"}
                        onClick={() => {
                          setShowCatMenu(false);
                          setMobileMenu(false);
                        }}
                        key={subMenu.id}
                        className="flex items-center justify-between px-4 gap-2 rounded-xl border-t"
                      >
                        <li className="py-4 flex justify-between items-start">
                          {subMenu.name}
                        </li>
                        <span className="opacity-50 text-sm">
                          {subMenu.doc_count}{" "}
                        </span>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                <li className="py-4 px-5 border-b">{item?.name}</li>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
