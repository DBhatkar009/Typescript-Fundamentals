// typescript type Anotation

hasMyMobileCover("samsung", "celiconRubber", 1);

function hasMyMobileCover(mobile: string, cover: string, howMany: number) {
  console.log(
    " I have " +
      mobile +
      " mobile and i have " +
      cover +
      " cover and it is only have " +
      howMany
  );
}
