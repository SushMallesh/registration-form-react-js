import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    firstName: '',
    showSubmitForm: false,
    lastName: '',
    firstNameErrorMsg: '',
    lastNameErrorMsg: '',
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({
        showSubmitForm: true,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameErrorMsg: 'Required', showSubmitForm: false})
    } else if (lastName === '' && firstName !== '') {
      this.setState({lastNameErrorMsg: 'Required', showSubmitForm: false})
    } else {
      this.setState({
        firstNameErrorMsg: 'Required',
        lastNameErrorMsg: 'Required',
        showSubmitForm: false,
      })
    }
  }

  onChangeLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameErrorMsg: 'Required'})
    } else {
      this.setState({lastName: event.target.value})
    }
  }

  onChangeFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameErrorMsg: 'Required'})
    } else {
      this.setState({firstName: event.target.value})
    }
  }

  onAnotherResponse = () => {
    this.setState({
      showSubmitForm: false,
      firstNameErrorMsg: '',
      lastNameErrorMsg: '',
    })
  }

  renderFirstName = () => {
    const {firstNameErrorMsg, showSubmitForm, firstName} = this.state
    const errorInputClassName =
      firstNameErrorMsg === '' ? 'input' : `input blur-background`

    return (
      <div className="input-container">
        <label className="label-input" htmlFor="first name">
          FIRST NAME
        </label>
        <input
          placeholder="First name"
          onBlur={this.onChangeFirstName}
          className={errorInputClassName}
          id="first name"
          type="text"
        />
        {!showSubmitForm && <p className="error-msg">{firstNameErrorMsg}</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {lastNameErrorMsg, showSubmitForm} = this.state
    const errorInputClassName =
      lastNameErrorMsg === '' ? 'input' : `input blur-background`

    return (
      <div className="input-container">
        <label className="label-input" htmlFor="last name">
          LAST NAME
        </label>
        <input
          placeholder="Last name"
          onBlur={this.onChangeLastName}
          className={errorInputClassName}
          id="last name"
          type="text"
        />
        {!showSubmitForm && <p className="error-msg">{lastNameErrorMsg}</p>}
      </div>
    )
  }

  renderRegistrationForm = () => (
    <>
      {this.renderFirstName()}
      {this.renderLastName()}
      <button className="submit-button" type="submit">
        Submit
      </button>
    </>
  )

  renderRegistrationSuccess = () => (
    <div className="success-container ">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="label-input">Submitted Successfully</p>
      <button
        onClick={this.onAnotherResponse}
        type="button"
        className="submit-button button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {showSubmitForm} = this.state
    return (
      <div className="app-container">
        <form onSubmit={this.onSubmitUserDetails} className="registration-form">
          <h1 className="heading">Registration</h1>
          <div className="user-details-container">
            {!showSubmitForm && this.renderRegistrationForm()}
            {showSubmitForm && this.renderRegistrationSuccess()}
          </div>
        </form>
      </div>
    )
  }
}

export default Registration
