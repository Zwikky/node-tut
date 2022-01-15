const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data/data");

// Set up static files and middleware
// app.use(express.static("./html"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Welcome to Node Hub</h1> ...<a href='/api/products'>View Products API</a>"
    );
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(newProducts);
  //   res.status(200).json(products);
});

app.get("/api/products/:productID", (req, res) => {
  //   console.log(req);
  //   console.log(req.params);

  const { productID } = req.params;
  const oneProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!oneProduct) return res.status(404).send("Product Does Not Exist");
  res.json(oneProduct);
});

app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts < 1) {
    // res.status(200).send("No Products Matched Your Search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);

  //   res.send("Hello John");
});

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./html/index.html"));
// });

// Resources Not Found
app.all("*", (req, res) => {
  res.status(404).send("Requested Resources Not Available");
});

// Listen on Port 5050
app.listen(5050, () => {
  console.log("Server Running on Port 5050.....");
});
