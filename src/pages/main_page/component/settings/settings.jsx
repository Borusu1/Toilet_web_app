import React from 'react'
import styles from "./settings.module.css"

const settings = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.curtain}>
        Settings
      </div>
      <div className={styles.setings_menu}>
        <div className={styles.setings_menu_blocks}></div>
        <div className={styles.setings_menu_blocks}></div>
        <div className={styles.setings_menu_blocks}></div>
        <div className={styles.setings_menu_blocks}></div>
        <div className={styles.setings_menu_blocks}></div>
      </div>
    </div>
  )
}

export default settings
