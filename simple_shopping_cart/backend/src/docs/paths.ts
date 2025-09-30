export const paths = {
  "/api/products": {
    get: {
      summary: "Get all products",
      tags: ["Products"],
      responses: {
        200: { description: "A list of products" },
      },
    },
  },
  "/api/products/{id}": {
    get: {
      summary: "Get product by id",
      tags: ["Products"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Product found" },
        404: { description: "Product not found" },
      },
    },
  },
  "/api/checkout": {
    post: {
      summary: "Submit an order",
      tags: ["Checkout"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                items: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      productId: { type: "integer" },
                      quantity: { type: "integer" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Order placed" },
        400: { description: "Invalid request" },
      },
    },
  },
  "/api/orders/{id}": {
    get: {
      summary: "Get order details by order id",
      tags: ["Orders"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string", example: "ORDER-1759216044554-pfvsu4ywn", pattern: "^[A-Za-z0-9\\-]+$" },
        },
      ],
      responses: {
        200: { description: "Order found" },
        404: { description: "Order not found" },
      },
    },
  },
} as const;


