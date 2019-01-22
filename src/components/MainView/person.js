import React from 'react'
class Person extends React.Component {
  render() {
    const { name, link } = this.props
    return (
      <li className="person">
        {link ? (
          <a
            href={link}
            target="_blank"
            className="person__link"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        ) : (
          `${name}`
        )}
      </li>
    )
  }
}

export default Person
