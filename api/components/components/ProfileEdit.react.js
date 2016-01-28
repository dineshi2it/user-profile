var React = require('react');

var ProfileEdit = React.createClass({
  componentDidMount: function() {
      $('.profile-menu li').click(function() {
          $('.profile-edit li').removeClass("active");
          $('.profile-menu li').removeClass("active");
          $('.profile-edit #' + this.className).addClass("active");
          $('.profile-menu li.' + this.className).addClass("active");
      });
  },

  uploadImage: function(event){
    $('.profile-image input').trigger('click');
  },

  readURL: function(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#profImgCrop').attr('src', e.target.result);
        $('#profImgCrop').cropper({ aspectRatio: 1 / 1 });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  },

   /**
    * TODO: //Proper comments and code clean up
    */
  saveImage: function(event) {
    var cropped = $('#profImgCrop').cropper('getCroppedCanvas');
    // $(".profile-image img").attr('src', cropped.toDataURL());

    var dataURI = cropped.toDataURL();

    // Convert a base64 string into a binary Uint8 Array
    // https://gist.github.com/borismus/1032746
    function convertDataURIToBinary(dataURI) {
      var BASE64_MARKER = ';base64,';
      var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      var base64 = dataURI.substring(base64Index);
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));

      for(i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    }

    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    dataURI = dataURI.substring(base64Index);

    var result = base64js.toByteArray(dataURI);
    console.log("result",result);
    console.log("=========================================");
    console.log("=========decoded=============",base64js.fromByteArray(result));
    $(".profile-image img").attr('src', 'data:image/png;base64,' + base64js.fromByteArray(result));

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/user/update-avatar',
      data: {avatar: JSON.stringify(result)}
    }).done(function (data) {
        console.log("success", data);
    }).fail(function (jqXhr) {
        console.log(jqXhr);
    });
  },

  render: function() {
      return (
          <div>
              <div className="main-container">
                  <div className="row">
                      <div className="col s12 m3 l3">
                          <div className="panel profile-menu">
                              <div className="title-head-hr">Personal settings</div>
                              <li className="aboutMe">About Me</li>
                              <li className="changePassword">Change Password</li>
                              <li className="profilePicture">Profile Picture</li>
                          </div>
                      </div>
                      <div className="col s12 m9 l9 ">
                          <div className="panel profile-edit">
                              <li id="aboutMe" className="active">
                                  <div className="title-head-hr">About Me</div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="first_name" type="text" className="validate"/>
                                          <label for="first_name">First name</label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="last_name" type="text" className="validate"/>
                                          <label for="last_name">Last name</label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="email" type="text" className="validate"/>
                                          <label for="email">Email</label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="email_1" type="text" className="validate"/>
                                          <label for="email_1">Email (optional)</label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="mobile" type="text" className="validate"/>
                                          <label for="mobile">Mobile</label>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="input-field col s12 m6 l6">
                                          <input id="mobile_1" type="text" className="validate"/>
                                          <label for="mobile_1">MObile (optional)</label>
                                      </div>
                                  </div>
                                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                      <i className="material-icons right">send</i>
                                  </button>
                              </li>
                              <li id="changePassword">
                                  <div className="title-head-hr">Change Password</div>
                                  <div className="row">
                                  </div>
                              </li>
                              <li id="profilePicture">
                                  <div className="title-head-hr">Profile Picture</div>
                                  <div className="row">
                                      <div className="col s12 m3 l3 profile-image">
                                          <div className="panel">
                                              <div className="panel-card">
                                                  <div className="panel-content">
                                                      <img src="images/avatar.png"></img>
                                                      <a onClick={this.uploadImage} className="waves-effect btn">Change Picture</a>
                                                      <input className="hide" type="file" onChange={this.readURL} accept="image/*" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div  className="col s12 m9 l9 profile-crop">
                                          <div className="panel">
                                              <div className="panel-card">
                                                  <div className="panel-content">
                                                      <img id="profImgCrop" src="images/avatar.png"></img>
                                                      <a onClick={this.saveImage} className="waves-effect btn">Update Picture</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
});

module.exports = ProfileEdit;
