import './App.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMusicsRequest } from './redux/slices/musicSlice';
import MediumCard from './components/cards/MediumCard';
export default function App() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.musics);
  useEffect(() => {
    dispatch(getMusicsRequest());
  }, [dispatch]);

  return (
  <div className="w-full bg-slate-50 h-screen pt-10">
      <h1 className="text-3xl text-blue-400 text-center font-bold  mb-8">
        Singers
      </h1>
      {song.loading && <p className='text-center'>Loading...</p>}
      {song.error && <p className='text-center'>Error: {song.error}</p>}
      <div className='w-full flex gap-3 flex-wrap justify-center px-8'>
      {song.musicData && song.musicData.map(item=>(
        <MediumCard key={item.artist} coverArt={`./src/assets/${item.profilePicture}`} title={item.artist} subtitle={item.songTitle}/>
      ))
      }
      </div>
  </div>
  )
}
