import React, { useState } from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm, this.props.searchHandler)
    this.props.searchHandler(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => {
              this.setState({searchTerm: e.target.value})
              console.log(this.state.searchTerm)}}
            type='text'
            name='searchTerm'
            id='searchTerm'
            value={this.state.searchTerm}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
  
};

export default GifSearch