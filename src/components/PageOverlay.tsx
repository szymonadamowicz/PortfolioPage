import React from "react";

interface PageOverlayProps {
  children: React.ReactNode;
  bgc?: string;
}

const PageOverlay: React.FC<PageOverlayProps> = ({ children, bgc }) => {
  return (
    <div className="h-full w-full flex justify-center items-center" style={{ backgroundColor: bgc ? bgc : "navy" }}>
      {children}
    </div>
  );
};

export default PageOverlay;
