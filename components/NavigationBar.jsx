"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleMenu } from "@/store/menuReducer";
import { useSelector, useDispatch } from "react-redux";
export const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const dispatch = useDispatch();
  const routes = [
    { name: "Home", path: "/" },
    { name: "About us", path: "about" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "Gallery", path: "gallery" },
  ];
  const pathname = usePathname();
  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.container}>
      {/* {mobile menu} */}
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="#63D92C"
        xmlns="http://www.w3.org/2000/svg"
        className="flex cursor-pointer absolute left-0 xl:hidden"
        onClick={() => dispatch(handleMenu(true))}
      >
        <rect width="40" height="4" fill="var(--main-col)"></rect>
        <rect y="8" width="40" height="4" fill="var(--main-col)"></rect>
        <rect y="16" width="40" height="4" fill="var(--main-col)"></rect>
      </svg>
      <div className="ml-[83px] hidden xl:flex">
        <Image
          src={"/images/logo2.png"}
          width={152}
          height={29}
          className={styles.logo_img}
          alt="image"
        />
      </div>
      <div className="gap-[165px] hidden xl:flex">
        <div className={styles.menu_items}>
          {routes.map((route, index) => (
            <Link
              href={`${route.path}`}
              // as={`${route === "About us" ? "about" : route.path}`}
              onClick={() => handleNavClick(route.path)}
              key={index}
              className={styles.menu_item}
            >
              {route.name}
              <hr
                className={
                  route.path === pathname || `/${route.path}` === pathname
                    ? styles.line_active
                    : styles.line_hidden
                }
              />
            </Link>
          ))}
        </div>
        <div className={styles.contact_button}>
          <Link href="/">contact us</Link>
        </div>
      </div>
    </div>
  );
};
