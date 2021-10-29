const data = {
    pokemons: [
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png>"
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png>"
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png>"
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png>"
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png>"
      }
    ]
};
const pokemons = data.pokemons;
const Exam1 = ({pokemons}) => {
  return(
    <div 
      className="container border center content"
      style={{maxWidth: 800}}
    >
      <h3 className="text-grey">
        <b>Pokedex</b>
      </h3>
      {
        pokemons.map( pokemon => 
          <Card key={pokemon.id} {...pokemon}/>
        )
      }
    </div>
  )
}
Exam1.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
}
ReactDOM.render(
  <Exam1 pokemons={pokemons}/>,
  document.getElementById('demo1')
)