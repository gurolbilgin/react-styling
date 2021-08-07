import styles from './moduleBtn.module.css' // we can use any name instead of styles 

const ModuleBtn = ({btnClass, btnName}) => {
  console.log(btnClass);
  return(
    <div className={styles.main}>
      <button className={styles[btnClass]
      //we need to use square bracket notation when we are calling object properties with assinging a value instead of using dot 
    }> {btnName} 
      </button>
    </div>
  )

}

export default ModuleBtn;