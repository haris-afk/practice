const express = require("express");
const hbs = require("hbs");

const app = express();
// console.log(path.join(__dirname, "/public"));
app.set("view engine", "hbs");
app.set("views", "templates/views");
hbs.registerPartials("templates/partials");
app.use(express.static("public"));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "haris",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    name: "haris",
    age: 28,
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    name: "haris",
    age: 27,
  });
});
// app.get("", (req, res) => {
//   res.send("<h1>Wheather</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "andrew",
//       age: 27,
//     },
//   ]);
// });

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  }
    console.log(req.query.search);
    res.send({
      name: "andrew",
      age: 27,
    });
  
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "help404",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
