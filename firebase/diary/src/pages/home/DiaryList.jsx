import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryList({ diaries }) {
  function formattingTime(seconds) {
    const date = new Date(seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}.${month}.${day}.${dayOfWeek}`;
  }

  const { deleteDocument } = useFireStore("diary");

  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <article className={styles["diary-article"]}>
              <h3 className={styles["article-title"]}>{item.title}</h3>
              <time className={styles["article-time"]} dateTime="2023-03-15">
                2023.02.24.THU
              </time>
              <p className={styles["article-content"]}>{item.text}</p>

              <div className={styles["button-group"]}>
                <button type="button">
                  <img src={iconEdit} alt="수정" />
                </button>
                <span></span>
                <button type="button" onClick={() => {}}>
                  <img src={iconDelete} alt="삭제" />
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </>
  );
}
