const express = reqiure("express");
const app = express();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// 1. hurdan endpoint sagsand nemeh
app.post("/cart/add", (req, res) => res.json({ ok: true, items: 1 }));
//2. udaan endpoint tailan (200-400ms sanamsargui)
app.get("/report", async (req, res) => {
  await sleep(200 + Math.random() * 200);
  res.json({ rows: 20000 });
});
//3. Nadivargui endpoint - tulbur (huseltiin ~5% ni 500 aldaa)
app.post("/pay", (req, res) => {
  if (Math.random() < 0.05)
    return res.status(500).json({ error: "gateway timeout" });
  res.json({ paid: true });
});
app.listen(3000, () => console.log("API: http://localhost:3000"));
