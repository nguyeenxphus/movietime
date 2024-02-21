import styles from "./app_button.module.css";

interface AppButtonProps {
  text: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  canMove?: boolean;
  textSize?: number;
  height?: number;
  width?: number;
  position?: "absolute" | "fixed" | "relative";
  top?: string;
  left?: string;
  opacity?: number;
  padding?: number;
}

export default function AppButton({
  text,
  color,
  textColor,
  onClick,
  canMove = false,
  onMouseEnter,
  textSize = 20,
  height = 80,
  width = 200,
  position,
  top,
  left,
  opacity,
  padding = 8,
}: AppButtonProps) {
  return (
    <div
      className={`${styles.appButton} ${canMove ? styles.runButton : ""}`}
      style={{
        opacity: opacity,
        backgroundColor: color,
        fontSize: textSize,
        height: height,
        width: width,
        position: position,
        top: top,
        left: left,
        padding: padding,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <p style={{ color: textColor }}>{text}</p>
    </div>
  );
}
