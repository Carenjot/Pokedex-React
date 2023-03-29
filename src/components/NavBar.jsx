function NavBar(props) {
    return (<nav><button onClick={props.previousPokemon}>Précédent</button>
    <button onClick={props.nextPokemon}>Suivant</button></nav>
    );
};

export default NavBar;