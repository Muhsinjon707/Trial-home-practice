import styles from "./index.module.css"

function Car(props) {
    const cars = (props.data);
  return (
    <div className={styles.carsBlock}>
        {
            cars.length > 0 && cars.map((car, index) => {
                return (
                    <div className={styles.carItem} key = {index}>
                        {car}
                    </div>
                );
            })
        }
    </div>
  )
}

export default Car