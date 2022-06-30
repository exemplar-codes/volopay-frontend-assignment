import PropTypes from "prop-types";
import styles from "./MainPage.module.css";

import cameraIcon from "./../../shared/help-video-icon.png";
import { useState } from "react";
import FilterAndTab from "./FilterAndTab/FilterAndTab";

let data = [
  {
    orderId: 0,
    name: "Apple",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "burner",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
  {
    orderId: 1,
    name: "Amazon",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "subscription",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
  {
    orderId: 2,
    name: "Coca-Cola",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "subscription",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
];

const scrollLimit = 54;

function MainPage(props) {
  const [route, setRoute] = useState(
    ["/all", "/your", "blocked"].includes(window.location.pathname)
      ? window.location.pathname.replace("/", "")
      : "all"
  );

  const routeTo = (routeArg) => {
    window.history.pushState({}, "", "/" + routeArg);
    setRoute(routeArg);
  };

  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    const scrollPercentage = (100 * this.scrollY) / document.body.scrollHeight;
    if (scrollPercentage > 20) {
      if (!(viewsData.length > scrollLimit)) {
        setViewsData((prevViews) => [...prevViews, ...data]); // add 3 data points, mocking server fetch
      }
    }
  };

  const [viewsData, setViewsData] = useState([
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ]);

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
                  ? { borderBottom: "5px solid darkorange" }
                  : {}
              }
              key={routeName}
            >
              {pageName}
            </span>
          );
        })}
        <div></div>
      </nav>
      <br />
      <FilterAndTab route={route} viewsData={viewsData} />
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
