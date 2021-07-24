import Fastify from "fastify";

import Product from "./models/product.js";

const app = Fastify();

app.get("/product", async (request, reply) => {
  const post = await Product.findAll();
  return reply.send({ post });
});

app.post("/product", async (request, reply) => {
  const post = await Product.create({ ...request.body });
  return reply.send({ post });
});

app.get("/product/:id", async (request, reply) => {
  const { id } = request.params;
  const post = await Product.findByPk(id);
  return reply.send({ post });
});

app.put("/product/:id", async (request, reply) => {
  const { id } = request.params;
  await Product.update({ ...request.body }, { where: { id } });
  const post = await Product.findByPk(id);
  return reply.send({ post });
});

app.delete("/product/:id", async (request, reply) => {
  const { id } = request.params;
  const post = await Product.findByPk(id);
  await Product.destroy({ where: { id } });
  return reply.send({ post });
});

export default app;
