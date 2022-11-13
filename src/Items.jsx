import React, { Component } from "react";

export default class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
    };
  }

  render() {
  
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              {/* button remove starts here */}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/* button remove ends here */}
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div>$ {this.state.product.price}</div>
          </div>
          {/* end of the card body */}

          <div className="card-footer">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* ends of float-left here */}

            <div className="float-right">{this.props.children}</div>
          </div>
          {/*  ends of card-footer here */}
        </div>
      </div>
    );
  }
}
