const data2 = [
    {
        id: 1,
        img: "https://www.w3schools.com/w3images/app.jpg",
        text: "",
        color: "green"
    },
    {
        id: 2,
        img: "https://www.w3schools.com/w3images/app2.jpg",
        text: "text-red",
        color: "red"
    },
    {
        id: 3,
        img: "https://www.w3schools.com/w3images/app4.jpg",
        text: "",
        color: "indigo"
    }
]
function controlSlides(){
    let elSlide = document.getElementsByClassName("mySlides");
    let pos = -1;
    for (let i = 0; i < elSlide.length; i++) {
        if (elSlide[i].style.display === "block"){
            pos = i;
        }
        elSlide[i].style.display = "none";
    }
    pos++;
    pos = (pos+3) % 3;
    elSlide[pos].style.display = "block";
}
const Exam2 = ({slideList}) => {
    return(
        <div    
            className="display-container center"
        >
            <button className="button block green hide-large hide-medium">
                {"Download "}
                <i className="fab fa-apple"></i> {" "}
                <i className="fas fa-robot"></i> {" "}
                <i className="fab fa-windows"></i>
            </button>
            {slideList.map( m => {
                return(
                    <Slide key={m.id} {...m} />
                )
            })}
            <button 
                onClick = {controlSlides}
                className="button black display-right margin-right round hide-small hover-light-grey">
                {"Take Tour "}
                <i className="fas fa-angle-right"></i>
            </button>
            <button 
                onClick = {controlSlides}
                className="button block black hide-large hide-medium">
                {"Take Tour "}
                <i className="fas fa-angle-right"></i>
            </button>
        </div>
    )
}
Exam2.propTypes = {
    slideList: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
}
ReactDOM.render(
    <Exam2 slideList={data2}/>,
    document.getElementById('demo2')
)