const React = require('react');

let styles = {
  height: 100,
  width: 300,
  // backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

let containerStyles = {
  height: 300,
  width: 800,
  // backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

let Place = React.createClass({

  render: function() {
    let food = this.props.food;
    return (
    <div style={containerStyles}>
      <section style={styles}>
        <h2>{food}?</h2>
      </section>
    </div>
  )
  }
})

module.exports = Place;
