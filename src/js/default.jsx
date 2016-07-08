var React = require("react");
var ReactDOM = require("react-dom");

function DefaultView() {
  this.AppView = React.createClass({
    render: function () {
      return (
        <div>
          <p>Hello, World</p>
        </div>
      );
    }
  });
}

DefaultView.prototype.init = function () {
  ReactDOM.render(<this.AppView />, document.getElementById('content'));
};

exports.view = DefaultView;