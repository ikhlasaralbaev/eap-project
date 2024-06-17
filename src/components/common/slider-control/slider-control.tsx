import { ArrowLeft, ArrowRight } from "assets/images";
import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./slider-control.module.scss";

interface Props {
  position: "right" | "left";
}

const SliderControl = forwardRef<HTMLButtonElement, Props>(
  ({ position }, ref) => {
    return (
      <button
        className={classNames(
          styles.sliderControl,
          position === "right" ? styles.right : styles.left,
        )}
        ref={ref}
      >
        {position === "left" ? (
          <img src={ArrowLeft} alt="arrow left" />
        ) : (
          <img src={ArrowRight} alt="arrow right" />
        )}
      </button>
    );
  },
);

export default SliderControl;
