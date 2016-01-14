var React = require('react');

var ProfilePage = React.createClass({
    componentDidMount: function() {
      $('.skillbar').each(function() {
        $(this).appear(function() {
          $(this).find('.count-bar').animate({
            width:$(this).attr('data-percent')
          },3000);
          var percent = $(this).attr('data-percent');
          $(this).find('.count').html('<span>' + percent + '</span>');
        });
      });
    },

    render: function() {
        return (
            <div>
                <div className="main-container">
                  <div>
                    <div className="row">
                        <div className="col s12 m4 l3 profile-side-bar">
                            <div className="panel">
                                <div className="panel-card">
                                    <div className="panel-content">
                                        <img src="images/3.jpg"></img>
                                        <div className="title">User Name S</div>
                                        <div className="sub-title">I am designing something.</div>
                                        <div className="sub-title">ID 62358</div>
                                        <a className="waves-effect btn">Edit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 social-icon-set center">
                                    <i className="mdi mdi-github-box mdi-24px"></i>
                                    <i className="mdi mdi-linkedin mdi-24px"></i>
                                    <i className="mdi mdi-google mdi-24px"></i>
                                    <i className="mdi mdi-facebook mdi-24px"></i>
                                    <i className="mdi mdi-twitter mdi-24px"></i>
                                </div>
                            </div>
                            <div className="row hide-on-med-and-down">
                                <div className="col m12 s12">
                                    <div className="panel">
                                        <div className="title-head-hr">
                                            Head
                                        </div>
                                        <div>
                                            content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m8 l9">
                            <div className="row">
                                <div className="col s12 m4 l4 mx840">
                                    <div className="panel orange">
                                        <div className="title-head-hr">Current Project</div>
                                        Test Project
                                    </div>
                                </div>
                                <div className="col s12 m4 l4 mx840">
                                    <div className="panel purple">
                                        <div className="title-head-hr">Primary Email</div>
                                        testuser@user.com
                                    </div>
                                </div>
                                <div className="col s12 m4 l4 mx840">
                                    <div className="panel light-blue">
                                        <div className="title-head-hr">Primary Contact</div>
                                        +91 9898989898
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 l12 no-space-col">
                                    <div className="col s12 m6 l6 mx840 skill-set">
                                        <div className="panel-light">
                                            <div className="title-head-hr">About Me</div>
                                            BENJAMIN THOMSON WEB & UX DESIGNER
                                            <br></br>
                                            <br></br> Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque latu dantium, totam rem aperiam, eaque ipsa quae ab illo tempor dignissim at.
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l6 mx840 skill-set">
                                        <div className="panel-light">
                                            <div className="title-head-hr">Skills</div>
                                            <div className="skillset">
                                                <div className="skillst6">
                                                    <div className="skillbar" data-percent="65%">
                                                        <div className="title">HTML 5</div>
                                                        <div className="count-bar color-1">
                                                            <div className="count"></div>
                                                        </div>
                                                    </div>
                                                    <div className="skillbar" data-percent="79%">
                                                        <div className="title">CSS 3</div>
                                                        <div className="count-bar color-2">
                                                            <div className="count"></div>
                                                        </div>
                                                    </div>
                                                    <div className="skillbar" data-percent="95%">
                                                        <div className="title">jQuery</div>
                                                        <div className="count-bar color-3">
                                                            <div className="count"></div>
                                                        </div>
                                                    </div>
                                                    <div className="skillbar" data-percent="70%">
                                                        <div className="title">PHP</div>
                                                        <div className="count-bar color-4">
                                                            <div className="count"></div>
                                                        </div>
                                                    </div>
                                                    <div className="skillbar" data-percent="70%">
                                                        <div className="title">SEO</div>
                                                        <div className="count-bar color-5">
                                                            <div className="count"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="tab-panel col s12 m12 l12">
                                    <div className="col s12 m12 l12">
                                        <ul className="tabs">
                                            <li className="tab col s3">
                                                <a className="active" href="#experience">Experience</a>
                                            </li>
                                            <li className="tab col s3">
                                                <a href="#education">Education</a>
                                            </li>
                                            <li className="tab col s3">
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="experience" className="col s12 m12 l12 tab-content">
                                        <div className="title">4 Years Experience</div>
                                        <div className="row experience-container">
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    <div className="head">2015 - Current</div>
                                                    <div className="body">Ideas2It</div>
                                                </div>
                                            </div>
                                            <div className="col s12 m7 l8 right-dashed">
                                                <div className="content">
                                                    <span>SENIOR WEB & UX DESIGNER</span>
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                </div>
                                                <div className="marker hide-on-small-and-down">0.6</div>
                                            </div>
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    <div className="head">2015 - 2015</div>
                                                    <div className="body">Ideas2It</div>
                                                </div>
                                            </div>
                                            <div className="col s12 m7 l8 right-dashed">
                                                <div className="content">
                                                    <span>SENIOR WEB & UX DESIGNER</span>
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                </div>
                                                <div className="marker hide-on-small-and-down">1.5</div>
                                            </div>
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    <div className="head">2015 - 2015</div>
                                                    <div className="body">Ideas2It</div>
                                                </div>
                                            </div>
                                            <div className="col s12 m7 l8 right-dashed-final">
                                                <div className="content">
                                                    <span>SENIOR WEB & UX DESIGNER</span>
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                </div>
                                                <div className="marker hide-on-small-and-down">3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="education" className="col s12 m12 l12 tab-content">
                                        <div className="title">Educational Value</div>
                                        <div className="row education-container">
                                            <div className="col s12 m7 l8 right-dashed">
                                                <div className="content purple">
                                                    <span>UNIVERSITY OF DESIGN</span>
                                                    <div>MASTER DEGREE OF DESIGN</div>
                                                </div>
                                                <div className="marker hide-on-small-and-down"></div>
                                            </div>
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    2015 - 2016
                                                </div>
                                            </div>
                                            <div className="col s12 m7 l8 right-dashed">
                                                <div className="content yellow">
                                                    <span>UNIVERSITY OF DESIGN</span>
                                                    <div>MASTER DEGREE OF DESIGN</div>
                                                </div>
                                                <div className="marker hide-on-small-and-down"></div>
                                            </div>
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    2015 - 2016
                                                </div>
                                            </div>
                                            <div className="col s12 m7 l8 right-dashed-final">
                                                <div className="content green">
                                                    <span>UNIVERSITY OF DESIGN</span>
                                                    <div>MASTER DEGREE OF DESIGN</div>
                                                </div>
                                                <div className="marker hide-on-small-and-down"></div>
                                            </div>
                                            <div className="col s12 m5 l4">
                                                <div className="year">
                                                    2015 - 2016
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="contact" className="col s12 m12 l12 tab-content">
                                        <div className="title">Contact Address</div>
                                        <div className="row">
                                            <div className="col s12 m6 l6">
                                                <ul className="personal-info-list">
                                                    <li>
                                                        DOB : 26th Jan
                                                    </li>
                                                    <li>
                                                        Email : test@domain.com
                                                    </li>
                                                    <li>
                                                        Mobile : +91 9898989898
                                                    </li>
                                                    <li>
                                                        Blood Group : B+
                                                    </li>
                                                    <li>
                                                        Address : Via Alfredo Fusco, 5 26020-Acquanegra, Cremonese CR
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col s12 m6 l6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = ProfilePage;
