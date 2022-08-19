import React from "react";

const Cart = ({ user }) => {
  return (
    <>
      <div
        className="wrapper_user"
        style={{
          border: "2px solid red",
          width: "40%",
          padding: "10px",
          margin: "10px",
        }}
      >
        <div className="container">
          <div className="cart">
            <div className="userId">
              <h1>userId :{user.id}</h1>
            </div>

            <div className="title">
              <h2>Name : {user.name}</h2>
            </div>
            <div className="userName_email">
              <h4>userName : {user.username}</h4>
              <h4>Email : {user.email}</h4>
            </div>

            <div className="address">
              <p className="street">street : {user.address.street}</p>
              <p className="street">suite : {user.address.suite}</p>
              <p className="street">city : {user.address.city}</p>
              <p className="street">zipcode : {user.address.zipcode}</p>

              <div className="geo">
                <p className="street">lat : {user.address.geo.lat}</p>
                <p className="street">lng :{user.address.geo.lng}</p>
              </div>
            </div>

            <div className="phone_number">
              <p className="phone">phone : {user.phone}</p>
            </div>
            <div className="website_comp">
              <p className="website">website : {user.website}</p>
            </div>

            <div className="company">
              <p className="name">name : {user.company.name}</p>
              <p className="catchPhrase">
                catchPhrase : {user.company.catchPhrase}
              </p>
              <p className="bs">bs : {user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
