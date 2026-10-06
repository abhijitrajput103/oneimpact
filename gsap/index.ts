import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

// Register plugins globally on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  // Configure GSAP defaults
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8,
  });

  // Create standard premium custom eases
  CustomEase.create("main-ease", "0.76, 0, 0.24, 1"); // Similar to power4.inOut or cubic-bezier
  CustomEase.create("reveal-ease", "0.25, 1, 0.5, 1");
}

export { gsap, ScrollTrigger, CustomEase, useGSAP };
