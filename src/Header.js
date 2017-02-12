const React = require('react');

let styles = {
  height: 200,
  width: 800,
  // backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid grey'
}

let containerStyles = {
  height: 200,
  width: 800,
  // backgroundColor: 'purple',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

let Header = React.createClass({
  render: function() {
    let greeting = this.props.greeting;
    let name = this.props.name;
    let time = this.props.time;
    return (
      <div style={containerStyles}>
        <h1 style={styles}>Good {greeting} {name}</h1>
      </div>
    )
  }
});

module.exports = Header;
