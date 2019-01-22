import React from 'react'
import Main from './main'
import Selectors from './selectors'
import './main.css'
class MainWrapper extends React.Component {
  state = {
    category: null,
  }

  setActiveCategory = ({ target }) => {
    const category = target.value
    this.setState({ category })
  }

  componentDidMount() {
    this.setState({
      category: `All`,
    })
  }

  render() {
    const { people } = this.props
    return (
      <div className="main-wrapper">
        <Selectors
          setActiveCategory={this.setActiveCategory}
          activeCategory={this.state.category}
        />
        <Main people={people} category={this.state.category} />
      </div>
    )
  }
}

export default MainWrapper
