// Include React
var React = require("react");

var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({
  handleSave: function(event){
    helpers.postSaved(article).then(function(response){
      console.log("Saved article");
    }.bind(this));
  },
  //Render the function
  render: function() {
    return (
      <div className="panel card z-depth-4 center-align">
        <h3 className="panelTitle">Results</h3>
        
        <div className="resultBox">
          {/* Here we use a map function to loop through an array in JSX */}
            {this.props.results.map(function(search, i) {
                return (
                  <li key={search._id}>
                    <strong><a href={search.web_url} className="left-align" target="_blank">{search.title}</a></strong>
                      <i> {search.date.substring(0,10)}</i>
                    <span>
                      <button className="waves-effect waves-light btn right-align" onClick={this.handleSave} value={search._id}>Save</button>
                    </span>
                  </li>
                );
              })}
          <h5 className="left-align">{this.props.results}</h5>
          <button className="waves-effect waves-light btn right-align">Save</button>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;