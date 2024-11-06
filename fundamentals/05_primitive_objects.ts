const lable: {
  bookName: string;
  author: string;
  pages: number;
} = {
  bookName: "The Harry Potter",
  author: "J.K Rowling",
  pages: 556,
};

console.log("this is primitives object", typeof lable);

// nested object
const lable2: {
  nameOfBook: string;
  nameOfAuthor: string;
  pages: number;
  prisoner: {
    prisnorName: string;
    identify: string;
  };
} = {
  nameOfBook: "The fantastic beasts Where to find them",
  nameOfAuthor: "newts schemander",
  pages: 445,
  prisoner: {
    prisnorName: "Gellert Grindelwald",
    identify: "Dumbeldores friends",
  },
};

console.log(lable2, typeof lable2);

console.log(lable2.prisoner.identify);
