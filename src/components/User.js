import React from "react";

const User = ({ user }) => {
  const { name, email } = user;
  return (
    <div className="col-md-4 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={require("../assets/img/user.png")}
          alt="User"
          className="card-img-top"
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
