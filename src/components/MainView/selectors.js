import React from 'react'

const categories = [
  'UI/UX Design',
  `Graphic Design`,
  `Illustration`,
  `Photography`,
  `Front-end Development`,
  `Full-stack Development`,
  `Copywriting`,
]

class Selectors extends React.Component {
  buttonClass = ({ target }) => {
    return `button`
  }

  componentDidMount() {
    console.log(this.props.activeCategory)
  }
  render() {
    const { setActiveCategory, activeCategory } = this.props
    console.log(this.props)
    return (
      <div className="selector-container">
        <button
          key="0"
          className={`button ${activeCategory === `All` ? `active` : null}`}
          value="All"
          onClick={setActiveCategory}
        >
          All
        </button>
        {categories.map((category, i) => (
          <button
            className={`button ${
              activeCategory === category ? `active` : null
            }`}
            value={category}
            key={i}
            onClick={setActiveCategory}
          >
            {category}
          </button>
        ))}
      </div>
    )
  }
}

export default Selectors
