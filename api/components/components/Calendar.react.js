var React = require('react');

var Calendar = React.createClass({
    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {
        initCalendar();
    },

    render: function() {
        return (
            <div>
                <div className="main-container">
                    <div className="row">
                        <div className="col l12">
                            <div className="custom-calendar-wrap">
                                <div id="custom-inner" className="custom-inner">
                                    <div className="custom-header clearfix">
                                        <div className="header-content">
                                            <span id="custom-prev" className="custom-prev"></span>
                                            <span id="custom-next" className="custom-next"></span>
                                        </div>
                                        <div id="custom-month" className="custom-month"></div>
                                        <div id="custom-year" className="custom-year"></div>
                                    </div>
                                    <div id="calendar" className="fc-calendar-container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calendar;
