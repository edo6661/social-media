import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  return (
    <section>
      <article className=" container py-6">
        <div>
          <p>{query}</p>
        </div>
      </article>
    </section>
  );
};

export default Search;
