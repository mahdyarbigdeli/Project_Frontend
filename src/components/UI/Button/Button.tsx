interface IProps {
  icon: JSX.Element;
  title: string;
  children?: JSX.Element;
  onClick: () => void;
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark"
    | "link";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./styles.module.scss";

export default function Button({
  variant,
  className,
  onClick,
  children,
  icon,
  title,
  disabled = false,
  isLoading = false,
}: IProps) {
  const classes = [styles[variant], styles.button, className].join(" ");

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classes}>
      {isLoading === true && (
        <>
          <span>درحال پردازش</span>
          <Icon icon='line-md:loading-alt-loop' />
        </>
      )}

      {isLoading === false && (
        <>
          <span>{title}</span>
          {children}
          {icon}
        </>
      )}
    </button>
  );
}
