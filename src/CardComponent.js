import { useContext } from "react";
import ThemeContext from "./ThemeContext";
// const CardComponent = (props) => {

//     const restraunt = props.restraunt;
//     const {img,name,Cusine,starts} = restraunt;
//   return (
//     <div id="card">
//       <div>
//       <span>
//       <img src={img} id="img"/>
//       <h4>{name}</h4>
//       </span>
//       </div>
//       <h3>{Cusine}</h3>
//       <h4>{starts}</h4>
//     </div>
// );
// };

//   export default CardComponent;

  //what is this default ? is homework


export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const CardComponent = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {

  const {theme , setTheme} = useContext(ThemeContext)

  return (
    <div id="card" style={{
      backgroundColor : theme === "light" ? "#fff" : "#000",
    }}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="cusines">{cuisines.join(" ")}</h3>
      <h4 className="distance">{lastMileTravelString}</h4>
    </div>
  );
};

export default CardComponent;



