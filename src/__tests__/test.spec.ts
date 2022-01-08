import axios from "axios";

describe("Shop", () => {
  it("get all datas", async () => {
    let response = await axios.get("http://localhost:5000/shop");

    expect(response.status).toBe(200);
  });

  it("get product by id", async () => {
    let response = await axios.get(
      "http://localhost:5000/shop/61d5c1a14b427cbc0003482d"
    );
    let responseBody = await response.data;

    expect(response.status).toBe(200);
  });
});

var token = "";

const email = "asdaasdasdas@gmail.com";
const password = "ghhdfg12gwjasbdvbua34567.8afaA";
const name = "Ramon Usuário Teste";

describe("User", () => {
  it("create user", async () => {
    let response = await axios.post("http://localhost:5000/register", {
      data: {
        email,
        password,
        name,
      },
    });
    let responseBody = await response.data;
    token = responseBody["token"];
    expect(response.status).toBe(200);
  });

  it("login user", async () => {
    let response = await axios.post("http://localhost:5000/login", {
      data: {
        email,
        password,
      },
    });
    let responseBody = await response.data;
    token = responseBody["token"];
    expect(response.status).toBe(200);
  });
});

describe("Cart", () => {
  it("view products on cart user", async () => {
    let response = await axios.get("http://localhost:5000/cart", {
      data: {
        token,
      },
    });

    expect(response.status).toBe(200);
  });

  it("add product on cart user", async () => {
    let response = await axios.put(
      "http://localhost:5000/cart/61d5c1a14b427cbc0003482d",
      {
        data: {
          token,
        },
      }
    );

    expect(response.status).toBe(200);
  });

  it("delete product on cart user", async () => {
    let response = await axios.delete(
      "http://localhost:5000/cart/61d5c1a14b427cbc0003482d",
      {
        data: {
          token,
        },
      }
    );

    expect(response.status).toBe(200);
  });
});
