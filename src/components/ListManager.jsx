var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

  //getInitialState is called by the browser only once at the beginning
  getInitialState: function(){
    return {items:[], newItemText:''};
  },

  //onChange cutom function
  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },

  //custom function
  handleSubmit: function(e){
    e.preventDefault(); //prevent default function

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});
  },

  render: function(){

    var divStyle = {
      marginTop: 10
    };

    var headingStyle={

    };

    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
          <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              </div>
              <div className="col-sm-2">
              <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }

});

module.exports = ListManager;
