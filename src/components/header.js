import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <img
        className="mb-4"
        src="./assets/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    </React.Fragment>
  );
};

export default Header;
