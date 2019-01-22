import React from 'react'
class Footer extends React.Component {
  render() {
    const { name, twitterName, referralLink } = this.props
    return (
      <footer className="footer">
        Created by{' '}
        <a
          href={`https://twitter.com/${twitterName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        . Data provided by{' '}
        <a href={referralLink} target="_blank" rel="noopener noreferrer">
          Airtable
        </a>
      </footer>
    )
  }
}

export default Footer
