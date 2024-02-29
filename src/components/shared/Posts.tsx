import "@/styles/posts.scss";
import SidebarCat from "../general/SidebarCat";
import PostsMenu from "../general/PostsMenu";
import SidebarTags from "../general/SidebarTags";
import MenuActions from "../general/MenuActions";
import PostsCard from "../general/PostsCard";

const Posts = () => {
  return (
    <section className="wrapper-posts">
      <div className="wrapper-content">
        <article className=" container-sidecat ">
          <MenuActions />
          <SidebarCat />
        </article>
        <article className=" container-post">
          <div className="container-menu ">
            <PostsMenu />
          </div>
          <div className="space-y-4">
            <PostsCard />
          </div>
        </article>
        <article className="container-tags">
          <SidebarTags />
        </article>
      </div>
    </section>
  );
};

export default Posts;
