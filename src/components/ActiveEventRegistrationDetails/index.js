// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  showYetToRegisterPage = () => (
    <div>
      <img
        className="img-s"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register here</button>
    </div>
  )

  showRegisteredPage = () => (
    <div>
      <img
        className="img-s"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h4>You have already registered for the event</h4>
    </div>
  )

  showClosed = () => (
    <div>
      <img
        className="img-s"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  render() {
    const {data} = this.props
    const dat = data.toLowerCase()
    switch (dat) {
      case 'yet_to_register':
        return this.showYetToRegisterPage()
      case 'registered':
        return this.showRegisteredPage()
      case 'registrations_closed':
        return this.showClosed()
      default:
        return (
          <div>
            <p>Click on an event, to view its registration details</p>
          </div>
        )
    }
  }
}
export default ActiveEventRegistrationDetails
