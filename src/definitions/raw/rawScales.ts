
export interface IRawScales {
    Major: IRawScale,
    HarmonicMinor: IRawScale,
    MelodicMinor: IRawScale,
    Chromatic: IRawScale,
    MajorPentatonic: IRawScale,
    MinorPentatonic: IRawScale,
    MajorPentatonicBlues: IRawScale,
    MinorPentatonicBlues: IRawScale,
    BluesRocknRoll: IRawScale,
    BBKingBlues: IRawScale,
}

export interface IRawScale {
    id: string,
    steps: number[],
    modes?: string[]
}

export const RawScales: IRawScales = {
    Major: {
        id: "major",
        steps: [2, 2, 1, 2, 2, 2, 1],
        modes: [
            "ionisch (dur)",
            "dorisch",
            "phrygisch",
            "lydisch",
            "mixolydisch",
            "aeolisch (moll)",
            "lokrisch",
        ]
    },
    HarmonicMinor: {
        id: "harmonic minor",
        steps: [2, 1, 2, 2, 1, 3, 1],
        modes: [
            "harmonic minor mode",
            "Locrian 13 or Locrian 6 (half-diminished)",
            "Ionian #5 (augmented)",
            "Dorian #11 (or dorian #4) (minor)",
            "Phrygian dominant (dominant)",
            "Lydian #2 (major)",
            "Super locrian bb7 (diminished)",
        ]
    },
    MelodicMinor: {
        id: "melodic minor",
        steps: [2, 1, 2, 2, 2, 2, 1],
        modes: [
            "melodic minor mode",
            "dorisch b9",
            "lydisch augmented",
            "lydisch dominant / mixo #11",
            "mixolydisch b13",
            "aeolisch b5 (lokrisch #2)",
            "alterierte skala (super lokrisch)",
        ]
    },
    Chromatic: {
        id: "chromatic",
        steps: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    },
    MinorPentatonic: {
        id: "minor pentatonic",
        steps: [3, 2, 2, 3, 2],
    },
    MajorPentatonic: {
        id: "major pentatonic",
        steps: [2, 2, 3, 2, 3],
    },
    MinorPentatonicBlues: {
        id: "minor blues pentatonic",
        steps: [3, 2, 1, 1, 3, 2],
    },
    MajorPentatonicBlues: {
        id: "major blues pentatonic",
        steps: [2, 1, 1, 3, 2, 3],
    },
    BluesRocknRoll: {
        id: "blues rock n roll",
        steps: [2, 1, 1, 1, 1, 1, 2, 1, 2],
    },
    BBKingBlues: {
        id: "B.B. King blues",
        steps: [3,3,1,1,2],
    },
}

