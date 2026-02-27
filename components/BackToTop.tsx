"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { PiArrowUpBold } from "react-icons/pi";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listen on document (catches all scroll containers)
    const check = () => {
      const scrolled =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setVisible(scrolled > 250);
    };

    window.addEventListener("scroll", check, { passive: true });
    document.addEventListener("scroll", check, { passive: true });
    // Also poll every second as a fallback (catches cases where scroll event doesn't fire)
    const interval = setInterval(check, 1000);

    return () => {
      window.removeEventListener("scroll", check);
      document.removeEventListener("scroll", check);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "32px",
            right: "24px",
            zIndex: 999999,
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1e224a, #161A31)",
            border: "1.5px solid rgba(203,172,249,0.6)",
            color: "#CBACF9",
            cursor: "pointer",
            boxShadow:
              "0 0 24px rgba(121,82,226,0.6), 0 4px 12px rgba(0,0,0,0.4)",
            pointerEvents: "auto",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 32px rgba(121,82,226,0.9), 0 4px 16px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 24px rgba(121,82,226,0.6), 0 4px 12px rgba(0,0,0,0.4)";
          }}
        >
          <PiArrowUpBold size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const BackToTop = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || typeof document === "undefined") return null;
  return createPortal(<BackToTopButton />, document.body);
};

export default BackToTop;
