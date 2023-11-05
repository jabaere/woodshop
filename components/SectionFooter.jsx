import React from "react";
import styles from "@/styles/footer.module.css";
import Image from "next/image";
import CallIcon from "../public/icons/solar_phone.svg";
import EmailIcon from "../public/icons/email.svg";
export const SectionFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className="flex w-full justify-center pt-[50px]">
          <Image
            src={"/images/logo2.png"}
            width={172}
            height={49}
            className={styles.logo_img}
            alt="image"
          />
        </div>
        <div className="flex flex-col self-center justify-between w-[80%] h-[65%] mt-[76px]">
          <div className="flex flex-col md:flex-row justify-between text-white h-[65%] flex-wrap">
            <div className="flex flex-col font-base">
              <h4 className="text-white text-lg not-italic font-normal leading-[normal]">
                Company
              </h4>
              <ul className="mt-[31px] flex flex-col justify-between h-full">
                <li>Home</li>
                <li>Services</li>
                <li>News</li>
                <li>About Us</li>
                <li>Calculator</li>
              </ul>
            </div>
            <div className="flex flex-col font-base">
              <h4 className="text-white text-lg not-italic font-normal leading-[normal]">
                Sites
              </h4>
              <ul className="mt-[31px] flex flex-col gap-[15px] h-full">
                <li>www.alibaba.com</li>
                <li>www.taobao.com</li>
                <li>www.aliexpress.com</li>
              </ul>
            </div>
            <div className="flex flex-col font-base">
              <h4 className="text-white text-lg not-italic font-normal leading-[normal]">
                Resources
              </h4>
              <ul className="mt-[31px] flex flex-col gap-[15px] h-full">
                <li>Tbilisi</li>
                <li>Batumi</li>
                <li>Kutaisi</li>
              </ul>
            </div>
            <div className="flex flex-col font-base">
              <h4 className="text-white text-lg not-italic font-normal leading-[normal]">
                Contact
              </h4>
              <ul className="mt-[31px] flex flex-col gap-[15px] h-full max-w-[186px]">
                <li>
                  Space Walk Georgia Kazbegi Ave.N30a Corner of Kutateladze st
                </li>
                <li>
                  St.Kutaisi,D.Agmashenebeli 10 (Balakhvani district) Batumi
                  ,Zubalashvili 20.
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-base">
              <h4 className="text-white text-lg not-italic font-normal leading-[normal]">
                Contact Us
              </h4>
              <div className="mt-[31px] flex flex-col gap-[15px] h-full max-w-[186px]">
                <div className="flex gap-[13px]">
                  <Image src={CallIcon} width={24} height={24} alt="icon" />
                  <p>995 (599) 72-49-31</p>
                </div>
                <div className="flex gap-[13px]">
                  <Image src={EmailIcon} width={24} height={24} alt="icon" />
                  <p>vardiashvililuka@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white">
            <div className="text-[white] text-xs not-italic font-light leading-[normal] hidden lg:block">
              © 2022 All Rights Reserved
            </div>
            <div className="mt-[30px] lg:mt-0">
              <ul className="flex flex-col md:flex-row justify-between text-[white] text-sm not-italic font-normal leading-[normal] font-base gap-10 ">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Sales and Refunds</li>
                <li>Legal</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
