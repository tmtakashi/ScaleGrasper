import React from "react";
import variables from "../../variables.scss";

const Footer = props => {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            background-color: ${variables.primaryColor};
            width: 100%;
            height: 3%;
            position: fixed;
            bottom: 0;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
