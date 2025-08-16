import styles from "./Button.module.scss"
import {ArrowBackIcon } from '../../assets/svg/ArrowBackIcon'
import { ArrowForwardIcon } from '../../assets/svg/ArrowForwardIcon'

export const Button = (props) => {
  const {
    className,
    children,
    tag = 'button',
    download,
    to,
    action, // "back", "next", or undefined
    type = "button",
    onClick,
    ...otherProps
  } = props;

    const renderIcon = () => {
    if (action === "back") return <ArrowBackIcon className={styles.arrow} />;
    if (action === "next") return <ArrowForwardIcon className={styles.arrow} />;
    return null;
  };

  
const buttonContent = (
  <>
    {action === "back" && renderIcon()}
    {children}
    {action === "next" && renderIcon()}
  </>
);

  const commonProps = {
    className: className ? `${styles.button} ${className}` : styles.button,
    ...otherProps,
  };

  const linkProps = tag === "Link" ? { to, ...otherProps } : {};
  const buttonProps = tag === "button" ? { onClick, type, ...otherProps } : {};

if (tag === "Link" && download) {
    return (
      <a href={to} download {...commonProps}>
        {buttonContent}
      </a>
    );
  }

  return tag === "Link" ? (
    <Link {...commonProps} {...linkProps}>
      {buttonContent}
    </Link>
  ) : (
    <button {...commonProps} {...buttonProps}>
      {buttonContent}
    </button>
  );
};

