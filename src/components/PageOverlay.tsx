import React from "react";

interface PageOverlayProps {
  children: React.ReactNode;
  bgc?: string;
}

const PageOverlay: React.FC<PageOverlayProps> = ({ children, bgc }) => {
  console.log(bgc)
  return (
    <div className="h-screen" style={{ backgroundColor: bgc ? bgc : "navy" }}>
      {children}
    </div>
  );
};

export default PageOverlay;
