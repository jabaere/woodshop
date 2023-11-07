import React from "react";
import Image from "next/image";
import styles from "@/styles/sectionTwo.module.css";
export const SectionTwo = () => {
  return (
    <div className="flex flex-col">
      <div
        className={`w-[100%] h-[100%] mt-[-5px] ${styles.sectionTwo_container}`}
      ></div>
      <div className={`flex pt-[5px] ${styles.sectionTwo_container}`}>
        <div
          className="flex flex-col md:flex-row w-[552px] h-[360px] justify-center items-center"
          id={styles.left_side}
        >
          <div className="flex flex-col h-[100%] justify-center items-center">
            <h1 className="font-base text-white text-[3.3vh] md:text-[2.3vw] not-italic font-medium leading-[normal] align-center mb-[32px]">
              Discover our Quality
            </h1>

            <p className="text-white not-italic font-normal leading-[normal] max-w-[294px] font-base">
              At Woodhouse, we take immense pride in crafting top-notch wood
              products. Our dedicated team of artisans combines tradition and
              innovation to deliver the highest quality wooden creations, built
              to last a lifetime.
            </p>
          </div>
        </div>

        <div
          className=" hidden md:flex w-[70%] 2xl:w-[90%] h-[360px]"
          id={styles.right_side}
        ></div>
      </div>
    </div>
  );
};
