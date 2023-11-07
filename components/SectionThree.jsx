import React from "react";
import styles from "@/styles/sectionThree.module.css";
import Image from "next/image";
import Link from "next/link";
import CallIcon from "../public/icons/call.svg";

export const SectionThree = () => {
  return (
    <>
      <div className={styles.wrapper}></div>
      <div className={styles.background}>
        <div className="flex flex-col mt-[50px] lg:mt-[264px] w-[98%] justify-center font-second">
          <div className="flex items-center justify-center">
            <div className="wrapper w-[124px] h-[3px] bg-[#FFC266]"></div>
            <h2 className="text-[#FFC266] text-center text-[22px] not-italic font-semibold leading-[110.5%] tracking-[-1.1px] max-w-[150px]">
              OUR SERVICES
            </h2>
          </div>
          <div>
            <h3 className="text-white text-center text-[20px] md:text-[40px] not-italic font-semibold leading-[147.5%]">
              What cottage{" "}
              <span className="text-[#FFC266] text-center text-[25px] md:text-[40px] not-italic font-semibold leading-[147.5%]">
                we build
              </span>
            </h3>
          </div>
        </div>
        <div className="cottage-container mt-[57px] lg:mt-[37px] flex flex-col w-[90%] lg:w-[80%] self-center gap-[26px] items-center">
          <div className="w-full flex gap-[66px] justify-center lg:justify-normal 2xl:justify-between lg:gap-[26px] items-center flex-wrap lg:flex-nowrap">
            <div className={styles.box}>
              <Image
                src="/images/f-1.png"
                width={267}
                height={280}
                alt="cottage"
                className="w-[267px] h-[280px]"
              />
              <p className="mt-[23px] text-[rgba(245,245,245,0.76)] text-center text-[28px] not-italic font-semibold leading-[110.5%] tracking-[-1.4px] font-second">
                from{" "}
                <span className="text-neutral-100 text-[32px] not-italic font-semibold leading-[110.5%] tracking-[-1.6px]">
                  $18.000
                </span>
              </p>
            </div>
            <div className={styles.active}>
              <Image
                src="/images/f-2.png"
                width={267}
                height={280}
                alt="cottage"
                className="w-[267px] h-[280px]"
              />
              <p className="mt-[23px] text-[rgba(245,245,245,0.76)] text-center text-[28px] not-italic font-semibold leading-[110.5%] tracking-[-1.4px] font-second">
                from{" "}
                <span className="text-neutral-100 text-[32px] not-italic font-semibold leading-[110.5%] tracking-[-1.6px]">
                  $24.000
                </span>
              </p>
            </div>
            <div className={styles.box}>
              <Image
                src="/images/f-3.png"
                width={267}
                height={280}
                alt="cottage"
                className="w-[267px] h-[280px]"
              />
              <p className="mt-[23px] text-[rgba(245,245,245,0.76)] text-center text-[28px] not-italic font-semibold leading-[110.5%] tracking-[-1.4px] font-second">
                from{" "}
                <span className="text-neutral-100 text-[32px] not-italic font-semibold leading-[110.5%] tracking-[-1.6px]">
                  $29.000
                </span>
              </p>
            </div>
          </div>
          <div className="hidden lg:flex w-full justify-between">
            <div>
              <p className="font-second text-white text-[32px] not-italic font-semibold leading-[normal] max-w-[385px]">
                24/7 Callcenter{" "}
                <span
                  className="text-white text-4xl not-italic font-semibold leading-[normal]"
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Need a consultation?
                </span>
              </p>
            </div>
            <div className="flex items-center gap-9">
              <Image
                src={CallIcon}
                width={45}
                height={44}
                alt="icon"
                className="text-white"
              />
              <p className="font-second text-white text-2xl not-italic font-semibold leading-[147.5%]">
                555 44 44 44
              </p>
              <div className={styles.contact_button}>
                <Link href="/">contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
