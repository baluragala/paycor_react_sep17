const post = {
  title: "ES6 is awesome",
  author: "Zeo",
  createdDate: "2017-01-01",
  body:
    "ES6 has great new features that makes developers life easy. Go and learn, Rock it !!!"
};

const message =
  " A book named " + post.title + "\n\n\n\n \t\t\t\t by author " + post.author;
const message1 = `A book named ${post.title} 



                          by author ${post.author}`;
console.log("message", message);
console.log("message1", message1);
