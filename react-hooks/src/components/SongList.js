import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Hysteria', id: uuidv1() },
    { title: 'Knights of Cydonia', id: uuidv1() },
    { title: 'New Born', id: uuidv1() }
  ]);

  useEffect = (() => {

  }, [songs]);

  const addSong = (title) => {
    setSongs([
      ...songs,
      { title, id: uuidv1() }
    ])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  )
}

export default SongList;