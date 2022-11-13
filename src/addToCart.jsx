import React, { Component } from "react";
import Items from "./Items";

export default class ShoppingCart extends Component {
  //To be excuated when you mount the component
  constructor(props) {
    super(props); // In this case we have to call the super class's constructor
    //First initiate of the state
    this.state = {
      products: [],
    };
  }
  render() {
    return (
      <div>
        <h4>Add to your cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Items
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Items>
            );
          })}
        </div>
      </div>
    );
  }
  // your rendering should be ended at this point 

  //Executes to be take place after constructor and render method 
  //(includes life cycle of child components,if any) of current component
  componentDidMount = async () => {
    //send request to server to get my items details
    var response = await fetch("http://localhost:5000/items", {
      method: "GET",
    });

    // after receiving response from server then the next code executes and then it will
    //convert the response body into a Javascript object array
    var prods = await response.json();

    // after converting response body into JavaScript
    // object arraythe following code executes
    console.log(prods);

    //update your  items deatils into component's state
    this.setState({ products: prods });

  };

  //Executes when the current instance of current component is being removed from memory
  componentWillUnmount() {
  }

  componentDidCatch(error, info) {

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on Delete (X) button in the Product component.
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
