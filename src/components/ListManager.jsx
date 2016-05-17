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
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }

});

module.exports = ListManager;
