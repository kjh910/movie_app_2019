import React from 'react';
import propTypes from "prop-types";

//function component
// function Food({name, numberText, rating}){
//   return <div>
//         <h1>I like {name}</h1>
//         <h1>I Like {numberText}</h1>
//         <h1>my score is {rating}</h1>
//         </div>
// }

// function renderFood(dish){
//   console.log(dish);
//   return <Food key={dish.id} name={dish.name} numberText={dish.numberText} />
// }

// const foodILike = [
//   {
//     id:1,
//     name: "kimchi",
//     numberText: "1",
//     rating:4.8
//   },
//   {
//     id:2,
//     name: "banana",
//     numberText: "2",
//     rating:4.9
//   },
//   {
//     id:3,
//     name: "potato",
//     numberText: "3",
//     rating:4.0
//   }
// ];

// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   numberText: propTypes.string.isRequired,
//   rating: propTypes.number.isRequired
// }


// function App() {
//   return <div>
//           {foodILike.map(dish => (
//             <Food 
//               key={dish.id} 
//               name={dish.name} 
//               numberText={dish.numberText} 
//               rating={dish.rating}/>
//           ))}
//         </div>
//   // return <div>{foodILike.map(renderFood)}</div>
// };

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return <div>
            <h1>This number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
          </div>
  }
}

export default App;
