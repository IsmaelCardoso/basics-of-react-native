import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState<string>("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState("");

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills(oldSkills => [...oldSkills, data]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldSkills => oldSkills.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    const curretHour = new Date().getHours();
    if (curretHour < 12) {
      setGretting("Good morning");
    } else if (curretHour >= 12 && curretHour < 18) {
      setGretting("Good afternoon");
    } else if (curretHour >= 18) {
      setGretting("Good night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Skills</Text>

      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills: </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: "#fff",
  },
});

export default Home;
