"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    document.body.classList.remove("custom-cursor-active");
    document.body.style.cursor = "auto";
  }, []);

  return null;
}

export default Cursor;
