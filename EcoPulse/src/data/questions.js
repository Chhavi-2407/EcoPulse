import DoubleSlider from "../components/DoubleSlider";

export const questions = [
  {
    id: "food",
    title: "How often do you eat animal-based products?",
    subtitle: "(beef, pork, chicken, fish, eggs, dairy products)",
    type: "slider",

    minLabel: "Never",
    maxLabel: "Very Often",

    levels: [
      {
        label: "Never",
        description: "(vegan)",
        score: 0,
      },

      {
        label: "Infrequently",
        description: "(vegetarian - eggs/dairy, no meat)",
        score: 25,
      },

      {
        label: "Occasionally",
        description: "(really like veggies - occasional meat, eggs/dairy)",
        score: 50,
      },

      {
        label: "Often",
        description:
          "(balanced meat/veggies - meat a few times a week, eggs/dairy almost daily)",
        score: 75,
      },

      {
        label: "Very Often",
        description: "(meat daily)",
        score: 100,
      },
    ],
  },
  {
    id: "localFood",

    type: "slider",

    title:
      "How much of the food that you eat is unprocessed, unpackaged or locally grown?",

    subtitle: "(less than 320 kilometers/200 miles away)",

    minLabel: "NONE",
    maxLabel: "ALL",

    levels: [
      {
        label: "0%",
        description: "Almost everything is packaged/imported",
      },
      {
        label: "25%",
        description: "A small amount is local or unpackaged",
      },
      {
        label: "50%",
        description: "About half your food is local/unprocessed",
      },
      {
        label: "75%",
        description: "Most food is local, unpackaged or natural",
      },
      {
        label: "100%",
        description: "Everything is local and unprocessed",
      },
    ],
  },
  {
    id: "housing",

    type: "options",

    category: "HOUSING",

    title: "Which housing type best describes your home?",

    options: [
      "Freestanding, no running water",
      "Freestanding, running water",
      "Multi-storey apartment",
      "Duplex, row house or building with 2-4 housing units",
      "Luxury condominium",
    ],

    image: "/images/housing-bg.png",
  },
  {
    id: "household",
    type: "double-slider",

    title1: "How many people live in your household?",
    minLabel1: "JUST ME",
    maxLabel1: "10+",

    title2: "What is the size of your home?",
    minLabel2: "TINY",
    maxLabel2: "HUGE",

    image: "/images/housing-area-bg.png",

    showNumbers: false,

    valueType1: "people",
    valueType2: "size",
  },
  {
    id: "electricity",

    type: "slider",

    title: "How energy efficient is your home?",

    subtitle:
      "(modern appliances, climate controls, insulation, careful energy use)",

    minLabel: "HARDLY",
    maxLabel: "VERY",

    levels: [
      {
        label: "Very inefficient",
        desc: "poor insulation, heavy electricity use",
      },

      {
        label: "Below average",
        desc: "basic appliances with moderate efficiency",
      },

      {
        label: "Average",
        desc: "modern appliances and balanced energy usage",
      },

      {
        label: "Above average",
        desc: "well insulated with efficient lighting",
      },

      {
        label: "Efficiency-centered design",
        desc: "optimized for very low energy consumption",
      },
    ],

    image: "/images/eco-dark-bg.png",
  },
  {
    id: "renewable",

    title:
      "What percentage of your home's electricity comes from renewable sources?",

    subtitle: "(either directly or through purchased green power)",

    type: "slider",

    minLabel: "LOW",
    maxLabel: "HIGH",

    levels: [
      {
        label: "0%",
        desc: "No renewable electricity usage",
      },

      {
        label: "27%",
        desc: "Small amount of renewable energy usage",
      },

      {
        label: "46%",
        desc: "Moderate renewable electricity usage",
      },

      {
        label: "82%",
        desc: "High renewable energy contribution",
      },

      {
        label: "100%",
        desc: "Fully powered by renewable electricity",
      },
    ],

    image: "/images/renewable-dark-bg.png",
  },
  {
    id: "transport",
    title: "Daily transportation type?",
    type: "options",
    options: ["Walking", "Public Transport", "Bike", "Car", "SUV"],
  },
  {
    id: "flights",

    title: "How many hours do you fly each year?",

    type: "slider",

    minLabel: "NONE",
    maxLabel: "MANY",

    levels: [
      {
        label: "6 Hours",
        desc: "Very little air travel",
      },

      {
        label: "108 Hours",
        desc: "Occasional flights throughout the year",
      },

      {
        label: "200 Hours",
        desc: "Moderate annual flying",
      },

      {
        label: "350 Hours",
        desc: "Frequent air travel",
      },

      {
        label: "500+ Hours",
        desc: "Extremely high air travel",
      },
    ],

    image: "/images/flights-dark-bg.png",
  },
  {
    id: "distance",

    type: "double-slider",

    title1: "How far do you travel by car each week?",
    minLabel1: "ZERO",
    maxLabel1: "VERY FAR",

    title2: "How far do you travel by motorcycle each week?",
    minLabel2: "ZERO",
    maxLabel2: "VERY FAR",

    levels1: [
      { label: "0 kms", desc: "0 miles" },
      { label: "120 kms", desc: "75 miles" },
      { label: "378 kms", desc: "236 miles" },
      { label: "600 kms", desc: "373 miles" },
      { label: "800 kms", desc: "500 miles" },
    ],

    levels2: [
      { label: "5 kms", desc: "3 miles" },
      { label: "243 kms", desc: "152 miles" },
      { label: "534 kms", desc: "334 miles" },
      { label: "700 kms", desc: "435 miles" },
      { label: "800 kms", desc: "500 miles" },
    ],

    image: "/images/transport-distance-bg.png",
    showNumbers: true,
    valueType1: "distance",
    valueType2: "distance",
  },
  {
    id: "waste",

    title: "Compared to your neighbors, how much trash do you generate?",

    type: "slider",

    category: "HOUSING",

    minLabel: "MUCH LESS",
    maxLabel: "MUCH MORE",

    levels: [
      {
        label: "Much less",
        description: "You produce very little waste",
      },

      {
        label: "Less",
        description: "Below average trash generation",
      },

      {
        label: "Same",
        description: "About the same as neighbors",
      },

      {
        label: "More",
        description: "Above average trash generation",
      },

      {
        label: "Much more",
        description: "You generate significantly more waste",
      },
    ],

    image: "/images/waste-bg.png",
  },
];