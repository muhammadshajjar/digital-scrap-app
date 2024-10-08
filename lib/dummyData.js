export const EMAIL = "digitalscrap01@gmail.com";

export const CATEGORIESDATA = [
  {
    id: "112metal",
    name: "Metals",
    imagePath: require("../assets/images/metals.png"),
    description:
      "Metals are one of the most commonly recycled materials. This category includes a wide range of metal items, from aluminum cans to copper wire and brass fixtures",
  },
  {
    id: "113plastic",
    name: "Plastics",
    imagePath: require("../assets/images/plastic.png"),
    description:
      "Plastics are versatile materials used in numerous everyday items. This category encompasses plastic bottles, containers, and various plastic products",
  },
  {
    id: "114ewaste",
    name: "E-Waste",
    imagePath: require("../assets/images/ewaste.png"),
    description:
      "Electronics and electronic waste (e-waste) include items such as computers, mobile phones, televisions, and circuit boards",
  },
  {
    id: "115glass",
    name: "Glass",
    imagePath: require("../assets/images/glass.png"),
    description:
      "Glass is a common material used in containers, windows, and household products. This category includes glass bottles, jars, and various glass items",
  },
  {
    id: "116paper",
    name: "Paper",
    imagePath: require("../assets/images/paper.png"),
    description:
      "Paper and cardboard materials are widely used for packaging, printing, and writing. This category covers items like newspapers, cardboard boxes, magazines, and office paper",
  },
  {
    id: "117other",
    name: "Others",
    imagePath: require("../assets/images/more.png"),
  },
];

