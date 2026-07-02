import { Book, Author, Genre } from "@/types";

export const genres: Genre[] = [
  { id: "people", name: "People" },
  { id: "history", name: "History" },
  { id: "politics", name: "Politics" },
  { id: "kids", name: "Kids" },
  { id: "education", name: "Education" },
  { id: "business", name: "Business" },
  { id: "tech", name: "Tech" },
  { id: "classics", name: "Classics" },
  { id: "self-help", name: "Self Help" },
  { id: "academic", name: "Academic" },
];

export const authors: Author[] = [
  {
    id: "jk-rowling",
    name: "J.K Rowling",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    bio: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: [
      "death-before-breakfast",
      "harry-potter-1",
      "harry-potter-2",
      "fantastic-beasts",
      "casual-vacancy",
    ],
  },
  {
    id: "chetan-bhagat",
    name: "Chetan Bhagat",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    bio: "Indian author, columnist, screenwriter, television personality and motivational speaker known for his English language novels about young urban middle class Indians.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: ["five-point-someone"],
  },
  {
    id: "arundhati-roy",
    name: "Arundhati Roy",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    bio: "Indian author best known for the novel The God of Small Things, which won the Booker Prize in 1997.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: [],
  },
  {
    id: "ruskin-bond",
    name: "Ruskin Bond",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    bio: "British-Indian author known for his contributions to Indian children's literature.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: [],
  },
  {
    id: "morgan-housel",
    name: "Morgan Housel",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Partner at Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: ["psychology-of-money"],
  },
  {
    id: "george-bellairs",
    name: "George Bellairs",
    photo:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face",
    bio: "Pen name of Harold Blundell, a British crime writer who wrote detective fiction featuring Inspector Thomas Littlejohn.",
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    books: ["death-before-breakfast"],
  },
];

