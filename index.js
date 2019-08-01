import React, { Fragment } from "react";
import ReactDom from "react-dom";

import "./main.css";

// Create the app
const App = () => {
  const linkImageStyle = {
    backgroundImage:
      `url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png\")`
  };

  return (
    <Fragment>
      <nav className="navigation">
        <a>
          <img
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
        </a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
          <form>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label
                htmlFor="linkTitle"
                className="formLabel">
                Enter your bookmark name
              </label>
              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div>
              <label
                htmlFor="linkHref"
                className="formLabel">
                Enter your bookmark link
              </label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="rightContent">
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
          <div className="linkCard">
            <div className="linkCardImage"
              style={linkImageStyle}
            />
            <div className="linkCardLink">
              <h2>
                <a href="#">My link!</a>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

ReactDom.render(
  <App />,
  document.getElementById("app")
);
