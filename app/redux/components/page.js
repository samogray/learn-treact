import React from 'react'
import css from './../redux.scss'
import {ButtonToolbar, ButtonGroup, Button, Panel} from 'react-bootstrap'

class Page extends React.Component {
  render() {
    const {photos, year, fetching} = this.props
    const onYearBtnClick = (event) => this.props.getPhotos(+event.target.textContent)

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
        {fetching ?
          <p>Загрузка...</p> : <Panel header={`В тебе ${photos.length} фото`}>
          <ul className={css.list}>
            {photos.map((item, key) => <li key={key}>
              <img src={require(`./img/${item}`)} alt={key}/>
            </li>)}
          </ul>

        </Panel>
        }
      </div>
    )
  }
}
Page.propTypes = {
  photos: React.PropTypes.array,
  year: React.PropTypes.number,
  getPhotos: React.PropTypes.func
}

export default Page

