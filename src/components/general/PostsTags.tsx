import { MockTags } from "@/constant";

const PostsTags = () => {
  return MockTags.map((tag) => (
    <button
      key={tag}
      className="border border-primaryOrange px-4 py-2 rounded-2xl text-sm"
    >
      {tag}
    </button>
  ));
};

export default PostsTags;
