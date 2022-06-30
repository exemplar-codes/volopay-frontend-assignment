import FilterByName from "./FilterByName";
import styles from "./Filtering.module.css";

function Filtering(props) {
  return (
    <div className={styles["filtering"]}>
      <FilterByName setFilterByNameKey={props.setFilterByNameKey} filterByNameKey={props.filterByNameKey} />
    </div>
  );
}

export default Filtering;
