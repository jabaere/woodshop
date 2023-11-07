"use client";
import React from "react";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import Image from "next/image";
import Leaf from "../public/icons/leaf.svg";
import bulb from "../public/icons/bulb.svg";
import drop from "../public/icons/drop.svg";
import panel from "../public/icons/panel.svg";
import tv from "../public/icons/tv.svg";
export const SectionOne = () => {
  const advantagesData = [
    { id: 1, icon: Leaf, text: "Eco materials" },
    { id: 2, icon: panel, text: "Solar energy" },
    { id: 3, icon: bulb, text: "Furniture" },
    { id: 4, icon: drop, text: "Water supply" },
    { id: 5, icon: tv, text: "Interior design" },
  ];
  return (
    <>
      <div className="flex flex-col pt-60 ml-[20px] md:ml-[120px] max-w-[479px]">
        <h1
          className="text-white text-4xl not-italic font-normal leading-[normal]"
          id="main_title"
        >
          Welcome to Woodhouse: Where Woodcraft Dreams Come{" "}
          <span className="text-[#63D92C]">True</span>
        </h1>
        <p
          className="text-white text-base not-italic font-normal leading-[normal] mt-3"
          id="main_title"
        >
          We offer you high quality since 1965
        </p>
        <div className={`${styles.contact_button} mt-3`}>
          <Link href="/">Start Now</Link>
        </div>
      </div>
      <div className="flex gap-[50px] lg:gap-0 w-[85%] md:w-[70%] lg:w-[85%] 2xl:w-[100%] self-end mx-auto flex-wrap pt-[222px] sm:pt-[622px] lg:pt-[800px]">
        {advantagesData.map((item, index) => (
          <div
            id={`box-${index}`}
            className="flex w-[100%] md:w-auto lg:w-[20%]"
            key={index}
          >
            <div className="flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-[20px] lg:gap-0 xl:gap-[50px] w-[100%] font-second">
              <Image
                src={item.icon}
                width={45}
                height={60}
                alt={item.text}
                className="w-[25px] h-[30px] lg:w-[45px] lg:h-[60px]"
              />
              <p className="advanteges-text text-white text-2xl not-italic font-bold leading-[normal]">
                {item.text}
              </p>
            </div>
            {index !== 4 && (
              <hr className="hidden xl:flex h-[100%] border-l-[#FFC266] border-l border-solid"></hr>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
