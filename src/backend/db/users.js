import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
export const users = [
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
      },
      {
        firstName: "Dan",
        lastName: "Abramov",
        username: "danabramov",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
      },

      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am very adarsh and i am also a balika.",
    portfolio: "https://adarshbalika.netlify.app/",
  },
  /*****************************************2*******************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    password: "segunadebayo123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "teju@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
    following: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
      },
    ],
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
      },
    ],
    bookmarks: [],
    bio: "Chakra UI is my favorite i use it a lot",
    portfolio: "https://www.google.co.in/",
  },
  /*******************************3*********************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "johndoe@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1459",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1460",
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1461",
        firstName: "Kola",
        lastName: "Tioluwani",
        username: "kolatioluwani",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
      },
    ],
    bookmarks: [],
    bio: "An American singer, songwriter, actor, poet, guitarist and bass player",
    portfolio: "https://www.google.co.in/",
  },
  /**********************************************4*************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1462",
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    password: "ryanflorence123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    email: "ryanflorence@gmail.com",
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
      {
        firstName: "Dan",
        lastName: "Abramov",
        username: "danabramov",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
      },
    ],
    following: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
      {
        firstName: "Dan",
        lastName: "Abramov",
        username: "danabramov",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
      },
    ],
    bookmarks: [],
    bio: "Remix - Build Better Websites | React Training | React Router",
    portfolio: "https://www.google.co.in/",
  },
  /**************************************************5**************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1463",
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    password: "danabramov123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
    email: "danabramov@gmail.com",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1464",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
      },
    ],
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
    ],
    bookmarks: [],
    bio: "Software engineer at Facebook | Creator of Redux.",
    portfolio: "https://www.google.co.in/",
  },
  /*********************************************7*****************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f14565",
    firstName: "Kola",
    lastName: "Tioluwani",
    username: "kolatioluwani",
    password: "kolatioluwani123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "kolatioluwani@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
    followers: [
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    bio: `UI Engineer + Designer 🦄. Creator of 
    @chakra_ui
     and 
    @zag_js
    .`,
    portfolio: "https://www.google.co.in/",
  },
];
