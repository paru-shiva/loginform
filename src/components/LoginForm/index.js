// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginStatus: 'Login'}

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  checkTheData = async () => {
    const {history} = this.props

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    response.ok
      ? history.replace('/')
      : this.setState({loginStatus: 'Login Error'})
  }

  onLogin = event => {
    event.preventDefault()
    this.checkTheData()
  }

  render() {
    const {username, password, loginStatus} = this.state
    const paraContent =
      loginStatus === 'Login' ? '' : "*Username and Password didn't match"
    return (
      <div className="loginComp">
        <div className="mobileComp">
          <h1>{loginStatus}</h1>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="loginImg"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form onSubmit={this.onLogin} className="form">
            <label htmlFor="username">USERNAME</label>
            <input
              onChange={this.onUsernameInput}
              className="inputEl"
              placeholder="Username"
              id="username"
              type="text"
              value={username}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              onChange={this.onPasswordInput}
              className="inputEl"
              placeholder="Password"
              id="password"
              type="password"
              value={password}
            />
            <button className="submitBtn" type="submit">
              Login
            </button>
            <p>{paraContent}</p>
          </form>
        </div>

        <div className="desktopComp">
          <img
            className="loginImg2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <div className="loginPart2">
            <h1>{loginStatus}</h1>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <form onSubmit={this.onLogin} className="form">
              <label htmlFor="username">USERNAME</label>
              <input
                onChange={this.onUsernameInput}
                className="inputEl"
                placeholder="Username"
                id="username"
                type="text"
                value={username}
              />
              <label htmlFor="password">PASSWORD</label>
              <input
                onChange={this.onPasswordInput}
                className="inputEl"
                placeholder="Password"
                id="password"
                type="password"
                value={password}
              />
              <button className="submitBtn" type="submit">
                Login
              </button>
              <p>{paraContent}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
