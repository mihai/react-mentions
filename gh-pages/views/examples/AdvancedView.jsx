var React = require("react");
var ReactMentions = require("react-mentions");

var MentionsMixin = require("../mixins/MentionsMixin");


var MentionsInput = ReactMentions.MentionsInput;
var Mention = ReactMentions.Mention;


module.exports = React.createClass({

  displayName: "Advanced",

  mixins: [ MentionsMixin ],

  getInitialState: function() {
    return {
      value: "Hi {{johndoe}}!"
    };
  },

  render: function() {
    return (
      <div className="advanced">
        <h3>Advanced options</h3>

        <MentionsInput
          value={this.state.value}
          onChange={this.handleChange}
          markup="{{__id__}}"
          displayTransform={this.transformDisplay}>

          <Mention data={ this.props.data } onAdd={this.handleAddMention} />
        </MentionsInput>
      </div>
    );
  },

  transformDisplay: function(id) {
    return "<-- " + id + " -->";
  },

  handleAddMention: function (id, display) {
    console.log("Added mention of " + id);
  }

});
