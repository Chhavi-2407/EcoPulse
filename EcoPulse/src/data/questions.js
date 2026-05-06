export const questions = [

  // =========================
  // FOOD
  // =========================

  {
    id: "food",

    type: "slider",

    title:
      "How often do you eat animal-based products?",

    subtitle:
      "(beef, pork, chicken, fish, eggs, dairy products)",

    minLabel: "NEVER",
    maxLabel: "VERY OFTEN",

    levels: [

      {
        label: "Never",
        description: "(vegan)",
        score: 0,
      },

      {
        label: "Infrequently",
        description: "(vegetarian)",
        score: 25,
      },

      {
        label: "Occasionally",
        description: "(occasional meat)",
        score: 50,
      },

      {
        label: "Often",
        description: "(meat several times a week)",
        score: 75,
      },

      {
        label: "Very Often",
        description: "(meat daily)",
        score: 100,
      },
    ],
  },

  // =========================
  // LOCAL FOOD
  // =========================

  {
    id: "localFood",

    type: "slider",

    title:
      "How much of the food that you eat is unprocessed, unpackaged or locally grown?",

    subtitle:
      "(less than 320 kilometers/200 miles away)",

    minLabel: "NONE",
    maxLabel: "ALL",

    levels: [

      {
        label: "0 %",
        description: "Imported food",
        score: 100,
      },

      {
        label: "25 %",
        description: "Small local contribution",
        score: 75,
      },

      {
        label: "50 %",
        description: "Balanced food sourcing",
        score: 50,
      },

      {
        label: "75 %",
        description: "Mostly local",
        score: 25,
      },

      {
        label: "100 %",
        description: "Completely local",
        score: 0,
      },
    ],
  },

  // =========================
  // HOUSING TYPE
  // =========================

  {
    id: "housing",

    type: "options",

    title:
      "Which housing type best describes your home?",

    options: [

      {
        label: "Freestanding, no running water",
        score: 5,
      },

      {
        label: "Freestanding, running water",
        score: 10,
      },

      {
        label: "Multi-storey apartment",
        score: 15,
      },

      {
        label:
          "Duplex, row house or building with 2-4 housing units",
        score: 20,
      },

      {
        label: "Luxury condominium",
        score: 25,
      },
    ],
  },

  // =========================
  // HOUSEHOLD
  // =========================

  {
    id: "household",

    type: "double-slider",

    title1:
      "How many people live in your household?",

    minLabel1: "JUST ME",
    maxLabel1: "10+",

    title2:
      "What is the size of your home?",

    minLabel2: "TINY",
    maxLabel2: "HUGE",

    showNumbers: true,

    valueType1: "people",
    valueType2: "size",
  },

  // =========================
  // ELECTRICITY
  // =========================

  {
    id: "electricity",

    type: "slider",

    title:
      "How energy efficient is your home?",

    subtitle:
      "(modern appliances, insulation, careful energy use)",

    minLabel: "HARDLY",
    maxLabel: "VERY",

    levels: [

      {
        label: "Very inefficient",
        desc: "heavy electricity use",
        score: 100,
      },

      {
        label: "Below average",
        desc: "basic efficiency",
        score: 75,
      },

      {
        label: "Average",
        desc: "moderate usage",
        score: 50,
      },

      {
        label: "Above average",
        desc: "good efficiency",
        score: 25,
      },

      {
        label: "Efficiency-centered",
        desc: "optimized home",
        score: 0,
      },
    ],
  },

  // =========================
  // RENEWABLE ENERGY
  // =========================

  {
    id: "renewable",

    type: "slider",

    title:
      "What percentage of your home's electricity comes from renewable sources?",

    subtitle:
      "(either directly or through purchased green power)",

    minLabel: "LOW",
    maxLabel: "HIGH",

    levels: [

      {
        label: "0%",
        desc: "No renewable energy",
        score: 100,
      },

      {
        label: "25%",
        desc: "Small renewable usage",
        score: 75,
      },

      {
        label: "50%",
        desc: "Moderate renewable usage",
        score: 50,
      },

      {
        label: "75%",
        desc: "High renewable usage",
        score: 25,
      },

      {
        label: "100%",
        desc: "Fully renewable",
        score: 0,
      },
    ],
  },

  // =========================
  // TRANSPORT
  // =========================

  {
    id: "transport",

    type: "options",

    title:
      "Daily transportation type?",

    options: [

      {
        label: "Walking",
        score: 0,
      },

      {
        label: "Public Transport",
        score: 5,
      },

      {
        label: "Bike",
        score: 3,
      },

      {
        label: "Car",
        score: 15,
      },

      {
        label: "SUV",
        score: 25,
      },
    ],
  },

  // =========================
  // FLIGHTS
  // =========================

  {
    id: "flights",

    type: "slider",

    title:
      "How many hours do you fly each year?",

    minLabel: "NONE",
    maxLabel: "MANY",

    levels: [

      {
        label: "0 Hours",
        desc: "Very little air travel",
        score: 5,
      },

      {
        label: "100 Hours",
        desc: "Occasional flights",
        score: 25,
      },

      {
        label: "200 Hours",
        desc: "Moderate annual flying",
        score: 50,
      },

      {
        label: "300 Hours",
        desc: "Frequent flying",
        score: 75,
      },

      {
        label: "400+ Hours",
        desc: "Extreme flying",
        score: 100,
      },
    ],
  },

  // =========================
  // DISTANCE
  // =========================

  {
    id: "distance",

    type: "double-slider",

    title1:
      "How far do you travel by car each week?",

    minLabel1: "ZERO",
    maxLabel1: "VERY FAR",

    title2:
      "How far do you travel by motorcycle each week?",

    minLabel2: "ZERO",
    maxLabel2: "VERY FAR",

    showNumbers: true,

    valueType1: "distance",
    valueType2: "distance",
  },

  // =========================
  // WASTE
  // =========================

  {
    id: "waste",

    type: "slider",

    title:
      "Compared to your neighbour, how much trash do you generate?",

    minLabel: "MUCH LESS",
    maxLabel: "MUCH MORE",

    levels: [

      {
        label: "Much less",
        description: "Very low waste",
        score: 0,
      },

      {
        label: "Less",
        description: "Below average",
        score: 25,
      },

      {
        label: "Same",
        description: "Average waste",
        score: 50,
      },

      {
        label: "More",
        description: "High waste",
        score: 75,
      },

      {
        label: "Much more",
        description: "Very high waste",
        score: 100,
      },
    ],
  },
];