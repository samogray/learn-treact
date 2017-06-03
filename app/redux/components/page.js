import React from 'react'
import css from './../redux.scss'
import {ButtonToolbar, ButtonGroup, Button, Panel} from 'react-bootstrap'

class User extends React.Component {
  render() {
    const {photos, year} = this.props
    const onYearBtnClick = (event) => this.props.setYear(+event.target.textContent)

    return (<div>
        <h3><span>you have {} photos from {year} year!</span></h3>
        <Panel bsStyle="primary">
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={onYearBtnClick}>2016</Button>
            <Button onClick={onYearBtnClick}>2017</Button>
          </ButtonGroup>
        </ButtonToolbar>
        </Panel>
        <Panel header="List photos">
          <ul className={css.list}>
            {photos.map((item, key) => <li key={key}>
              <img src={require(`./img/${item}`)} alt={key}/>
            </li>)}
          </ul>
        </Panel>
      </div>
    )
  }
}
User.propTypes = {
  photos: React.PropTypes.array,
  year: React.PropTypes.number,
  setYear: React.PropTypes.func
}

export default User

