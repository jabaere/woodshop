"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@components/SectionTwo";
import { SectionThree } from "@components/SectionThree";
import { SectionFooter } from "@components/SectionFooter";
import { ToggleMenu } from "@components/MobileMenu";
import styles from "@/styles/home.module.css";
import { StarsComp } from "@components/Stars";

export default function Home() {
  return (
    <div>
      <ToggleMenu />
      <section className={styles.background}>
        <StarsComp />
        <SectionOne />
      </section>
      <SectionTwo />
      <SectionThree />
      <SectionFooter />
    </div>
  );
}
