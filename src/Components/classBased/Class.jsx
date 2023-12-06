import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribed: false,
      text1: "Please Subscribe",
      text2: "Unsubscribe",
      currentIndex: 0,
      images: [
        "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1628784230353-5bee16e2f005?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      employees: [
        {
          name: "Akhil",
          age: "22",
          gender: "Male",
        },
        {
          name: "Abcd",
          age: "23",
          gender: "Male",
        },
        {
          name: "Efgh",
          age: "32",
          gender: "Male",
        },
      ],
      newImage:"https://images.unsplash.com/photo-1517329782449-810562a4ec2f?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };
  }

  handleClick = () => {
    this.setState({ isSubscribed: !this.state.isSubscribed });
  };

  handleImagePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.images.length) %
        prevState.images.length,
    }));
  };

  handleImageNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };
  addImage = (image) => {
    this.setState((prevState) => ({
      images: prevState.images.concat(image),
    }))
  }

  render() {
    return (
      <div>
        <div className="flex justify-center gap-10">
          <div>
            <button
              className="border-2 border-sky-500 mt-36  bg-slate-500 text-white p-2 rounded-md"
              onClick={this.handleImagePrev}
            >
              Previous
            </button>
          </div>
          <div>
            <img
              className="w-96 h-96"
              src={this.state.images[this.state.currentIndex]}
              alt="image"
            />
          </div>
          <div>
            <button
              onClick={this.handleImageNext}
              className="border-2 border-sky-500 mt-36  bg-slate-500 text-white p-2 rounded-md "
            >
              Next
            </button>
          </div>
        </div>
        <button onClick={() => this.addImage(this.state.newImage)} className="border-2 border-sky-300 m-4 bg-slate-500 text-white p-2 rounded-md ml-[590px]">Click to Add</button>
        <button
          onClick={this.handleClick}
          className="border-2 border-sky-300 m-4 bg-slate-500 text-white p-2 rounded-md ml-[570px]"
        >
          {this.state.isSubscribed ? this.state.text2 : this.state.text1}
        </button>


        <div>
          <h1 className="flex justify-between ">
            {this.state.employees.map((val, ind) => (
              <div key={ind}>
                <Card style={{ width: "18rem" }} className="border-2 border-cyan-400">
                  <Card.Img
                    variant="top"
                    src={this.state.images[this.state.currentIndex]}
                    className="w-full h-[200px]"
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="border-2 border-sky-500  bg-slate-500 text-white p-2 rounded-md w-6/12 ml-16"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </h1>
        </div>
      </div>
    );
  }
}

export default MyComponent;
