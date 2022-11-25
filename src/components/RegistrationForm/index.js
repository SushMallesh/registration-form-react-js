// Write your JS code here
import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    firstName: '',
    showSubmitForm: false,
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  }

  onSubmitUserDetails = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({showSubmitForm: true})
    } else {
      this.setState({
        showSubmitForm: false,
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
      })
    }
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({lastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {value} = event.target
    this.setState({lastName: value})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {value} = event.target
    this.setState({firstName: value})
  }

  onAnotherResponse = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      showSubmitForm: !prevState.showSubmitForm,
    }))
  }

  renderFirstName = () => {
    const {firstNameError, firstName} = this.state
    const errorInputClassName = firstNameError
      ? 'input'
      : `input blur-background`

    return (
      <div className="input-container">
        <label className="label-input" htmlFor="first name">
          FIRST NAME
        </label>
        <input
          value={firstName}
          placeholder="First name"
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          className={errorInputClassName}
          id="first name"
          type="text"
        />
        {firstNameError && <p className="error-msg">Required</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {lastNameError, lastName} = this.state
    const errorInputClassName = lastNameError
      ? 'input'
      : `input blur-background`

    return (
      <div className="input-container">
        <label className="label-input" htmlFor="last name">
          LAST NAME
        </label>
        <input
          value={lastName}
          placeholder="Last name"
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
          className={errorInputClassName}
          id="last name"
          type="text"
        />
        {lastNameError && <p className="error-msg">Required</p>}
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
