const CardComponent = (props) => {

    const restraunt = props.restraunt;
    const {img,name,Cusine,starts} = restraunt;
  return (
    <div id="card">
      <div>
      <span>
      <img src={img} id="img"/>
      <h4>{name}</h4>
      </span>
      </div>
      <h3>{Cusine}</h3>
      <h4>{starts}</h4>
    </div>
);
};

  export default CardComponent;

  //what is this default ? is homework



