import React, { useState } from "react";
import { View, Image, Text, TextInput, Button } from "react-native";
import ImageChooser from "./ImageChooser";
import Styles from "./Styles";

type PersonalInfoProps = {
  onClosed: (name: string, image: string) => void;
};

const PersonalInfo = ({ onClosed }: PersonalInfoProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <View style={Styles.personalInfoContainer}>
      <Image source={require("../assets/chatbot.png")} style={Styles.logo} />

      <View style={Styles.enterYourNameContainer}>
        <Text style={Styles.nameText}>Please, enter your name</Text>
        <TextInput 
          style={Styles.inputText} 
          placeholder={"Your name"} 
          onChangeText={(text) => setName(text)} 
          value={name} 
        />
      </View>

      <ImageChooser onChangeImage={(image) => setImage(image)} />
      
      <Button 
        title="Start chatting!" 
        onPress={() => { onClosed(name, image) }} 
      />

    </View>
  );
}

export default PersonalInfo;