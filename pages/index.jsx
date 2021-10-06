import {
  HomeCover,
  HomeCarrusel,
  HomeDonate,
  HomeReasons,
} from "../components/home";
import Loading from "../components/loading";
import { API_URL } from "../helpers/constants";

const Home = ({ home }) => {
  return home?.id ? (
    <>
      <HomeCover cover={home.body[0]} />
      <HomeCarrusel carrusel={home.body[1]} />
      <HomeDonate donate={home.body[2]} />
      <HomeReasons reasons={home.body[3]} />
    </>
  ) : (
    <Loading />
  );
};


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/home-page`);
  const home = await res.json();

  if (!home) {
    return {
      notFound: true,
    }
  }

  return {
    props: { home }
  }
}


export default Home;
