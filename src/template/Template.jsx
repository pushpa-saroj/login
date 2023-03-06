import React from "react";

import "./Template.css";

function Template() {
  return (
    <>
      <div className="wrpr text">
        <h1 className="hdng"> Welcome to My World </h1>

        <div className="contnr">
          <div className="p">
            <p>
              Developers, also known as software developers or computer
              programmers, are responsible for developing, coding, installing,
              and maintaining software systems
            </p>
            <div className="contnr2">
              {" "}
              <p>
                Developers, also known as software developers or computer
                programmers, are responsible for developing, coding, installing,
                and maintaining software systems
              </p>
              <div className="contnr3">
                <p>
                  Developers, also known as software developers or computer
                  programmers, are responsible for developing, coding,
                  installing, and maintaining software systems
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contnr4">
            <h4 style={{fontFamily:"cursive" }}>software developers </h4>
            <p> Developers, also known as software developers or computer
                  programmers, are responsible for developing, coding,
                  installing, and maintaining software systems
            </p>
            <button> Go somewhere</button>
        </div> */}
      </div>
      
    </>
  );
}
export default Template;
