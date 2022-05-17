import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Don't build your startups for VC. Build it for your customer. Simple advice. Often overlooked.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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
        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("Dec 25 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [
      {
        _id: uuid(),
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        text: "johndoe",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("Jan 05 2021 12:31:25"),
      },
      {
        _id: uuid(),
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("Jan 08 2021 12:31:25"),
      },
    ],
  },
  {
    _id: uuid(),
    content: `In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.`,
    likes: {
      likeCount: 3,
      likedBy: [
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
          _id: uuid(),
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "itskola",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: new Date("Feb 23 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Sometimes, all the therapy you need is talking to friends.`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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

        {
          _id: uuid(),
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
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("March 13 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `“Usually a good time to invest is when most people are scared of investing.`,
    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
        {
          _id: uuid(),
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "allenhere",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
        },
        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
      ],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("May 03 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Student: Does patience play an important role here?
	Teacher: Where does it not play, my friend?`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
        },
        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    createdAt: new Date("April 18 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `We want everything
	And that is a disaster
	Because, we are never going to get everything.
	And worse, the one thing that we truly want, will remain under-served.`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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
      dislikedBy: [],
    },
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    createdAt: new Date("Jan 01 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Describe your relationship with JavaScript with one word.`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("Dec 15 2020 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `"If they wrote it to make money, don't read it." - @naval`,
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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

        {
          _id: uuid(),
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
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
        {
          _id: uuid(),
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "allenhere",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("May 12 2022 10:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `“"There are no get rich quick schemes. That’s just someone else getting rich off you." - @naval`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },

        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kola",
    lastName: "Tioluwani",
    username: "allenhere",
    createdAt: new Date("Feb 28 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `The journey of a thousand miles begins with one step. -Lao Tzu`,
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: new Date("October 09 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `The Golden State is cooking its golden geese. -@melonmusk`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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

        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kola",
    lastName: "Tioluwani",
    username: "allenhere",
    createdAt: new Date("November 14 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Not to mention potential bugs in the code. Open source is the way to go to solve both trust and efficacy.`,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
        {
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("February 16 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    createdAt: new Date("April 05 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.” - Albus Dumbledore`,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
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

        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("April 03 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `"The strongest intellectual foundation is built upon science, math, and philosophy, as they are the search for universal truths." - @naval`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("Feb 05 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `"The closer you are to the truth, the more silent you become inside." - @naval`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
      ],

      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("Feb 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `"The larger the herd, the lower the returns." - @naval`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },
      ],
      dislikedBy: [],
    },

    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("March 26 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Your social media following doesn’t matter when you can’t deliver the quality of work you promised to your customers or clients.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },

        {
          _id: uuid(),
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
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    createdAt: new Date("April 03 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Today is my best day, how's yours?",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
        {
          _id: uuid(),
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "allenhere",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: new Date("August 02 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Ability to consume information fast is new age superpower. @tanaypratap`,
    likes: {
      likeCount: 3,
      likedBy: [
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
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    createdAt: new Date("June 15 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: `Nothing can beat the joy of seeing live users on your website. Thankyou so much @neogcamp @tanviprya @tanaypratap @ch_akanksha for organizing #hackneoG And just an update we have crossed 75 users as of now 😅`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("July 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Just read Kurt Vonnegaut's Slaughter House 5 and it's amazing!",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },

        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("July 13 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I'll rather have pain of discipline than pain of regret. Getting there💪 and anyone reading this believe in yourself and you'll get there eventually.",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },

        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
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
          _id: uuid(),
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "allenhere",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("August 05 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Lorem ipsum dolor sit amet.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },

        {
          _id: uuid(),
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kola",
    lastName: "Tioluwani",
    username: "allenhere",
    createdAt: new Date("October 08 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726657/code-beast_j4gbq1.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "I am very good at writing code, React JS ♥",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726733/63_ncg2cv.jpg",
        },
        {
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726575/yPCbNKr8_400x400_xdc1e6.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726783/53_yiuaqs.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    createdAt: new Date("March 27 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Today is the best day of my life, i got my first job.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/sociio/image/upload/v1652726468/dan-abramov_t3hlxr.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    createdAt: new Date("March 16 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/sociio/image/upload/v1652726503/ryan-florence_zapcpf.jpg",
    comments: [],
  },
];
