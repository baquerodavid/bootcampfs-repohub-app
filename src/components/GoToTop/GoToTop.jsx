import { useState, useEffect } from "react";
import arrowUp from '../../assets/ArrowUp.svg';
import styles from "./GoToTop.module.css";

function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleShowButton = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', toggleShowButton);

    return () => {
      window.removeEventListener('scroll', toggleShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ display: showButton ? 'block' : 'none' }}
      className={styles.goToTop}
    >
      <img src={arrowUp} alt="" />
    </button>
  );
}

export default GoToTop;