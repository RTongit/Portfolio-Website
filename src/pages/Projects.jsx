import "/src/App.css";
export default function Projects() {
    const navStyle={
     display : "flex",
     flexDirection : "column",
    //  backgroundColor:"red"
    }

    return(
        <nav className="navStyle">
            <h2>List of Project Names : </h2>
        <a href="https://github.com/RTongit/WeatherApp.git" className="projectLink" target="blanck">Weather App</a>
        <a href="https://github.com/RTongit/MusicPlayer.git" className="projectLink" target="blanck">Music Player</a>
        <a href="#" className="projectLink" target="blanck">Portfolio Website</a>
        </nav>
    )
}