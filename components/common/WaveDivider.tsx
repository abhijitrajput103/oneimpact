import React from "react";

export const WAVE_PATH =
  "M23 28.2 L26 29 L29 29.2 L32 28.7 L35 30.3 L38 30.5 L41 30.2 L44 30.2 L47 31 L50 30.3 L53 29.8 L56 30.5 L59 29.7 L62 28.5 L65 27.8 L68 27.8 L71 27 L74 29.5 L77 30.3 L80 32.3 L83 32.7 L86 31.8 L89 33 L92 33.8 L95 35 L98 36.3 L101 36.7 L104 37.3 L107 36.5 L110 37.5 L113 38.5 L116 38.5 L119 37.3 L122 36.5 L125 35.8 L128 35.5 L131 34.7 L134 36 L137 37.5 L140 37.5 L143 36.8 L146 37.5 L149 36.5 L152 36.7 L155 38.3 L158 37.8 L161 37.5 L164 36.2 L167 35.5 L170 35.5 L173 35.7 L176 35.3 L179 34 L182 34.8 L185 34.7 L188 34.5 L191 33.7 L194 32.7 L197 32.7 L200 32.7 L203 32.8 L206 33.5 L209 34.2 L212 34.5 L215 35 L218 34.5 L221 34.7 L224 35.7 L227 35.7 L230 35.3 L233 36.3 L236 37.2 L239 37.7 L242 38.5 L245 37.2 L248 36.5 L251 37.3 L254 37 L257 37.5 L260 37.7 L263 36.3 L266 34.8 L269 35.3 L272 35.5 L275 36.5 L278 36.8 L281 38.5 L284 38.5 L287 37.8 L290 36.7 L293 37.3 L296 36.8 L299 36.5 L302 35.3 L305 34.2 L308 33.2 L311 32 L314 32.5 L317 32.5 L320 31.2 L323 30.5 L326 27.3 L329 27.2 L332 27.8 L335 28.2 L338 29.7 L341 30.2 L344 30 L347 30.2 L350 31.2 L353 30.5 L356 29.8 L359 30.5 L362 30.5 L365 28.8 L368 29.2 L371 28.8 L374 28.2 L377 29.2 L380 28.5 L383 29 L386 29 L389 28.7 L392 30.5 L395 30.5 L398 29.8 L401 30.5 L404 31.2 L407 30.2 L410 30 L413 30.3 L416 29.7 L419 28.3 L422 27.8 L425 27.3 L428 27.3 L431 30.3 L434 31 L437 32.5 L440 32.5 L443 32.2 L446 33 L449 34.2 L452 35.3 L455 36.5 L458 36.7 L461 37.3 L464 36.7 L467 37.8 L470 38.5 L473 38.5 L476 36.8 L479 36.5 L482 35.5 L485 35.2 L488 34.8 L491 36.3 L494 37.7 L497 37.5 L500 36.8 L503 37.5 L506 36.5 L509 37 L512 38.5 L515 37.7 L518 37.2 L521 36.2 L524 35.5 L527 35.7 L530 35.5 L533 34.7 L536 34.3 L539 35.2 L542 34.5 L545 34.2 L548 33.3 L551 32.8 L554 32.7 L557 32.7 L560 32.7 L563 33.5 L566 34.3 L569 34.7 L572 35 L575 34.2 L578 34.8 L581 35.7 L584 35.7 L587 35.5 L590 36.3 L593 37.3 L596 37.8 L599 38.2 L602 36.8 L605 36.5 L608 37.7 L611 36.8 L614 37.5 L617 37.5 L620 36 L623 34.7 L626 35.3 L629 35.7 L632 36.5 L635 37.2 L638 38.5 L641 38.5 L644 37.7 L647 36.7 L650 37.3 L653 36.7 L656 36.3 L659 35 L662 34 L665 33 L668 32 L671 32.5 L674 32.5 L677 30.5 L680 29.8 L683 27 L686 27.7 L689 27.8 L692 28.7 L695 29.7 L698 30.5 L701 29.7 L704 30.3 L707 31 L710 30.2 L713 30.2 L716 30.5 L719 30.3 L722 28.7 L725 28.8 L728 29 L731 28.2 L734 29";

interface WaveDividerProps {
  strokeColor?: string;
  strokeWidth?: number | string;
  fillAbove?: string;
  fillBelow?: string;
  containerStyle?: React.CSSProperties;
}

export function WaveDivider({
  strokeColor = "#FFFFFF",
  strokeWidth = 12,
  fillAbove,
  fillBelow,
  containerStyle,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        ...containerStyle,
      }}
    >
      <svg
        viewBox="23 18 711 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        {fillAbove && (
          <path d={`${WAVE_PATH} L734 18 L23 18 Z`} fill={fillAbove} />
        )}
        {fillBelow && (
          <path d={`${WAVE_PATH} L734 48 L23 48 Z`} fill={fillBelow} />
        )}
        <path
          d={WAVE_PATH}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
