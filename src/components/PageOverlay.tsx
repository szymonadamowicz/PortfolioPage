import React from "react";

interface PageOverlayProps {
  children: React.ReactNode;
}

const PageOverlay: React.FC<PageOverlayProps> = ({ children }) => {
  return <div className="h-screen bg-red-500">{children}</div>;
};

export default PageOverlay;
