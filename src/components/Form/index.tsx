import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import React, { useState } from "react";

interface FormProps {
  participants: string[];
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Form({ participants, setParticipants }: FormProps) {
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista"
      );
    }
    setParticipants((prevState) => [...prevState, newParticipant]);
    setNewParticipant("");
  }
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        <Button content="+" variant="primary" onPress={handleParticipantAdd} />
      </View>
    </>
  );
}
