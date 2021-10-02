import {
  HomeCover,
  HomeCarrusel,
  HomeDonate,
  HomeReasons,
} from "../components/home";
import Loading from "../components/loading";

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

export default Home;
