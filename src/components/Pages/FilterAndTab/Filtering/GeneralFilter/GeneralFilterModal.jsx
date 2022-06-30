import styles from "./GeneralFilterModal.module.css";
import { PinkRed } from "../../../../../shared/sharedAssets";

function GeneralFilterModal(props) {
  let filter1, filter2, filter3;
  return (
    <div className={styles["general-filter-modal"]}>
      {/* Modal <span>"General Filter On"</span>
      <button onClick={() => props.setGeneralFilterActive(false)}>Back</button> */}
      <p>Filters</p>
      <div style={{ backgroundColor: "#e9e8e8", height: "1.5px" }} />
      <div className={styles["general-filter-modal-inner"]}>
        <div>
          <span className={styles["light-text"]}>Type</span>
          <br />
          <br />
          <div>
            <label
              htmlFor="subscription-check"
              style={{ marginRight: "100px" }}
            >
              <input
                type="checkbox"
                id="subscription-check"
                value={props.filterByCardType === "subscription" && "checked"}
                onClick={() =>
                  (filter1 = () =>
                    props.setFilterByCardType((prevState) =>
                      prevState ? "" : "subscription"
                    ))
                }
              />
              Subscription
            </label>
            <label htmlFor="burner-check">
              <input
                type="checkbox"
                id="burner-check"
                value={props.filterByCardType === "burner" && "checked"}
                onClick={() =>
                  (filter2 = () =>
                    props.setFilterByCardType((prevState) =>
                      prevState ? "" : "burner"
                    ))
                }
              />
              Burner
            </label>
          </div>
        </div>
        <br />
        <div className={styles["light-text"]}>
          <p>Cardholder</p>
          <select
            id="cardholder"
            defaultValue=""
            className={styles["select"]}
            onChange={(e) => {
              filter3 = () => props.setFilterByOwnerName(e.target.value);
            }}
          >
            <option value="">Select cardholder</option>
            {props.ownerNames.map((ownerName, i) => (
              <option value={ownerName} key={i}>
                {ownerName}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className={styles["ctas"]}>
          <div
            style={{ backgroundColor: PinkRed, color: "white" }}
            onClick={() => {
              filter1 && filter1();
              filter2 && filter2();
              filter3 && filter3();
            }}
          >
            Apply
          </div>
          <div
            style={{ boxShadow: "0px 0px 3px 3px #f5f5f5" }}
            onClick={() => props.setGeneralFilterActive(false)}
          >
            Clear
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralFilterModal;
