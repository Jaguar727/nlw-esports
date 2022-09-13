import express from "express";

const app = express();

app.get("/ads", (req, res) => {
    return res.json([
        { id: 1, name: "Ad 1" },
        { id: 1, name: "Ad 2" },
        { id: 1, name: "Ad 3" },
    ]);
});

app.listen(7270);
