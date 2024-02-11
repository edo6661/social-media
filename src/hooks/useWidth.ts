import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // ! clean up function ini tujuannya biar event listener tidak terus-terusan numpuk, jadi ketika component di unmount, event listener di remove, tidak mempengaruhi component lain, tidak membebani memory dan performance, ga terjadi memory leak,
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
