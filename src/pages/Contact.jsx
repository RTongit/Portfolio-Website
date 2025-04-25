<<<<<<< HEAD
const myForm ={
    display : "flex",
    flexDirection : "column",
    width : "30%",
    padding : "25px",
    border : "2px solid white",
    margin : "auto",
    borderRadius:"8px",
    marginTop : "20px",
    background: "linear-gradient(135deg,rgb(88, 86, 89),rgb(36, 35, 37))",
}
const inputBox = {
    display : "flex",
    flexDirection : "column",
    rowGap : "10px"
}
const inputStyle = {
    padding:"8px",
    borderRadius:"6px",
}
const textAreaStyle = {
    padding:"8px",
    borderRadius:"6px",
    height : "50px"
}
export default function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
    }
return(
    <div>
        <form action="" style={myForm} onSubmit={handleSubmit}>
            <h1>Contact Me</h1>
            <div style={inputBox}>
            <input type="text" placeholder="Name" style={inputStyle}></input>
            <input type="text" placeholder="Email" style={inputStyle}></input>
            <textarea type="text" placeholder="Message" style={textAreaStyle}></textarea>
            <button type="submit" style={{padding:"8px",backgroundColor:"green",borderRadius:"6px",color:"white"}}> Send</button>
            </div>

        </form>
    </div>
)
=======
export default function Contact() {
    return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatem, provident reprehenderit quos voluptates, dolorem delectus distinctio praesentium nostrum commodi magnam labore qui illum quo cum atque facilis veritatis vero!</p>
>>>>>>> af8d5374ab7da7f902eacd18bd039e960cc00c62
}