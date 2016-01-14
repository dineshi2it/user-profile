var React = require('react');

var HomePage = React.createClass({
    componentDidMount: function() {
      for (var i = 0; i <= 100; i++) {
        var random = Math.floor((Math.random() * 7) + 0);
        var string = "<a href='#/profile' class='col s12 m3 l2 user-profile'><div class='card'><div class='card-image'><img src='images/" + random + ".jpg'></div><div class='card-action'><div class='head'>Card Title</div><div class='sub-head'>This is a link</div></div></div></a>";
        $('#user-profile').append(string);
      }
    },

    render: function() {
        return (
            <div>
                <div className="main-container">
                    <div id="user-profile" className="row">
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;



