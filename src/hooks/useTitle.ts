import { useEffect } from "react";

export default function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    // ! clean up function ini tujuannya biar event listener tidak terus-terusan numpuk, jadi ketika component di unmount, event listener di remove, tidak mempengaruhi component lain, tidak membebani memory dan performance, ga terjadi memory leak.
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
