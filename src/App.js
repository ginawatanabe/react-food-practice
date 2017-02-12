import React from 'react';
import './App.css';
let Header = require('./Header');
let Place = require('./Place');
let Go = require('./Go');
let TimeVisual = require('./TimeVisual');

const today = new Date();
const time = today.getHours();

let breakfast = ["Small Coffee", "Everything Bagel", "Bacon and Eggs", "Steak and Eggs", "Soup and Rice", "McDonalds", "Toast", "Pastry", "Quesadilla", "Breakfast Burrito"];
let lunch = ["Pizza", "Burger", "Noodles", "Sushi", "BBQ Chicken", "Ramen", "Pho", "Spicy Ahi", "Manapua", "Mix Plate"];
let dinner = ["Pizza", "Burger", "Noodles", "Sushi", "BBQ Chicken", "Ramen", "Pho", "Spicy Ahi", "Manapua", "Mix Plate"];
let database = [breakfast, lunch, dinner];

let name = prompt("What is your name?");

let App = React.createClass({
  getInitialState: function() {
    return {
      name: " " + name,
      food: ' '
    }
  },

  getMeal: function() {
    let meal;

    if (time<10) {
      meal=0;
    }
    else if ((time > 10) && (time < 16)) {
      meal=1;
    }
    else {
      meal=2;
    }

    return meal
  },

  pickPlace: function() {
    let foodNum = Math.round(Math.random()*9);
    let mealNum = this.getMeal();
    let mealTime = database[mealNum];
    console.log(mealNum);
    let food = mealTime[foodNum];
    console.log(food);
    return food
  },

  pickGreeting: function() {
    let mealNum = this.getMeal();
    if (mealNum === 0) {
      return 'Morning'
    }
    else if (mealNum === 1) {
      return 'Afternoon'
    }
    else {
      return 'Evening'
    }
  },

  updateFood: function (newFood) {
    console.log(newFood);
    this.setState({
      food: newFood()
    })
  },

  render: function() {
      return (
      <div>
        <Header name={this.state.name} greeting={this.pickGreeting()} />
        <TimeVisual />
        <Place food={this.state.food} />
        <Go onChange={this.updateFood} rand={this.pickPlace} />
      </div>
    )
  }
})


export default App;
