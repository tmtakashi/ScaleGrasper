import React from 'react';
import ChordPallete from './chordPallete'

export default { title: 'ChordPallete' };

export const roots = () => {
  const props = {
    title: 'Roots',
    choices: ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
  }
  return <ChordPallete {...props}></ChordPallete>;
}

export const types = () => {
  const props = {
    title: 'Types',
    choices: ['M', 'm', 'M7', 'm7', '7',]
  }
  return <ChordPallete {...props}></ChordPallete>
}