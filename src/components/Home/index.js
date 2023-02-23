// Write your code here
import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  buttonClicked = () => {
    this.setState(prevState => {
      console.log(prevState.isLogin)
      return {isLogin: !prevState.isLogin}
    })
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="main-container">
        <div className="card">
          {isLogin ? <Message isLogin={isLogin} /> : <h1>Please Login</h1>}
          {isLogin ? (
            <Logout logout={this.buttonClicked} />
          ) : (
            <Login login={this.buttonClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
