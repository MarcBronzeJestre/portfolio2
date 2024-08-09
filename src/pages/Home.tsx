// src/components/Featurette.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Home.css';
const Home: React.FC = () => {
  return (
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">
        Hi! I'm Marc Bronze D. Jestre
        </h2>
       {/* <span className= "featurette-heading"> Bachelor of Science In Information Technology</span> */}
        <p className="lead">
        I'm a 3rd year student in Bachelor of Science in Information Technology. I live here in Dipolog City.
        </p>
      </div>
      <div className="col-md-5">
        <img
          src="/picture1.jpg"
          alt="Featurette"
          className="featurette-image img-fluid mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
