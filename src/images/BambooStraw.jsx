import * as React from "react";

function BambooStraw() {
  return (
    <svg
      width="265"
      height="205"
      viewBox="0 0 265 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0456_d)">
        <rect x="4" width="265" height="205" fill="url(#pattern0456)" />
      </g>
      <defs>
        <filter
          id="filter0456_d"
          x="0"
          y="0"
          width="272653"
          height="212053"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0456"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0456"
            transform="translate(0 -0.147487) scale(0.00177305 0.00229199)"
          />
        </pattern>
        <image
          id="image0456"
          width="564"
          height="565"
        />
      </defs>
    </svg>
  );
}

export default BambooStraw;