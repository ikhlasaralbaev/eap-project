import { UserIcon } from "assets/images";
import { Link } from "react-router-dom";
import Flex from "../flex/flex";

const LoginRegisterLink = () => {
  return (
    <Flex className="gap-[10px] sm:hidden md:flex" align="center">
      <img src={UserIcon} alt="user icon / login, register icon" />
      <Flex className="gap-[10px]">
        <Link className="hover:text-primary" to={"/"}>
          Вход
        </Link>{" "}
        /{" "}
        <Link className="hover:text-primary" to={"/"}>
          Регистрация
        </Link>
      </Flex>
    </Flex>
  );
};

export default LoginRegisterLink;
