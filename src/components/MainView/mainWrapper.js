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

    // target.classList.add('active')
    // const siblings = []
    // const parent = target.parentNode
    // parent.childNodes.forEach(sibling => {
    //   if (sibling !== target) {
    //     siblings.push(sibling)
    //   }
    // })
    // siblings.forEach(sibling => sibling.classList.remove('active'))

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
