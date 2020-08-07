import React, { useState } from 'react'

const GifSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchHandler(searchTerm);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type='text'
          name='searchTerm'
          id='searchTerm'
          value={searchTerm}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default GifSearch