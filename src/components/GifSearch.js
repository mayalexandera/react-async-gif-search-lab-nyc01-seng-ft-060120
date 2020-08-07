import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => {
              this.setState({searchTerm: e.target.value})}}
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