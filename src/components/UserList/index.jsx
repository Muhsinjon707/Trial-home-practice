import styles from "./index.module.css";
import User from "../User";

function UserList(props) {
  const Users = props.data;
  // console.log("Users: ", Users);

  return (
    <>
      <h1 className={styles.heading}>Users</h1>
      <div className={styles.cardsWrapper}>
        {Users.length > 0 &&
          Users.map((user, index) => {
            // console.log(index, user);
            return <User data={user} key={index} />;
          })}
      </div>
    </>
  );
}

export default UserList;
