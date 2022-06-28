import PropTypes from "prop-types";
import styles from "./MainPage.module.css";

import cameraIcon from "./../../shared/help-video-icon.png";
import TabSection from "./TabSection";
import { useState } from "react";

function MainPage(props) {
  const [route, setRoute] = useState("all");

  const routeTo = (routeArg) => {
    setRoute(routeArg);
  };
  return (
    <div>
      <header className={styles["header"]}>
        <div className={styles["main-heading"]}>
          <h1 style={{ display: "inline" }}>Virtual Cards</h1>
          &nbsp;&nbsp;&nbsp;
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className={styles["help-pill"]} href="#">
            <img src={cameraIcon} height="20px" alt="help-video" /> Learn more
          </a>
        </div>
        <div className={styles["new-card"]}>
          <span style={{ fontSize: "26px" }}>+</span> &nbsp;Virtual Card
        </div>
      </header>
      <nav className={styles["nav"]}>
        {["Your", "All", "Blocked"].map((pageName) => {
          const routeName = pageName.toLocaleLowerCase();
          return (
            <span
              onClick={() => routeTo(routeName)}
              style={
                routeName === route
                  ? { borderBottom: "3px solid darkorange" }
                  : {}
              }
              key={routeName}
            >
              {pageName}
            </span>
          );
        })}
      </nav>
      <hr />
      <TabSection route={route} />
    </div>
  );
}

MainPage.propTypes = {
  route: PropTypes.oneOf(["your", "all", "blocked"]),
};

MainPage.defaultProps = {
  route: "all",
};

export default MainPage;
