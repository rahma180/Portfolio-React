function Card({image, alt, category, name}){
    return(
        <div className="card-list">
            <img src={image} alt={alt} />
            <h4>{category}</h4>
            <p>{name}</p>
        </div>
    )
}
export default Card