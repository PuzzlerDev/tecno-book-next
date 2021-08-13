import {HomeCover} from "../components/home";

function Home({home}){
    const [cover] = home.body;
    
    return (
        <main>
            <HomeCover cover={cover}/>
        </main>
    )
}

export default Home;