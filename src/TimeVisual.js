const React = require('react');

const today = new Date();
const time = today.getHours() + "." + today.getMinutes();

let base = 400;
let position = Number(base)+(30*Number(time));
console.log(position);
if (time ===24) {
  position = 400; 
}


let styles = {
  height: 200,
  width: 800,
  // backgroundColor: 'pink',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

let planet = {
  height: 50,
  width: 50,
  borderRadius: 200,
  backgroundColor: 'rgb(40,50,100)',
  position: 'absolute',
  left: position
}

let TimeVisual = React.createClass({
  render: function() {
    return (
      <div>
        <h3 style={styles}><div style={planet}></div></h3>
      </div>
    )
  }
})

module.exports = TimeVisual;
