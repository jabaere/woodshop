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
          className="flex w-[552px] justify-center items-center"
          id={styles.left_side}
        >
          <div className="flex flex-col h-[100%] justify-center items-center">
            <h1 className="font-base text-white text-[2.3vw] not-italic font-medium leading-[normal] align-center mb-[32px]">
              Discover our Quality
            </h1>

            <p className="text-white text-[1.1vw] not-italic font-normal leading-[normal] max-w-[294px] font-base">
              At Woodhouse, we take immense pride in crafting top-notch wood
              products. Our dedicated team of artisans combines tradition and
              innovation to deliver the highest quality wooden creations, built
              to last a lifetime.
            </p>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/second_right_2.jpg"
            width={887}
            height={360}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
