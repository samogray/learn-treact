import React from 'react'
import css from './../redux.scss'
import {ButtonToolbar, ButtonGroup, Button, Panel} from 'react-bootstrap'



class Page extends React.Component {
  handleButtonClick = year => {
  }
  
  componentDidMount() {
    this.props.fetchPhotosToSet('2017')
  }
  
  render() {
    console.log(this.props.page)
    return (
      <div>
        <h3><span>you have {} photos from {} year!</span></h3>
        <Panel bsStyle="primary">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={() => this.handleButtonClick(2016)}>2016</Button>
              <Button onClick={() => this.handleButtonClick(2017)}>2017</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Panel>
        
        {/*<Panel header={`В тебе ${photos.length} фото`}>
          <ul className={css.list}>
            {photos.map((item, key) => <li key={key}>
              <img src={require(`./img/${item}`)} alt={key}/>
            </li>)}
          </ul>

        </Panel>*/}
      </div>
    )
  }
}
Page.propTypes = {
  page: React.PropTypes.object
}

export default Page

