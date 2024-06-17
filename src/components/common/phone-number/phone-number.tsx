import { PhoneIcon } from "assets/images";
import classNames from "classnames";
import { FC } from "react";
import Flex from "../flex/flex";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const PhoneNumber: FC<Props> = ({ className }) => {
  return (
    <Flex className={classNames("gap-[10px]", className)} align="center">
      <img src={PhoneIcon} alt="phone icon" />
      <span className="text-[16px] font-[600]">+998 (71) 123-45-67</span>
    </Flex>
  );
};

export default PhoneNumber;
