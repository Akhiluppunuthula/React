import { Component } from "react";
// import ClassImage from "./ClassImage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClassImage from "./ClassImage";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ClassButton from "./ClassButton";
class ClassCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  async componentDidMount() {
    let data = await fetch("https://fakestoreapi.com/products");
    let json = await data.json();
    this.setState({ product: json });
  }
  handleClick = (id) => {
    let a = this.state.product.filter((val) => val.id != id);
    this.setState({ product: a });
  };
  removeCart = () => {
    this.setState({ product: [] });
  };
  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          className="bg-body-tertiary border-2 p-2 border-black "
        >
          <Container className="flex justify-evenly">
            <ClassButton buttonName="HOME" />
            <ClassButton buttonName="ABOUT" />
            <ClassButton buttonName="CART" />
            <button
              onClick={this.removeCart}
              className="border-2 p-2  bg-gray-300"
            >
              REMOVE ALL
            </button>
            <ClassButton buttonName="PAYMENT" />
          </Container>
        </Navbar>

        <div className="flex flex-wrap justify-evenly">
          {this.state.product.map((elem) => {
            return (
              <div key={elem.id}>
                <Card
                  style={{ width: "18rem" }}
                  className="border-2 border-cyan-400 my-4 p-2"
                >
                  <ClassImage variant="top" imageUrl={elem.image} />
                  <Card.Body>
                    <Card.Title className="font-bold my-2 h-20">
                      {elem.title}
                    </Card.Title>
                    <Card.Title className="font-semibold">
                      Category: {elem.category}
                    </Card.Title>
                    <Card.Title className="	font-semibold flex justify-between my-2">
                      <span>Rating :❤️{elem.rating.rate}</span>{" "}
                      <span>Count:📍{elem.rating.count}</span>
                    </Card.Title>
                    <Card.Text className="my-2 font-medium">
                      Price: ${elem.price}
                    </Card.Text>
                    <Button
                      onClick={() => this.handleClick(elem.id)}
                      variant="primary"
                      className="border-2 border-sky-500  bg-slate-500 text-white p-2 rounded-md w-6/12 ml-16 mt-2"
                    >
                      Remove Item
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <footer>
          <div className="border-2 text-center bg-slate-400 p-4">
            <p>© 2023 Your Company Name. All rights reserved.</p>
            <p>123 Main Street, Cityville, Country</p>
            <p>Phone: (123) 456-7890 | Email: info@yourcompany.com</p>
            <p>Website: www.yourcompany.com</p>
            <p>
              <a href="/privacy">Privacy Policy</a> |{" "}
              <a href="/terms">Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default ClassCart;