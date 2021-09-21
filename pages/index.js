import {HomeCover,HomeCarrusel,HomeDonate,HomeReasons} from "../components/home";

const Home = ({home}) => {
    return (
        <>
            <HomeCover cover={home.body[0]}/>
            <HomeCarrusel carrusel={home.body[1]}/>
            <HomeDonate donate={home.body[2]}/>
            <HomeReasons reasons={home.body[3]}/>
        </>
    )
}

export default Home;