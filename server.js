import { faker } from "@faker-js/faker";
import jsonServer from "json-server";
import db from "./db.json" assert { type: "json" };

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for handling GET requests to /menu
server.get("/menu", (req, res) => {
  res.json({ status: "success", data: db.menu });
});

server.get("/", (req, res) => {
  res.json({ status: "success", data: db.testimonial });
});

// Custom route for handling GET requests to /cart
server.get("/cart", (req, res) => {
  res.json({ status: "success", data: db.cart });
});

server.post("/order", (req, res) => {
  const { customer, phone, position, address, status, priority, cart } =
    req.body;

  const createdAt = faker.date.recent().toISOString();
  const estimatedDelivery = deliveryDate();

  const order = {
    customer,
    phone,
    position,
    address,
    status:
      new Date(estimatedDelivery) > new Date(createdAt)
        ? "Preparing"
        : "Delivered",
    priority,
    cart,
    id: faker.string.alphanumeric(5),
    createdAt,
    estimatedDelivery,
    orderPrice: calculateOrderPrice(cart),
    priorityPrice: calculatePriorityPrice(cart),
  };

  db.order.push(order);
  res.json({ status: "success", data: order });
});

server.patch("/order/:orderId", (req, res) => {
  const orderId = req.params.orderId;

  // Find the order by ID
  const orderIndex = db.order.findIndex((o) => o.id === orderId);

  if (orderIndex !== -1) {
    // Update the order's priority field to true
    db.order[orderIndex].priority = true;

    res.json({ status: "success", data: db.order[orderIndex] });
  } else {
    res.status(404).json({ status: "error", message: "Order not found" });
  }
});

server.get("/order/:orderId", (req, res) => {
  const orderId = req.params.orderId;
  const order = db.order.find((o) => o.id === orderId);

  if (order) {
    res.json({ status: "success", data: order });
  } else {
    res.status(404).json({ status: "error", message: "Order not found" });
  }
});

function calculateOrderPrice(cart) {
  let orderPrice = 0;
  for (const item of cart) {
    orderPrice += item.quantity * item.unitPrice;
  }
  return orderPrice;
}

function calculatePriorityPrice(cart) {
  let priorityPrice;
  let orderPrice = calculateOrderPrice(cart);
  priorityPrice = orderPrice * 0.2;
  return priorityPrice;
}

function deliveryDate() {
  const currentDate = new Date();

  const randomMinutes = Math.floor(Math.random() * 70) + 1;

  const deliveryDate = new Date(currentDate.getTime() + randomMinutes * 60000);

  const deliveryDateISOString = deliveryDate.toISOString();

  return deliveryDateISOString;
}

server.use(jsonServer.router("db.json"));

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