export const MARKETPLACELISTING = [
  {
    id: "1",
    imagePath: require("../assets/images/woodendoor.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
  {
    id: "2",
    imagePath: require("../assets/images/anitiquekeys.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
  {
    id: "3",
    imagePath: require("../assets/images/anitiquekeys.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
  {
    id: "4",
    imagePath: require("../assets/images/woodendoor.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
  {
    id: "5",
    imagePath: require("../assets/images/woodendoor.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
  {
    id: "6",
    imagePath: require("../assets/images/anitiquekeys.png"),
    title: "Wooden door",
    condition: 7,
    price: 5000,
    publishAt: "12-12-2023",
  },
];

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export const CUSTOMERSSETTINGSOPTIONS = [
  {
    title: "Preferences",
    options: [
      {
        name: "Schedules",
        icon: <MaterialIcons name="schedule" size={24} color="#B3B3B3" />,
        linkPath: "/customers/profile/schedules",
      },
      {
        name: "Smart Trashbin",
        icon: <Ionicons name="trash-bin-outline" size={24} color="#B3B3B3" />,
        linkPath: "/customers/profile/smarttrashbin",
      },
    ],
  },
  {
    title: "Community",
    options: [
      {
        name: "Blogs",
        icon: <FontAwesome name="newspaper-o" size={24} color="#B3B3B3" />,
        linkPath: "/customers/profile/blogs",
      },
    ],
  },
  {
    title: "Your Account",
    options: [
      {
        name: "Account",
        icon: <FontAwesome name="user-o" size={24} color="#B3B3B3" />,
        linkPath: "/customers/profile/account",
      },
      {
        name: "Help",
        icon: <AntDesign name="infocirlceo" size={24} color="#B3B3B3" />,
        linkPath: "/customers/profile/helpcenter",
      },
    ],
  },
];

export const RIDERSSETTINGSOPTIONS = [
  {
    title: "Preferences",
    options: [
      {
        name: "Schedules",
        icon: <MaterialIcons name="schedule" size={24} color="#B3B3B3" />,
        linkPath: "/riders/profile/schedules",
      },
    ],
  },
  {
    title: "Community",
    options: [
      {
        name: "Blogs",
        icon: <FontAwesome name="newspaper-o" size={24} color="#B3B3B3" />,
        linkPath: "/riders/profile/blogs",
      },
    ],
  },
  {
    title: "Your Account",
    options: [
      {
        name: "Account",
        icon: <FontAwesome name="user-o" size={24} color="#B3B3B3" />,
        linkPath: "/riders/profile/account",
      },
      {
        name: "Online Verification",
        icon: <Octicons name="verified" size={24} color="#B3B3B3" />,
        linkPath: "/riders/profile/verification",
      },

      {
        name: "Help",
        icon: <AntDesign name="infocirlceo" size={24} color="#B3B3B3" />,
        linkPath: "/riders/profile/helpcenter",
      },
    ],
  },
];

export const RIDERSSCHEDULESDATA = [
  {
    id: "34x234w",
    by: "Talha Arshad",
    at: "5/1/2023 - 12:00 am",
    address: "House# 55 ,Jummah Khan Market near British Homes",
  },
  {
    id: "243ksd32",
    by: "M Awais",
    at: "5/1/2023 - 02:00 pm",
    address: "House# 108 ,Tariq Khan Market near British Homes",
  },
  {
    id: "d23ksdf",
    by: "Tauseef",
    at: "5/1/2023 - 02:30 pm",
    address: "House# 202 ,Faisal Colony, I/ 14 Islamabad Rawalpindi",
  },
  {
    id: "33x224w",
    by: "Muhammad Asif",
    at: "5/1/2023 - 03:00 pm",
    address: "House# 100, Street 5 British Homes Rawalpindi",
  },
];

export const SUBCATEGORIESDATA = [
  {
    id: "112metal",
    subcategories: [
      { name: "Aluminum cans", price: "210" },
      { name: "Aluminum cans", price: "210" },
      { name: "Aluminum cans", price: "210" },
      { name: "Aluminum cans", price: "210" },
    ],
  },
  {
    id: "113plastic",
    subcategories: [
      { name: "PET bottles", price: "210" },
      { name: "PET bottles", price: "210" },
      { name: "PET bottles", price: "210" },
      { name: "PET bottles", price: "210" },
    ],
  },
  {
    id: "114ewaste",
    subcategories: [
      { name: "Circuit boards", price: "210" },
      { name: "Circuit boards", price: "210" },
      { name: "Circuit boards", price: "210" },
      { name: "Circuit boards", price: "210" },
    ],
  },
  {
    id: "115glass",
    subcategories: [
      { name: "Glass bottles", price: "210" },
      { name: "Glass bottles", price: "210" },
      { name: "Glass bottles", price: "210" },
      { name: "Glass bottles", price: "210" },
    ],
  },
  {
    id: "116paper",
    subcategories: [
      { name: "Newspape", price: "210" },
      { name: "Newspape", price: "210" },
      { name: "Newspape", price: "210" },
      { name: "Newspape", price: "210" },
    ],
  },
];

export const FAQSCUSTOMERS = [
  {
    question: "How does the scrap selling process work?",
    answer:
      "Create an account, upload images and details of your scrap, and we'll handle the rest, including pickup scheduling and pricing.",
  },
  {
    question: "Can I sell antique items on the marketplace?",
    answer: "Yes, our marketplace accommodates both scrap and antique items.",
  },
  {
    question: "How do I buy scrap or antique items from the marketplace?",
    answer:
      "Browse listings, select items, and purchase. Use our messaging system for further details or negotiations.",
  },
  {
    question: "What measures ensure transaction safety?",
    answer:
      "We verify users, provide secure payment options, and offer real-time order tracking. Customer support is available for assistance.",
  },
];

export const FAQSRIDERS = [
  {
    question: "What is the verification process for becoming a rider?",
    answer:
      "Submit necessary documents for verification. Once approved, access daily pickup and delivery schedules.",
  },
  {
    question: "How are pickup schedules assigned to riders",
    answer:
      " Schedules are based on location, availability, and workload. Accept or reject assignments based on your schedule.",
  },
  {
    question: "Can riders also deliver marketplace orders?",
    answer:
      "Yes, riders handle both pickups and deliveries. Assignments are received through the app.",
  },
  {
    question: "What measures ensure transaction safety?",
    answer:
      "We verify users, provide secure payment options, and offer real-time order tracking. Customer support is available for assistance.",
  },
];
