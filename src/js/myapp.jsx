var React = require("react");
var ReactDOM = require("react-dom");

function MyAppView() {
  this.AppView = React.createClass({
    render: function () {
      return (
        <div>
          <p>MyAppView</p>
        </div>
      );
    }
  });
}

MyAppView.prototype.init = function () {
  ReactDOM.render(<this.AppView />, document.getElementById('content'));
};

exports.view = MyAppView;