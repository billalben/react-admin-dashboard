import { useState, useEffect } from "react";

const useSidebarState = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 640px)");

    if (matchMedia.matches) setIsSidebarOpen(false);

    const handleResize = () => {
      if (matchMedia.matches) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };

    matchMedia.addEventListener("change", handleResize);

    return () => {
      matchMedia.removeEventListener("change", handleResize);
    };
  }, []);

  return {
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen(!isSidebarOpen),
  };
};

export default useSidebarState;
