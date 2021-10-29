const Card = ({name,type,image}) =>{
    let srcLink = image.slice(1, image.length-1)
    return(
      <div className="section inline-block">
        <div 
          className="light-grey padding-16 round-large" 
          style={{width: 200}}
        >
          <h3 className="text-blue">{name}</h3>
          <img src={srcLink} alt={name}/>
          <p>
            <b>type: {type}</b>
          </p>
        </div>
      </div>
    )
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}