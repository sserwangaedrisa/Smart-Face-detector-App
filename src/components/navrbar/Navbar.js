import React from "react";

const Navbar = ({ pageStateChanger, signInState }) => {
  if (signInState === "yes") {
    return (
      <div>
        <p
          onClick={() => {
            pageStateChanger("signIn");
          }}
          className="pa3 li pointer dim f3 underline grow"
        >
          sign-out
        </p>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            pageStateChanger("signIn");
          }}
          className="pa3 li pointer dim f3 underline grow"
        >
          sign-In
        </p>
        <p
          onClick={() => {
            pageStateChanger("signUp");
          }}
          className="pa3 li pointer dim f3 underline grow"
        >
          sign-up
        </p>
      </div>
    );
  }

  // </nav>
};
export default Navbar;
