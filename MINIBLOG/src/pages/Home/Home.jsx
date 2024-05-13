//CSS
import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuents } from "../../hooks/useFetchDocuments.jsx";

//components
import PostDetail from "../../components/PostDetail.jsx";

const Home = () => {
  const [query, setQuerry] = useState("");
  const { documents: posts, loading } = useFetchDocuents("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  };
  return (
    <div className={styles.home}>
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setQuerry(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
