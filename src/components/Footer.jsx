import React from 'react';

export default function Footer() {

    const date = new Date();
  return (
      <footer 
      className="bg-primary text-center text-lg-start container-fluid">
      <div className="col-md-12 text-center mt-12 mb-12">
      <h6 className="mt-5">© BIS {date.getFullYear()}</h6>
      </div>
      </footer>
  );
}
