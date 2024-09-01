import React from 'react';
import SelectedSongCard from './SelectedSongCard';
import { hexToRGBA } from '../../services/Songs';

const SelectedItem = ({ song }) => {
  const gradientStyle = {
    background: `linear-gradient(to top, ${song.color.primary}, ${hexToRGBA(song.color.primary,0.2)})`,
  };

  return (
    <div
      className="relative flex items-center p-6 gap-5"
      style={gradientStyle}
    >
      <SelectedSongCard song={song} />
      <div className="space-y-5">
        <h1 className="text-7xl text-white font-bold">{song.name}</h1>
        <p className="text-lg font-semibold text-white/70">{song.artists}</p>
      </div>
    </div>
  );
};

export default SelectedItem;
