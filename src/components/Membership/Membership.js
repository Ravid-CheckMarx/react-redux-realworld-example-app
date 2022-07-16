// import React from 'react';
//
// function submitForm(e) {
//   e.preventDefault();
// }
// function CreditCard() {
//   return (
//     <form className="" onSubmit={(e) => submitForm(e)}>
//       <textarea></textarea>
//     </form>
//   );
// }
//
// function Membership() {
//   return (
//     <div className="">
//       <h1>Membership</h1>
//       <CreditCard></CreditCard>
//     </div>
//   );
// }
//
// export default Membership;

import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  isString(x) {
    return /^[a-zA-Z_ ]*$/.test(x);
  }

  isNumeric(number) {
    return +number === +number;
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChangeString = (e) => {
    const { name, value } = e.target;
    if (this.isString(value)) {
      this.setState({ [name]: value });
    }
  };
  handleInputChangeNumber = (e) => {
    const { name, value } = e.target;
    if (this.isNumeric(value)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <div id="PaymentForm">
                <Cards
                  cvc={this.state.cvc}
                  expiry={this.state.expiry}
                  focused={this.state.focus}
                  name={this.state.name}
                  number={this.state.number}
                />
                <br />
                <form>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    name="name"
                    maxLength="22"
                    placeholder="Name"
                    onChange={this.handleInputChangeString}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    class="form-control form-control-lg"
                    type="tel"
                    name="number"
                    maxLength="16"
                    placeholder="Card Number"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    class="form-control form-control-lg"
                    type="tel"
                    name="cvc"
                    maxLength="3"
                    placeholder="cvc"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    class="form-control form-control-lg"
                    type="tel"
                    name="expiry"
                    maxLength="4"
                    placeholder="expiry"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
