import {HomeCover,HomeCarrusel,HomeDonate} from "../components/home";

function Home({home}){
    return (
        <>
            <HomeCover cover={home.body[0]}/>
            <HomeCarrusel carrusel={home.body[1]}/>
            <HomeDonate donate={home.body[2]}/>
        </>
    )
}

export default Home;