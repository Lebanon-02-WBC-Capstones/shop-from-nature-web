import * as React from "react";

function Corner() {
  return (
    <>
      <svg
        height="80"
        viewBox="0 0 84 150"
        fill="none"
        className="absolute top-0 right-0 z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83 148.5C56.3333 127.833 2.6 63.6 1 -28H83V148.5Z"
          fill="#7EAC8A"
          stroke="#B18585"
        />
      </svg>
      <svg
        width="90"
        viewBox="0 0 129 85"
        className="absolute top-0 right-0 z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M129 20.5C129 56.1224 100.122 85 64.5 85C28.8776 85 0 56.1224 0 20.5C0 -15.1224 28.8776 -44 64.5 -44C100.122 -44 129 -15.1224 129 20.5Z"
          fill="#5F7264"
        />
      </svg>
      <svg
        width="197"
        viewBox="0 0 197 88"
        className="absolute top-0 right-0 z-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{ mixBlendMode: "darken" }} filter="url(#filter0_d)">
          <path
            d="M191.374 79C204.052 3.05848 20.263 49.4572 5 1"
            stroke="#5F7264"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.523438"
            y="0.849854"
            width="195.977"
            height="86.2326"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        </defs>
      </svg>
    </>
  );
}
export default Corner;
