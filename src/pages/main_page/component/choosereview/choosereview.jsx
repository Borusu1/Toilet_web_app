import React, { useState, useEffect } from "react";
import styles from "./choosereview.module.css";
import WriteReview from "../writereview/writereview.jsx";
import View_review from "../viewreview/viewreview.jsx";

const review = (marker_id) => {
  const [writeReview, openWriteReview] = useState([]);
  const [viewReview, opeViewReview] = useState([]);

  const addWriteReview = () => {
    const newParagraphs = [...writeReview, <WriteReview marker_id={marker_id} key={1}/>];
    openWriteReview(newParagraphs);
    handleHeaderClick();
  };

  const addViewReview = () => {
    const newParagraphs = [...viewReview, <View_review marker_id={marker_id} key={1}/>];
    opeViewReview(newParagraphs);
    handleHeaderClick();
  };

  const [showComponent, setShowComponent] = useState(true);

  const handleHeaderClick = () => {
    setShowComponent(false);
  };

  return (
    <>
      {showComponent && (
        <div className={styles.container}>
          <div className={styles.exitandtext}>
            <div className={styles.exit}>
              <svg
                width="18"
                height="24"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.30121 7.29944C3.90874 7.68795 3.90551 8.32105 4.29399 8.71356L9.06537 13.5344C9.45397 13.9271 9.45059 14.5604 9.05782 14.9489L8.69533 15.3074C8.30276 15.6957 7.6698 15.6923 7.28139 15.2999L0.744658 8.69532C0.356154 8.30278 0.359422 7.66963 0.751956 7.28112L7.35624 0.744642C7.74878 0.356138 8.38193 0.359405 8.77044 0.75194L9.12853 1.11375C9.51701 1.50625 9.51377 2.13935 9.1213 2.52787L4.30121 7.29944Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.text}>Choose what you want to do</div>
          </div>
          <div className={styles.button_box}>
            <button onClick={addWriteReview}>Write a review</button>
            <button onClick={addViewReview}>View reviews</button>
          </div>
        </div>
      )}
      {writeReview}
      {viewReview}
    </>
  );
};

export default review;
