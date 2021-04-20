import React from 'react';

const Footer = ({ result }) => {
  return (
    <>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      <div className="result">
        <p>Result :</p>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </>
  );
};

export default Footer;
