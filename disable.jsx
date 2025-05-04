import { useEffect } from "react";

export default function useDisableInspect() {
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault();
    const blockKeyPress = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeyPress);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeyPress);
    };
  }, []);
}
