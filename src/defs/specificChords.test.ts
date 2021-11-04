
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntervalDirection, SpecificInterval } from './specificIntervals';
import { Notes } from './notes';
import { Intervals } from './intervals';
import { SpecificChord } from './specificChords';
import { Chords } from './chords';



test('calculates the chords correctly', () => {

    expect(new SpecificChord(Notes.Eb, Chords.Major7).notes).toEqual([
        Notes.Eb,
        Notes.G,
        Notes.Bb,
        Notes.D
    ])
    
});

