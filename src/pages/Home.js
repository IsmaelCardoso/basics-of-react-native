import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  const handleAddNewSkill = () => {
    setMySkill((oldSkills) => [...oldSkills, newSkill]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Skills</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills:</Text>

      {mySkill.map((skill) => (
        <SkillCard key={skill}>{skill}</SkillCard>
      ))}
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
});

export default Home;
