import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react";
import { MdOutlineInsertComment, MdShare } from "react-icons/md";
const ActionsPosts = () => {
  const MockActions = [
    { icon: <ThumbsUp color="cyan" />, label: "316K" },
    { icon: <ThumbsDown />, label: "" },
    { icon: <MdOutlineInsertComment />, label: "Comments" },
    { icon: <Bookmark />, label: "Save" },
  ];
  return (
    <>
      <div className="action">
        {MockActions.map((action, index) => (
          <div key={index}>
            {action.icon}
            <span>{action.label}</span>
          </div>
        ))}
      </div>
      <div>
        <div>
          <MdShare />
          <span>Share</span>
        </div>
      </div>
    </>
  );
};

export default ActionsPosts;
