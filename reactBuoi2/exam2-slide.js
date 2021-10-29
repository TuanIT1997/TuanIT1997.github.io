const Slide = ({img, text, color}) => {
    const firstSlide = (color === "green")? "block" : "none";
    return(
        <div className="mySlides animate-opacity" style={{display: firstSlide}}>
            <img src={img} className="image" 
                style={{minWidth: 500, marginBottom: -8}} />
            <div className="display-left padding hide-small" style={{width: "35%"}}>
                <div className="black opacity hover-opacity-off padding-large round-large">
                    <h1 className={"xlarge "+ text}>Take photos with our app</h1>
                    <hr className="opacity" />
                    <p>Super simple installment: free of charge</p>
                    <p>
                        <button className={"button block " + color + " round"}>
                            {"Download "}
                            <i className="fab fa-apple"></i> {" "}
                            <i className="fas fa-robot"></i> {" "}
                            <i className="fab fa-windows"></i>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
Slide.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}