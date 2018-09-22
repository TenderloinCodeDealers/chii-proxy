const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const url = require("url");

app.use(express.static(path.join(__dirname, "public")));
app.use("/:id", express.static(path.join(__dirname, "public")));

const carouselServer = "http://54.183.146.159";
const sidebarServer = "http://localhost:3004";
const ratingsAndReviewsServer = "http://13.57.214.131:30";
const rVDealsServer = "http://54.193.11.2:3000";

app.get(`/:id/api/recently-viewed-product-data`, function(req, res) {
  const id = req.params.id;
  res.redirect(`${rVDealsServer}/${id}/api/recently-viewed-product-data`);
});

app.get(`/:id/api/recently-viewed-service-data`, function(req, res) {
  const id = req.params.id;
  res.redirect(`${rVDealsServer}/${id}/api/recently-viewed-service-data`);
});

app.get("/:dealId/api/ratings", function(req, res) {
  const dealId = req.params.dealId;
  res.redirect(
    url.format({
      pathname: `${ratingsAndReviewsServer}/${dealId}/api/reviews`,
      params: req.query
    })
  );
});

app.get("/:dealId/api/reviews", function(req, res) {
  const dealId = req.params.dealId;
  res.redirect(`${ratingsAndReviewsServer}/${dealId}/api/reviews`);
});

app.get("/:id/api/images", function(req, res) {
  const id = req.params.id;
  res.redirect(`${carouselServer}/${id}/api/images`);
});

app.get("/:id/api/products", function(req, res) {
  let productId = req.params.id;
  res.redirect(`${sidebarServer}/${productId}/api/products`);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
