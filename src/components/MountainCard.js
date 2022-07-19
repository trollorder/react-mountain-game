import "../App.css"

function MountainCard(props) {
    return (
      <div className="mountain-card">
        <h3>{props.mountain}</h3>
        <div className="card">
            <img src={require('./mountains/' + props.imgLink)}  alt="Mountain"/>
        </div>
        <h3>Location: {props.location}</h3>
      </div>
    );
  }
  
  export default MountainCard;