import React from 'react';

// Components
import Button from '../buttons/button';

// CSS
import './profile.css';

/**
 * The profile page component.
 */
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      avatar: require("./../../img/blank-profile.png")
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.resetFrom = this.resetFrom.bind(this)
    this.changeAvatar = this.changeAvatar.bind(this)
    
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["title"] = "";
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["affiliation"] = "";
      fields["position"] = "";
      fields["email"] = "";
      fields["password"] = "";
      this.setState({fields: fields});
      alert("form submmitted!");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let isValid = true;

    if (!fields["firstname"]) {
      isValid = false;
      errors["firstname"] = "*Please enter your first name.";
    }

    if (!fields["lastname"]) {
      isValid = false;
      errors["lastname"] = "*Please enter your last name.";
    }

    if (!fields["affiliation"]) {
      isValid = false;
      errors["affiliation"] = "*Please enter your affiliation.";
    }

    if (!fields["email"]) {
      isValid = false;
      errors["email"] = "*Please enter your email address.";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if(!fields["firstname"].match(/^[a-zA-Z]*$/)) {
        isValid = false;
        errors["firstname"] = "*Alphabet characters only.";
      }
    }

    if (typeof fields["lastname"] !== "undefined") {
      if(!fields["lastname"].match(/^[a-zA-Z]*$/)) {
        isValid = false;
        errors["lastname"] = "*Alphabet characters only.";
      }
    }

    if (typeof fields["affiliation"] !== "undefined") {
      if(!fields["affiliation"].match(/^[a-zA-Z]*$/)) {
        isValid = false;
        errors["affiliation"] = "*Please enter valid affiliation.";
      }
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(fields["email"])) {
        isValid = false;
        errors["email"] = "*Please enter valid email address.";
      }
    }
    this.setState({ errors: errors });
    return isValid;
  }

  resetFrom() {
    this.setState({
      fields: {},
      errors: {}
    });
  }


  changeAvatar(event) {
    this.setState({avatar: URL.createObjectURL(event.target.files[0])})
  }


  render() {
    return (
      <main className="profile">
        <h1>Profile</h1>
      
      
        <form method = "post" id = "myform" name = "userProfileForm" onSubmit = {this.submitForm}>
          <div className = "whole-form">
          <div className = "form1">

      <div className = "avatar-upload">
        <div className = "avatar-edit" >
          <input 
          type = "file"
          id = "imageUpload"
          accept = ".png, .jpg, .jpeg" 
          onChange = {this.changeAvatar}
          />
          <label className = "fa" htmlFor = "imageUpload"></label>
        </div>
        <img className = "avatar-preview" alt="avatar" src = {this.state.avatar}/>
      </div>
      </div>

      <div className = "form2">
          <input 
          type = "text"
          name = "title"
          placeholder = "Title"
          value = {this.state.fields.title}
          onChange = {this.handleChange}
          />
          <div className = "errorMessage"></div>


          
          <input 
          type = "text" 
          name = "firstname" 
          placeholder = "First name"
          value = {this.state.fields.firstname}
          onChange = {this.handleChange} 
          />
          <label className = "labellength">*</label>
          <div className = "errorMessage">{this.state.errors.firstname}</div>
        
     
          
          <input 
          type = "text"
          name = "lastname"
          placeholder = "Last name"
          value = {this.state.fields.lastname}
          onChange = {this.handleChange}
          />
          <label className = "labellength">*</label>
          <div className = "errorMessage">{this.state.errors.lastname}</div>
         

   
          
          <input 
          type = "text"
          name = "affiliation"
          placeholder = "Affiliation"
          value = {this.state.fields.affiliation}
          onChange = {this.handleChange}
          /> 
          <label className = "labellength">*</label>
          <div className = "errorMessage">{this.state.errors.affiliation}</div>
          

        
          <input 
          type = "text"
          name = "position"
          placeholder = "Position"
          value = {this.state.fields.position}
          onChange = {this.handleChange}
          />
          <div className = "errorMessage"></div>
          

          
          <input 
          type = "text"
          name = "email"
          placeholder = "Email address"
          value = {this.state.fields.email}
          onChange = {this.handleChange}
          />
          <label className = "labellength">*</label>
          <div className = "errorMessage">{this.state.errors.email}</div>
          


          <input
          type = "password"
          name = "password"
          placeholder = "Click to change password"
          value = {this.state.fields.password}
          onChange = {this.handleChange} 
          />
          <div className = "errorMessage"></div>

        </div>



      <div className = "form3">


          <div className = "control-group">
          <label className = "control-label">Do you wish to make your profile visible to other users?</label> 
          <div className = "controls radio-group">
          <label className = "radio-inline">
            <input type = "radio" name = "optradio1" />Yes
          </label> 
          <label className = "radio-inline">
            <input type = "radio" name = "optradio1" />No
          </label>
          </div>
          </div>


      <div className = "control-group g1">
      <label className = "control-label">In the event that others want to publish work which includes CECs identified in your data, do you want to control their permission to do so?</label> 
      <div className = "controls radio-group">
        <label className = "radio-inline">
        <input type = "radio" name = "optradio2" />Yes
        </label> 
        <label className = "radio-inline">
        <input type = "radio" name = "optradio2" />No
        </label>
      </div>
      </div>
      



      <div className = "control-group g1">
      <label className = "control-label">Do you want to receive email updates on CEC alerts?</label> 
      <div className = "controls radio-group">
        <label className = "radio-inline">
        <input type = "radio" name = "optradio3" />Yes
        </label> 
        <label className = "radio-inline">
        <input type = "radio" name = "optradio3" />No
        </label>
      </div>
      </div>
      <div className = "w-100"></div>

      
      <div className = "control-group g1">
      <label className = "control-label">Do you want to receive email notifications when new CECs have been identified in your data?</label> 
      <div className = "controls radio-group">
        <label className = "radio-inline">
        <input type = "radio" name = "optradio4" />Yes
        </label> 
        <label className = "radio-inline">
        <input type = "radio" name = "optradio4" />No
        </label>
      </div>
      </div>

          <label htmlFor="comment">

            <textarea className = "form-control g1" cols = "80" rows = "5" id = "comment"
            placeholder = "Publicly available researcher biography. Note, this is not mandatory but may be useful to start new collaborations.">
            </textarea>
          </label> 


      </div>

      <div className = "form4">
      <Button
          className="button button--small upload__button"
          id="submit"
          type="submit"
          value="Save" />
      <Button
          className="button button--small button--cancel upload__button"
          id="reset"
          type="reset"
          value="Cancel"
          onClick = {this.resetFrom} />
      </div>

      </div>
      </form>
      
      </main>
    );
  }


}
export default Profile;
