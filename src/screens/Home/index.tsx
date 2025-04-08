import React, { useState } from "react";
import { FlatList, Text, View, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Form } from "../../components/Form";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 7 de abril de 2025.</Text>
      <Form participants={participants} setParticipants={setParticipants} />
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
          </Text>
        )}
      />
    </View>
  );
}
