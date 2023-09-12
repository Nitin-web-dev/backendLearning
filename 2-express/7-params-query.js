const express = require("express");
const app = express();
const { products } = require("./data.js");

// home route
app.get("/", (req, res) => {
  res.send('<h1>home page</h1> <a href="/api/products">products</a>');
});

// get data destructuing only minimum data and then send to client
app.get("/api/products", (req, res) => {
  const newProducts = products.map((prdct) => {
    const { id, name, image } = prdct;
    return { id, name, image };
  });

  res.status(200).json(newProducts);
});

// get specific data by id
app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params)
  const { productID } = req.params;

  const singleprdct = products.find((prdct) => prdct.id === Number(productID));
  if (!singleprdct) {
    res.status(404).send("product not exist");
  }
  return res.status(200).json(singleprdct);
});

// get some more params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

// get query from url 
app.get('/api/v1/query',(req,res) => {
    // console.log(req.query)
    const {search, limit} = req.query;
    let sortedProducts = [...products]

    // search by name
    if(search){
        sortedProducts = sortedProducts.filter(prdct => {
            return prdct.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if( sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)
})
app.listen(5000, () => console.log("server 5000"));
