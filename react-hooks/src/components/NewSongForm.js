import React, { useState } from 'react'

function NewSongForm({ addSong }) {
  const [title, setTitle] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form onSubmit={handelSubmit}>
      <label>Song name:</label>
      <input type="text" required onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="submit" value="add song" />
    </form>
  )
}

export default NewSongForm
