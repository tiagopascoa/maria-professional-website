import styles from "./styles.module.css";
import Map from "../Map";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const ContactAndBooking = ({ t }) => {
  return (
    <section className={styles.contactsSection} id="contacts">
      <h2 className={styles.title}>{t("home:contact.contactTitle")}</h2>
      <div className={styles.mapAndContacts}>
        <div className={styles.mapContainer}>
          <Map />
        </div>
        <div className={styles.contactsColumn}>
          <ul className={styles.contactsContainer}>
            <li className={styles.contactRow}>
              <a
                href="https://wa.me/351917174650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLocationOn className={styles.contactIcon} />
                <p className={styles.infoText}>Lisboa | Almada</p>
              </a>
            </li>
            <li className={styles.contactRow}>
              <a href="mailto:mariacmoreira.mtc@gmail.com">
                <MdEmail className={styles.contactIcon} />
                <p className={styles.infoText}>mariacmoreira.mtc@gmail.com</p>
              </a>
            </li>
            <li className={styles.contactRow}>
              <a
                href="https://wa.me/351917174650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdPhone className={styles.contactIcon} />
                <p className={styles.infoText}>+351 917 174 650</p>
              </a>
            </li>
            <li className={styles.contactRow}>
              <a
                href="https://www.instagram.com/mariacmoreira.mtc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className={styles.contactIcon} />
                <p className={styles.infoText}>@mariacmoreira.mtc</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactAndBooking;
