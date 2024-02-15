import { categorys, rootPath } from "@/constant";
import { upperFirst } from "@/helpers";
import { cn } from "@/lib/utils";
import { Pin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarCat = () => {
  const location = useLocation();

  const hovered = "hover:text-primaryCyan transition-all duration-200";

  return categorys?.map((cat) => {
    const currentCat =
      location.pathname.includes(cat) ||
      (location.pathname === "/" && cat === "Home");

    return (
      <div key={cat} className="flex items-center justify-between font-medium">
        <Link
          to={`/category/${cat}`}
          className={cn(hovered, {
            " text-primaryCyan cursor-default ": currentCat,
          })}
        >
          {upperFirst(cat)}
        </Link>
        <button className={`${hovered} text-primaryDarkGray`}>
          <Pin className="" />
        </button>
      </div>
    );
  });
};

export default SidebarCat;
