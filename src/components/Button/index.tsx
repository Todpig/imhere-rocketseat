import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  content: string;
  variant: variant;
  onPress?: () => void;
}

type variant = "primary" | "secondary";

export function Button({ content, variant, onPress }: ButtonProps) {
  const buttonStyle =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
}
