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

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);
  const [gretting, setGretting] = useState("");

  const handleAddNewSkill = () => {
    setMySkill((oldSkills) => [...oldSkills, newSkill]);
  };

  useEffect(() => {
    const curretHour = new Date().getHours();
    console.log(curretHour);
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

      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills:</Text>

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard>{item}</SkillCard>}
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
