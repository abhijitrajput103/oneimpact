import { gsap } from "@/gsap";

/**
 * Applies a magnetic force effect on an element, pulling it slightly towards the user's cursor.
 * @param element The HTML element to apply the magnetic effect to.
 * @param event The mouse event containing coordinates.
 * @param strength The pulling intensity (default 0.35).
 * @param textStrength The pulling intensity for inner text (default 0.15).
 */
export function applyMagneticEffect(
  element: HTMLElement,
  event: MouseEvent,
  strength = 0.35,
  textStrength = 0.15
) {
  const bound = element.getBoundingClientRect();
  
  // Calculate relative mouse coordinates from element center
  const mouseX = event.clientX - (bound.left + bound.width / 2);
  const mouseY = event.clientY - (bound.top + bound.height / 2);

  // Pull the outer element
  gsap.to(element, {
    x: mouseX * strength,
    y: mouseY * strength,
    duration: 0.6,
    ease: "power2.out",
    overwrite: "auto",
  });

  // If there's an inner text or content container, pull it slightly less for 3D parallax effect
  const innerContent = element.querySelector("[data-magnetic-child]") || element.firstElementChild;
  if (innerContent) {
    gsap.to(innerContent, {
      x: mouseX * textStrength,
      y: mouseY * textStrength,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
}

/**
 * Resets the magnetic element coordinates to origin with smooth animation.
 */
export function resetMagneticEffect(element: HTMLElement) {
  gsap.to(element, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "elastic.out(1.2, 0.4)",
    overwrite: "auto",
  });

  const innerContent = element.querySelector("[data-magnetic-child]") || element.firstElementChild;
  if (innerContent) {
    gsap.to(innerContent, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1.2, 0.4)",
      overwrite: "auto",
    });
  }
}

/**
 * Helper to split a string into words or characters for reveal animations
 */
export function splitTextIntoSpans(text: string, type: "words" | "chars" = "words") {
  if (type === "words") {
    return text.split(" ");
  }
  return Array.from(text);
}
