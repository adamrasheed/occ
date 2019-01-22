import React from 'react'
import Person from './person'
class Main extends React.Component {
  render() {
    const { people, category } = this.props
    return (
      <div className="people-container">
        <ul className="people-list">
          {category !== `All`
            ? people
                .filter(({ node: { data } }) => {
                  const stringedCategory = JSON.stringify(data.Category)
                    .replace('["', '')
                    .replace('"]', '')
                  return stringedCategory === category
                })
                .map(({ node: { data } }, i) => (
                  <Person
                    key={i}
                    name={data.Name}
                    link={data.Url}
                    categroy={data.Category}
                  />
                ))
            : people.map(({ node: { data } }, i) => (
                <Person
                  key={i}
                  name={data.Name}
                  link={data.Url}
                  categroy={data.Category}
                />
              ))}
        </ul>
      </div>
    )
  }
}

export default Main
