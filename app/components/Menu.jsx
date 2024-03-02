import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", url: "category/jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", url: "category/sneakers", doc_count: 8 },
    {
      id: 3,
      name: "Running shoes",
      url: "category/running-shoes",
      doc_count: 64,
    },
    {
      id: 4,
      name: "Football shoes",
      url: "category/football-shoes",
      doc_count: 107,
    },
  ];

  return (
    <ul className="hidden md:flex md:items-center md:gap-8 md:font-medium md:text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item?.name}

                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 shadow-2xl rounded-xl">
                    {subMenuData.map((subMenu) => (
                      <Link
                        href={"/" + subMenu.url}
                        key={subMenu.id}
                        className=" flex items-center justify-between px-4 gap-2 rounded-xl hover:bg-black/[0.03]"
                      >
                        <li className="h-12 flex items-center rounded-xl">
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
              <Link href={item?.url}>
                <li className="cursor-pointer">{item?.name}</li>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