export const books: Book[] = [
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop",
    description:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
    publisher: "Ailaysa",
    publicationDate: "23 December 2021",
    language: "English",
    pages: 300,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.5,
    isBestseller: true,
    isNewArrival: true,
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "Vinuja",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        content:
          "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world british author best known for creating the harry Potter.",
        rating: 5,
      },
      {
        id: "r2",
        userId: "u2",
        userName: "Vinuja",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        content:
          "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world british author best known for creating the harry Potter.",
        rating: 4,
      },
    ],
  },
  {
    id: "death-before-breakfast",
    title: "Death before Breakfast",
    author: "George Bellairs",
    authorId: "george-bellairs",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description:
      "A court of armies, a battle of gods, and the rage of a hero has that epic tale of war. When a leader's price ignites a conflict, the greatest warrior withdraws, leaving his comrades to face devastating losses. Explore a world of mighty heroes and bitter rivalries, where courage and honor are tested by fate. Witness the brutal dance of battle, the clash of forces, and the complex ties that bind even enemies. Can a prophecy alter the course of war, or is destiny set in stone? Read more",
    publisher: "Ailaysa",
    publicationDate: "23 December 2021",
    language: "English",
    pages: 300,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.2,
    isNewArrival: true,
    reviews: [
      {
        id: "r3",
        userId: "u1",
        userName: "Vinuja",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        content:
          "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world british author best known for creating the Harry Potter.",
        rating: 4,
      },
      {
        id: "r4",
        userId: "u2",
        userName: "Vinuja",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        content:
          "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world british author best known for creating the harry Potter.",
        rating: 4,
      },
    ],
  },
  {
    id: "harry-potter-1",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    authorId: "jk-rowling",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    description:
      "The story of Harry Potter's first year at Hogwarts School of Witchcraft and Wizardry.",
    publisher: "Ailaysa",
    publicationDate: "26 June 1997",
    language: "English",
    pages: 223,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.9,
    isNewArrival: true,
    reviews: [],
  },
  {
    id: "harry-potter-2",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K Rowling",
    authorId: "jk-rowling",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    description: "Harry Potter's second year at Hogwarts.",
    publisher: "Ailaysa",
    publicationDate: "2 July 1998",
    language: "English",
    pages: 251,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.7,
    isNewArrival: false,
    reviews: [],
  },
  {
    id: "fantastic-beasts",
    title: "Fantastic Beasts and Where to Find Them",
    author: "J.K Rowling",
    authorId: "jk-rowling",
    cover:
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=300&h=400&fit=crop",
    description:
      "An exciting expedition around the world to find magical creatures.",
    publisher: "Ailaysa",
    publicationDate: "12 March 2001",
    language: "English",
    pages: 128,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.5,
    isNewArrival: false,
    reviews: [],
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "J.K Rowling",
    authorId: "jk-rowling",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description: "A big novel about a small town.",
    publisher: "Ailaysa",
    publicationDate: "27 September 2012",
    language: "English",
    pages: 503,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 3.8,
    isNewArrival: false,
    reviews: [],
  },
  {
    id: "richest-man-babylon",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=300&h=400&fit=crop",
    description:
      "The classic personal finance book that reveals the secrets to wealth.",
    publisher: "Ailaysa",
    publicationDate: "1 January 1926",
    language: "English",
    pages: 144,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.4,
    isBestseller: true,
    reviews: [],
  },
  {
    id: "know-this-story",
    title: "I Know How This Story Ends",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=300&h=400&fit=crop",
    description:
      "An insightful look at recurring patterns in financial history.",
    publisher: "Ailaysa",
    publicationDate: "5 March 2020",
    language: "English",
    pages: 256,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.3,
    isBestseller: true,
    reviews: [],
  },
  {
    id: "million-to-one",
    title: "A Million to One",
    author: "Tony Faggioli",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=300&h=400&fit=crop",
    description: "A thrilling story of chance, fate, and destiny.",
    publisher: "Ailaysa",
    publicationDate: "10 May 2018",
    language: "English",
    pages: 320,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.1,
    isBestseller: true,
    reviews: [],
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan House",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    description: "A beautifully written coming-of-age story.",
    publisher: "Ailaysa",
    publicationDate: "15 August 2019",
    language: "English",
    pages: 280,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.0,
    isBestseller: true,
    isNewArrival: true,
    reviews: [],
  },
  {
    id: "second-biggest-biz",
    title: "The Second Biggest Business Book",
    author: "Tom Marks",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop",
    description: "Essential business strategies for modern entrepreneurs.",
    publisher: "Ailaysa",
    publicationDate: "3 January 2022",
    language: "English",
    pages: 340,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.2,
    reviews: [],
  },
  {
    id: "international-business",
    title: "International Business",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=400&fit=crop",
    description: "Comprehensive guide to international business practices.",
    publisher: "Ailaysa",
    publicationDate: "7 February 2021",
    language: "English",
    pages: 412,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.1,
    reviews: [],
  },
  {
    id: "start-your-own-business",
    title: "Start Your Own Business",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
    description: "The only startup book you'll ever need.",
    publisher: "Ailaysa",
    publicationDate: "12 March 2020",
    language: "English",
    pages: 388,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.3,
    reviews: [],
  },
  {
    id: "indian-polity",
    title: "Indian Polity",
    author: "M. Laxmikanth",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
    description:
      "The comprehensive guide to Indian political system and governance.",
    publisher: "Ailaysa",
    publicationDate: "1 January 2019",
    language: "English",
    pages: 856,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.6,
    reviews: [],
  },
  {
    id: "upsc-guide",
    title: "UPSC Complete Guide",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
    description:
      "Complete preparation guide for UPSC Civil Services Examination.",
    publisher: "Ailaysa",
    publicationDate: "5 June 2022",
    language: "English",
    pages: 1200,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.5,
    reviews: [],
  },
  {
    id: "physics-book",
    title: "Physics: Concepts and Connections",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=400&fit=crop",
    description: "A comprehensive physics textbook for students.",
    publisher: "Ailaysa",
    publicationDate: "15 July 2020",
    language: "English",
    pages: 678,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.2,
    reviews: [],
  },
  {
    id: "tech-dot-com",
    title: "Tech Dot Com",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
    description: "The story of the dot-com boom and bust.",
    publisher: "Ailaysa",
    publicationDate: "20 September 2019",
    language: "English",
    pages: 290,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.0,
    reviews: [],
  },
  {
    id: "web-technology",
    title: "Web Technology",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop",
    description: "A comprehensive guide to modern web technologies.",
    publisher: "Ailaysa",
    publicationDate: "8 April 2021",
    language: "English",
    pages: 512,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.1,
    reviews: [],
  },
  {
    id: "chat-gpt-beginners",
    title: "ChatGPT for Beginners",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=400&fit=crop",
    description: "Everything you need to know about using ChatGPT effectively.",
    publisher: "Ailaysa",
    publicationDate: "1 March 2023",
    language: "English",
    pages: 224,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.4,
    reviews: [],
  },
  {
    id: "ai-chatgpt-education",
    title: "AI and ChatGPT Technology in Education",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=400&fit=crop",
    description: "How artificial intelligence is transforming education.",
    publisher: "Ailaysa",
    publicationDate: "14 June 2023",
    language: "English",
    pages: 336,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.3,
    reviews: [],
  },
  {
    id: "poet-empress",
    title: "Poet Empress",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    description:
      "The extraordinary life of Wu Zetian, the only woman to rule China as Empress.",
    publisher: "Ailaysa",
    publicationDate: "11 November 2020",
    language: "English",
    pages: 416,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.6,
    reviews: [],
  },
  {
    id: "tales-from-india",
    title: "Tales from Indian Classroom",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=400&fit=crop",
    description: "Wonderful tales from the Indian educational experience.",
    publisher: "Ailaysa",
    publicationDate: "9 January 2021",
    language: "English",
    pages: 264,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.2,
    reviews: [],
  },
  {
    id: "past-is-rising",
    title: "The Past Is Rising",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    description: "A gripping story about history repeating itself.",
    publisher: "Ailaysa",
    publicationDate: "22 February 2022",
    language: "English",
    pages: 348,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.3,
    reviews: [],
  },
  {
    id: "five-feet-apart",
    title: "Five Feet Apart",
    author: "Rachael Lippincott",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    description:
      "A heart-wrenching love story between two teens with cystic fibrosis.",
    publisher: "Ailaysa",
    publicationDate: "1 November 2018",
    language: "English",
    pages: 282,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.4,
    reviews: [],
  },
  {
    id: "looking-for-la-la",
    title: "Looking for La La",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&h=400&fit=crop",
    description: "A fun and emotional journey of love and discovery.",
    publisher: "Ailaysa",
    publicationDate: "8 August 2014",
    language: "English",
    pages: 318,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.0,
    reviews: [],
  },
  {
    id: "curtain-call",
    title: "Curtain Call",
    author: "Morgan Housel",
    authorId: "morgan-housel",
    cover:
      "https://images.unsplash.com/photo-1559636229-12a20bc16b2c?w=300&h=400&fit=crop",
    description: "A theatrical mystery set backstage at a grand theater.",
    publisher: "Ailaysa",
    publicationDate: "5 May 2016",
    language: "English",
    pages: 295,
    genres: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    rating: 4.1,
    reviews: [],
  },
];

export function getBooksByCategory(category: string): Book[] {
  switch (category) {
    case "new-arrivals":
      return books.filter((b) => b.isNewArrival);
    case "best-sellers":
      return books.filter((b) => b.isBestseller);
    case "business":
      return books.filter((b) =>
        b.genres.some((g) => g.toLowerCase() === "business"),
      );
    case "tech":
      return books.filter((b) =>
        b.genres.some((g) => g.toLowerCase() === "tech"),
      );
    case "classics":
      return books.filter((b) =>
        b.genres.some((g) => g.toLowerCase() === "classics"),
      );
    case "academic":
      return books.filter((b) =>
        b.genres.some((g) => g.toLowerCase() === "academic"),
      );
    case "kids":
      return books.filter((b) =>
        b.genres.some(
          (g) => g.toLowerCase() === "children" || g.toLowerCase() === "kids",
        ),
      );
    case "recommended":
      return books.slice(0, 6);
    default:
      return books;
  }
}

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}

export function getBooksByAuthor(authorId: string): Book[] {
  return books.filter((b) => b.authorId === authorId);
}
