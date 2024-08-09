/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About: React.FC = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="/picture2.jpg"
        alt="My Picture"
        width="200" // Adjust the width as needed
        height="200" // Adjust the height as needed
      />
      <h1 className="display-5 fw-bold text-body-emphasis">About Me!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Hi! I'm Marc Bronze D. Jestre. I'm a third-year student in Bachelor of Science in Information Technology. I live here in Dipolog City.
        </p>
        <p className="lead mb-4">
          I’m the second oldest sibling in my family, and my birthday is on December 4, 2001.
        </p>
        <p className="lead mb-4">
          You can connect with me on <a href="https://web.facebook.com/jestremarc" target="_blank" rel="noopener noreferrer">Facebook</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
