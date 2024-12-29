import styles from "./index.module.css"
import Address from "../Address";
import Car from "../Car";

function User(props) {
    const {firstName, lastName, phone, email, address, image, cars} = props.data;
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <img className={styles.cardImage} src={image} alt="Just image" />
      </div>
      <div className={styles.box}>
        {firstName} {lastName}
      </div>
      <div className={styles.box}>
        <div className={styles.phoneNumber}>{phone}</div>
        <div className={styles.email}>{email}</div>
      </div>
      <div className={styles.box}>
         <Address data = {address}/>
      </div>
      <div className={styles.box}>
        <Car data = {cars} />
      </div>
    </div>
  );
}

export default User