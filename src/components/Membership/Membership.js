import React from 'react';

function submitForm(e) {
  e.preventDefault();
}
function CreditCard() {
  return (
    <form className="" onSubmit={(e) => submitForm(e)}>
      <textarea></textarea>
    </form>
  );
}

function Membership() {
  return (
    <div className="">
      <h1>Membership</h1>
      <CreditCard></CreditCard>
    </div>
  );
}

export default Membership;
