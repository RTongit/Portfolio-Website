import "/src/App.css";
export default function Home() {
  return (
    <>
<main>
      <section className="leftSection">
        <p>
          Hi, My name is Rohan Tamuli and i am passionate FrontEnd
          Developer,currently looking for Frontend based Jobs.
        </p>
        <div className="btnBox">
          <button
            id="btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/file/d/10n4y1yB9_hxS687krEyPYWqiFYwCE6YO/view?usp=drive_link";
              link.download = "Resume.pdf";
              link.click();
              document.getElementById("btn").appendChild(link);
              document.getElementById("btn").removeChild(link);
            }}
          >
            Download Resume
          </button>

          <button>
            <a href="https://github.com/RTongit">Visit Github</a>
          </button>
        </div>
      </section>

      <section className="rightSection">
        <img src="/img/developer.jpg" alt="developer" />
      </section>
    </main>
    {/* Creates a line */}
    <div className="line" />
    </>
    
  );
}
