import { Container } from "components/common";
import ActiveIndicator from "components/common/active-indicator/active-indicator";
import FooterComment from "components/common/footer-comment/footer-comment";
import { footerData } from "mocks/footer.mocks";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <>
          <div className="grid items-start gap-[20px] py-[40px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {footerData.map((item) => (
              <div key={item.title}>
                <h2 className="mb-[20px] text-[18px] font-[500] text-white">
                  {item.title}
                </h2>

                <ul>
                  {item.items.map((subitem) => (
                    <li className="text-lightGray mb-2 opacity-70">
                      <Link to={"/"}>{subitem}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <FooterComment />
              <div className="mt-[20px] flex items-start gap-2">
                <ActiveIndicator />
                <span className="text-white">
                  Сервис работает в обычном режиме
                </span>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <Link to={"/"}>Оферта</Link>
            <Link to={"/"}>Конфиденциальность</Link>
          </div>
        </>
      </Container>
    </footer>
  );
};

export default Footer;
