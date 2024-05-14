import style from './Search.module.css'

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments.jsx";
import { useQuery } from "../../hooks/useQuery.jsx";

//components
import PostDetail from "../../components/PostDetail.jsx";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);
  return (
    <div className={style.search_container}>
      <h2>Search</h2>
      {posts && posts.length === 0 && (
        <div className={style.noposts}>
          <p>Não foram encontrados posts a partir de sua busca...</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
