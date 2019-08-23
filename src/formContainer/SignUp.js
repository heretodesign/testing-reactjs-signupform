import React from 'react'
import axios from 'axios'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }


  handleSubmit = event => {
    event.preventDefault()
    console.log("firstname is : " + this.state.firstname)
    console.log("lastname is : " + this.state.lastname)
    console.log("email  : " + this.state.email)
    const url = "http://localhost:7000/api/posts"
    const formData = new FormData()
    formData.append('firstname', this.state.firstname)
    formData.append('lastname', this.state.lastname)
    formData.append('email', this.state.email)
    formData.append('phonenumber', '')

  axios.post(url,
    {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber
    }
  )
  .then(response => {
    console.log(response)
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
      })
  })
  .catch(err => console.log(err))
  }


  render(){
    return (
      <>
       <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
              <div className="firstsection">
                  <div className="email" id="todoForm">
                    <form id="todo-form" onSubmit={this.handleSubmit}>
                      <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="firstname" placeholder="Add firstname" value={this.state.firstname} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="lastname"  placeholder="Add lastname" value={this.state.lastname} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="email" placeholder="Add Email" value={this.state.email} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="phonenumber" placeholder="Add Phonenumber" value={this.state.phonenumber} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Sign Up</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                  </div>
                  <div className="email">
                    <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Don't Miss Out </p>
                  </div>
               </div>
          </div>
        </section>
      </>
    );
  }
}


export default SignUp;
