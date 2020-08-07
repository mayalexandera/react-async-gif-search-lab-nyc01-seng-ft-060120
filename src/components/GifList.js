import React from 'react'

class GifList extends React.Component {

  renderedGifs = () => {
    return this.props.response.map(gif => {
      return <li>
        <img src={gif.images.original.url} alt='' />
      </li>
     })
  }

  render() {
    console.log(this.props)
    return (
      <ul>{this.renderedGifs}</ul>
    )
  }
}

export default GifList;