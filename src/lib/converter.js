
import { Tonal } from "@tonaljs/modules";
import { Chord } from "@tonaljs/modules";

export const chordToNotes = chord => {
  /**
   * Convert chord name to array of notes with octave number
   * @param {string} chord - chord symbol
   * @return {array} notes - notes with octave number
   */
  let notes = Chord.chord(Object.values(chord)).notes;
  let octave = Tonal.note(notes[0]).chroma < 7 ? 4 : 3;
  notes = notes.map((note, index) => {
    // set chord notes to root position
    if (
      index > 0 &&
      Tonal.note(note).chroma < Tonal.note(notes[index - 1]).chroma
    ) {
      octave += 1;
    }
    return note + octave.toString();
  });
  return notes;
};
