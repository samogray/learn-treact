import React from 'react'
import css from './../redux.scss'
import { ButtonToolbar, ButtonGroup, Button, Panel } from 'react-bootstrap'
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_DATA, DELETE_IMAGE } from './../constans/page'

class Page extends React.Component {

  state = {
    selectedYear: null
  }

  getFilteredData = year => {
    return year ? this.props.data.filter(item => item.year === year) : this.props.data
  }

  onYearBtnClick = year => {
    this.setState(() => {
      return { selectedYear: year }
    })
  }

  countPhotos = data => {
    let count = data.map((item) => item.photos.length)
    return count.reduce((sum, item) => sum + item, 0)
  }

  onClick = (action) => {
    const {deleteImage} = this.props
  
    deleteImage(action)
  }

  render() {
    const yearsButton = this.props.data.map(item => item.year)
    const photoData = this.getFilteredData(this.state.selectedYear)
    
    return (<div>
      <h3><span>Увас всього  {this.countPhotos(this.props.data)} фото</span></h3>
      <Panel bsStyle="primary">
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => this.onYearBtnClick(null)} disabled={!this.state.selectedYear}>Усі фото</Button>
            {yearsButton.map((year, key) => <Button onClick={() => this.onYearBtnClick(year)}
              key={key}>{year}</Button>)}
          </ButtonGroup>
        </ButtonToolbar>
      </Panel>
      {photoData.map((item, key) => <Panel
        header={item.photos.length === 0 ? `у вас немає фото за ${item.year}` :
          `${item.photos.length} Фото за ${item.year} `} key={key}>
        <ul className={css.list}>
          {item.photos.map((photo, key) => <li key={key}>
            <button onClick={() => this.onClick({year: item.year, index: key})}>Delete</button>
            <img src={require(`./img/${photo}`)} alt={key} />
          </li>)}
        </ul>
      </Panel>)}
    </div>
    )
  }
}
Page.propTypes = {
  data: React.PropTypes.array
}

export default Page

