import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button
        content="-"
        onPress={onRemove}
        variant="secondary"
      />
    </View>
  );
}
