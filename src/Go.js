const React = require('react');

let styles = {
  height: 80,
  width: 80,
  // backgroundColor: 'brown',
  borderRadius: 200,
  fontSize: 30,
  fontFamily: "Barrio, cursive",
  outline: 'none'
}

let containerStyles = {
  height: 100,
  width: 800,
  // backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

let Go = React.createClass({
  handleChange: function() {
    let food = this.props.rand;
    this.props.onChange(food);
  },

  render: function() {
    return (
      <div style={containerStyles}>
        <button style={styles} onClick={this.handleChange} >Go</button>
      </div>
    )
  }
})

module.exports = Go;
