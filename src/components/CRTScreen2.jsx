import React from "react";
import "./styles/CRTScreen2.css";
import sphere from "/sphere_wide_1.png";
import sphere2 from "/sphere_wide_2.png";
import sphere3 from "/sphere_wide_3.jpg";
import sphere4 from "/sphere_wide_4.png";
import MainText from "./MainText";

const CRTScreen2 = () => (
  <div>
    <div id="screen">
      <div id="content" className="frame">
        {/* <div className="flickering-lines"></div> */}
        <MainText />
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100vw"
      height="100vh"
      viewBox="0 0 256 256"
      style={{ position: "absolute", visibility: "hidden" }}
    >
      <defs>
        <filter
          id="SphereMapTest"
          filterUnits="objectBoundingBox"
          x="0"
          y="0"
          width="1"
          height="1"
          color-interpolation-filters="sRGB"
        >
          <feImage
            id="mapa"
            result="10_MAP"
            xlinkHref={sphere4}
            width="100vw"
            height="100vh"
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid slice"
          />
          <feDisplacementMap
            id="despMap"
            in="SourceGraphic"
            in2="10_MAP"
            scale="-100"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  </div>
);

export default CRTScreen2;
