import React from 'react';
import Chord from './chord'

export default { title: 'Chord' };

export const CM7 = () => {
  const chord = {
    root: 'C',
    type: 'M7'
  }
  return <Chord chord={chord}></Chord>;
}
