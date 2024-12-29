import styles from "./index.module.css"

function Address(props) {
    const {region, zip} = props.data;
  return (
    <div className={styles.addressBlock}>
        <div className={styles.regionBlock}>{region}</div>
        <div className={styles.zipBlock}>{zip}</div>
    </div>
  )
}

export default Address