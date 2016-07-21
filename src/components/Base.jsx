let React = require('react')

let Base = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render: function () {
    return (
      <div>
        <h1>Header</h1>
        <div>
          {this.props.children}
        </div>
        <h1>Footer</h1>
      </div>
    )
  }
})

module.exports = Base
