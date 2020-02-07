import React from "react";
import variables from "../../variables.scss";

const Header = props => {
  return (
    <header>
      <h1>{props.children}</h1>
      <style jsx>{`
        header {
          background-color: ${variables.primaryColor};
          position: fixed;
          width: 100%;
        }
        header h1 {
          margin-left: 3%;
          user-select: none;
          color: ${variables.headerTextColor};
          font-weight: lighter;
        }
      `}</style>
    </header>
  );
};

export default Header;
