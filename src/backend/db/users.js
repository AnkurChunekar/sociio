import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
export const users = [
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
    firstName: "Michelle",
    lastName: "Gore",
    username: "michellegore",
    email: "michellegore@gmail.com",
    password: "michellegore123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
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
    statusImgURL:
      "https://i.picsum.photos/id/787/600/400.jpg?hmac=BNah2GlH1mF6ahc9LeQK6FAvlTiCGUBJjVnPjMtek7A",
    bio: "Proud food advocate. Gamer. Certified music specialist. Beer fanatic. Lifelong tv expert. Friendly coffee buff. Unapologetic internet fan.",
    website: "https://michellegore.com",
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
    statusImgURL:
      "https://i.picsum.photos/id/296/600/400.jpg?hmac=d0b0HACiExoMkGgjXnE6GrmWMrhKl-iw2gKO4pcDzIU",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
    following: [
      {
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
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
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
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
    website: "https://www.google.co.in/",
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
    statusImgURL:
      "https://i.picsum.photos/id/505/600/400.jpg?hmac=ucqGdI7a6Z0VFIgQiYxqubLV9it-JvzM3J3MYL24ivA",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    followers: [
      {
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
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
    website: "https://john-doe.netlify.app/",
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
    statusImgURL:
      "https://i.picsum.photos/id/650/600/400.jpg?hmac=I_ZN2h1tUinytChF_D7YEaiIH9EYIT52hPiC_bA7nxY",
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    email: "ryanflorence@gmail.com",
    followers: [
      {
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
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
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
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
    website: "https://www.google.co.in/",
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
    statusImgURL:
      "https://i.picsum.photos/id/37/600/400.jpg?hmac=6e_BjhayW1iTjzkbo06D13sXFQSn0--S_bR3CQhhtAE",
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
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
      },
    ],
    bookmarks: [],
    bio: "Software engineer at Facebook | Creator of Redux.",
    website: "https://www.google.co.in/",
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
    statusImgURL:
      "https://i.picsum.photos/id/990/600/400.jpg?hmac=0ThrDbALCAdiTjfViw4m0glP6ZlLp-pofK3Mx5ydEqU",
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
    website: "https://www.google.co.in/",
  },
];
