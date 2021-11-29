//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.
class Pokemon extends Component{
  render(){
    const {pokemon,id} = this.props;
    return <div className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">
                <img src={`/public/sprites/${id}.png`} />
              </div>
              <div className="pokemon--species--name"> {pokemon.name} </div>
            </div>
          </div>;
    }
}
