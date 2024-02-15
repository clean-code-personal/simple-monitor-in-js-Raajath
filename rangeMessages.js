const langaugeMessages = {
  temperature: {
    dataRanges: [
      {
        limit: Number.MIN_SAFE_INTEGER,
        English: "Out of Bound",
        German: "Außerhalb der Grenzen",
      },
      {
        limit: -49,
        English: "Temperature is low",
        German: "Die Temperatur ist niedrig",
      },
      {
        limit: 0,
        English: "Temperature Low-Warning",
        German: "Warnung vor niedriger Temperatur",
      },
      { limit: 4, English: "", German: "" },
      {
        limit: 42,
        English: "Temperature High-Warning",
        German: "Warnung vor hoher Temperatur",
      },
      {
        limit: 45,
        English: "Temperature is high",
        German: "Die Temperatur ist hoch",
      },
      { limit: 90, English: "Out of Bound", German: "Außerhalb der Grenzen" },
      { limit: Number.MAX_SAFE_INTEGER, English: "", German: "" },
    ],
  },

  soc: {
    dataRanges: [
      {
        limit: Number.MIN_SAFE_INTEGER,
        English: "Out of Bound",
        German: "Außerhalb der Grenzen",
      },
      {
        limit: 0,
        English: "State of Battery is low",
        German: "Der Batteriestand ist niedrig",
      },
      {
        limit: 21,
        English: "State of Battery Low-Warning",
        German: "Warnung vor niedrigem Batteriestand",
      },
      { limit: 26, English: "", German: "" },
      {
        limit: 76,
        English: "State of Battery High-Warning",
        German: "Warnung vor hohem Batteriestand",
      },
      {
        limit: 80,
        English: "State of Battery is high",
        German: "Der Batteriezustand ist hoch",
      },
      { limit: 100, English: "Out of Bound", German: "Außerhalb der Grenzen" },
      { limit: Number.MAX_SAFE_INTEGER, English: "", German: "" },
    ],
  },

  chargeRate: {
    dataRanges: [
      {
        limit: Number.MIN_SAFE_INTEGER,
        English: "Out of Bound",
        German: "Außerhalb der Grenzen",
      },
      {
        limit: 0,
        English: "Charge Rate is low",
        German: "Die Laderate ist niedrig",
      },
      {
        limit: 0.05,
        English: "Charge Rate Low-Warning",
        German: "Warnung vor niedrigem Ladestrom",
      },
      { limit: 0.2, English: "", German: "" },
      {
        limit: 0.75,
        English: "Charge Rate High-Warning",
        German: "Warnung vor hoher Laderate",
      },
      {
        limit: 0.8,
        English: "Charge Rate is high",
        German: "Die Laderate ist hoch",
      },
      { limit: 1.0, English: "Out of Bound", German: "Außerhalb der Grenzen" },
      { limit: Number.MAX_SAFE_INTEGER, English: "", German: "" },
    ],
  },
  English: "Battery is good",
  German: "Batterie ist ok",
};

module.exports = { langaugeMessages };
