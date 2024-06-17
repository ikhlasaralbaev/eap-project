import { CommentIcon } from "assets/images";
import { Link } from "react-router-dom";
import styles from "./footer-comment.module.scss";

const FooterComment = () => {
  return (
    <Link className={styles.footerComment} to={"/"}>
      <img
        className={styles.footerCommentIcon}
        src={CommentIcon}
        alt="comment icon"
      />

      <div>
        <h2>Консультация Online</h2>
        <span>Задавайте вопросы</span>
      </div>
    </Link>
  );
};

export default FooterComment;
