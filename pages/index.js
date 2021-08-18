import {HomeCover,HomeCarrusel} from "../components/home";

function Home({home}){
    return (
        <>
            <HomeCover cover={home.body[0]}/>
            <HomeCarrusel carrusel={home.body[1]}/>
        </>
    )
}

export default Home;