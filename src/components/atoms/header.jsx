import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.children}</h1>
      <style jsx>{`
        header {
          background-color: #21a1c7;
          position: absolute;
          width: 100%;
        }
        header h1 {
          margin-left: 3%;
          user-select: none;
          color: #fff;
          font-weight: lighter;
        }
      `}</style>
    </header>
  );
};

export default Header;
