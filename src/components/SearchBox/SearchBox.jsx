import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={styles.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
