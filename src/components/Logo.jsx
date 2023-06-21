import ModelViewer from "@metamask/logo";
import React, { useEffect, useRef } from "react";
import foxJson from "../content/fade.json";
const Logo = () => {
  const container = useRef();

  //get the size of the viewport
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const viewer = ModelViewer({
      pxNotRatio: true,
      width: width < 450 ? 350 : 500,
      height: width < 450 ? 350 : 500,
      followMouse: true,
      slowDrift: false,
      meshJson: foxJson,
    });

    container.current.appendChild(viewer.container);
  }, []);

  return (
    <div ref={container} className=" absolute  opacity-50 z-20" />
  );
};

export default Logo;
