import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

  const apiKey = 'WQFSCBrFuzxjSLXiPFmaWVhF1WGnoFg3'
  const giphyUrl = (searchTerm, apiKey) => 
  `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

class GifListContainer extends React.Component {

  state = {
    response: {
      data: []
    },
    searchTerm: ''
  }

  searchHandler = (searchTerm) => {
    this.setState({searchTerm: searchTerm})
    console.log(this.state.searchTerm)
  }

  async componentDidMount() {
    const baseUrl = () => giphyUrl(this.state.searchTerm, apiKey);
    await fetch(baseUrl())
      .then((response) => response.json())
      .then(({data}) => this.setState({ response: data }));
  }

  render() {
    return (
      <div>
        <GifSearch searchHandler={this.searchHandler}/>
        <GifList response={this.state.response.data} />
      </div>
    )
  }
}


export default GifListContainer;