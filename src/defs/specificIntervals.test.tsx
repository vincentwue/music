
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntervalDirection, SpecificInterval } from './specificIntervals';
import { Notes } from './notes';
import { Intervals } from './intervals';



test('calculates the intervals correctly', () => {
  expect(new SpecificInterval(Notes.C, Notes.D).interval).toBe(Intervals.MajorSecond)
  expect(new SpecificInterval(Notes.C, Notes.Ab).interval).toBe(Intervals.MinorSixth)
  expect(new SpecificInterval(Notes.D, Notes.C).interval).toBe(Intervals.MinorSeventh)
  expect(new SpecificInterval(Notes.Db, Notes.Ab).interval).toBe(Intervals.PerfectFifth)
});


test('calculates the down intervals correctly', () => {
  expect(new SpecificInterval(Notes.C, Notes.D, IntervalDirection.Down).interval).toBe(Intervals.MinorSeventh)
  expect(new SpecificInterval(Notes.D, Notes.C, IntervalDirection.Down).interval).toBe(Intervals.MajorSecond)
});
