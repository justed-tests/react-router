let React = require('react')
let ReactRouter = require('react-router')

let Router = ReactRouter.Router
let Route = ReactRouter.Route
let history = ReactRouter.hashHistory

let Base = require('./components/Base.jsx')
let Page1 = require('./components/Page1.jsx')
let Page2 = require('./components/Page2.jsx')

let Routes = (
  <Router history={history}>
    <Route path="/" component={Base}>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Route>
  </Router>
)

module.exports = Routes
