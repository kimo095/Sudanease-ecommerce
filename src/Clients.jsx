import React, { Component } from "react";

export default class Clients extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Abdelkareem",
        phone: "0912345678",
        address: { city: "Khartoum" },
        photo: "https://picsum.photos/id/1040/60",
      },
      {
        id: 2,
        name: "Abdallah",
        phone: "0918201434",
        address: { city: "WadMadani" },
        photo: "https://picsum.photos/id/1041/60",
      },
      {
        id: 3,
        name: "Alla",
        phone: "0900889921",
        address: { city: "Gedarif" },
        photo: "https://picsum.photos/id/1052/60",
      },
      {
        id: 4,
        name: "Fatima",
        phone: null,
        address: { city: "Kosti" },
        photo: "https://picsum.photos/id/1043/60",
      },
      {
        id: 5,
        name: "Malak",
        phone: null,
        address: { city: "Portsudan" },
        photo: "https://picsum.photos/id/1074/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //When the user clicks on Refresh button it will excute
  onRefreshClick = () => {
    // using setState method to update the state
    // then react updates the Browser DOM automatically
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //When the client clicks on "Change Picture" button in the grid it will excute
  //then Receives the "client" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/103/60";

    //update "clients" array in the state
    this.setState({ customers: custArr });
  };
}
