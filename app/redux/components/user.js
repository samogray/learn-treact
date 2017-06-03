import React from 'react'

class User extends React.Component {

  render() {
    const {name, surname, age, country} = this.props
    return (<div>
        <h1>Hello {name} {surname}!</h1>
        <h3><span>You have {age} year</span></h3>
        <h3><span>and you from {country}</span></h3>
      </div>
    )
  }
}

User.propTypes = {
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  country: React.PropTypes.string,
  age: React.PropTypes.number,
}

export default User

