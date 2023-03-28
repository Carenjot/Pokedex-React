function PokemonCard(props) {
  console.log(props);
    return (
      <figure className="card">
        {props.imgSrc === undefined ? <p>???</p> : <img
    src={props.imgSrc}
    alt={props.name}
    className="card-img"
  />}
        <figcaption>{props.name}</figcaption>
      </figure>
    );
  }

export default PokemonCard;