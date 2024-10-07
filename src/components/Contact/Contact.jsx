import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p className={styles.infoItem}>
          <FaUser />
          {data.name}
        </p>
        <p className={styles.infoItem}>
          <FaPhone />
          {data.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
