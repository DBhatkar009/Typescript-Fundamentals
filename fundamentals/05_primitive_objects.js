var lable = {
    bookName: "The Harry Potter",
    author: "J.K Rowling",
    pages: 556,
};
console.log("this is primitives object", typeof lable);
// nested object
var lable2 = {
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
