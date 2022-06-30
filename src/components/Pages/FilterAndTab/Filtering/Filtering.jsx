import FilterByName from "./FilterByName";
import styles from "./Filtering.module.css";
import GeneralFilter from "./GeneralFilter/GeneralFilter";

function Filtering(props) {
  return (
    <div className={styles["filtering"]}>
      <FilterByName
        setFilterByNameKey={props.setFilterByNameKey}
        filterByNameKey={props.filterByNameKey}
      />
      &nbsp; &nbsp;
      <GeneralFilter
        setFilterByCardType={props.setFilterByCardType}
        setFilterByOwnerName={props.setFilterByOwnerName}
        filterByCardType={props.filterByCardType}
        filterByOwnerName={props.filterByCardType}
        ownerNames={props.ownerNames}
      />
    </div>
  );
}

export default Filtering;
