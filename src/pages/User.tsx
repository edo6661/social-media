import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  return (
    <section>
      <article className=" container py-6">
        <div>
          <p>{name}</p>
        </div>
      </article>
    </section>
  );
};

export default User;
