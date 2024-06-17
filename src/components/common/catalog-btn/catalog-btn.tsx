import { CatalogIcon } from "assets/images";
import { FC } from "react";

const CatalogBtn: FC = () => {
  return (
    <button className="flex items-center gap-[10px] rounded-[8px] bg-primary px-[20px] py-[12px] text-[16px] font-semibold text-white active:opacity-70">
      <img src={CatalogIcon} alt="catalog icon, category icon" />
      Все каталоги
    </button>
  );
};

export default CatalogBtn;
