import "/src/App.css";
export default function Projects() {
    const navStyle={
     display : "flex",
     flexDirection : "column",
    
    }

    return(
        <nav style={navStyle}>
            <h2>List of Project Names : </h2>
        <a href="https://github.com/RTongit/WeatherApp.git" className="projectLink" target="_blank">Weather App</a>
        <a href="https://github.com/RTongit/MusicPlayer.git" className="projectLink" target="_blank">Music Player</a>
        <a href="https://github.com/RTongit/Portfolio-Website.git" className="projectLink" target="_blank">Portfolio Website</a>
        </nav>
    )
}
