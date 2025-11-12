const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgt1ucj.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("ecobills-db");
    const billsCollection = db.collection("bills");
    const myPayBill = db.collection("payBills");

    //get all
    app.get("/bills", async (req, res) => {
      const result = await billsCollection.find().toArray();
      res.send(result);
    });

    // get single data
    app.get("/bills/:id", async (req, res) => {
      const { id } = req.params;
      const result = await billsCollection.findOne({ _id: new ObjectId(id) });

      res.send({ success: true, result });
    });

    // get recent 6 data
    app.get("/latest-bills", async (req, res) => {
      const result = await billsCollection
        .find()
        .sort({ date: -1 })
        .limit(6)
        .toArray();

      res.send(result);
    });

    // bill category filter
    app.get("/bill-filtering", async (req, res) => {
      const category = req.query.category;
      const result = await billsCollection
        .find({ category: category })
        .toArray();
      res.send(result);
    });

    //myPayBill post
    app.post("/my-pay-bill", async (req, res) => {
      const data = req.body;
      const result = await myPayBill.insertOne(data);
      res.send(result);
    });

    // get my all payBill history
    app.get("/my-paybill-history", async (req, res) => {
      const email = req.query.email;
      const result = await myPayBill.find({ email: email }).toArray();
      res.send(result);
    });

    //update single mybill history
    app.put("/my-paybill-history/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const objectId = new ObjectId(id);
      const filter = { _id: objectId };
      const update = {
        $set: data,
      };
      const result = await myPayBill.updateOne(filter, update);

      res.send({
        success: true,
        result,
      });
    });

    //delete my pay bill
    app.delete("/my-paybill-history/:id", async (req, res) => {
      const { id } = req.params;
      const result = await myPayBill.deleteOne({ _id: new ObjectId(id) });

      res.send({
        success: true,
      });
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
