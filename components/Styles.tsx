import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD7E5',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: "100%",
  },

  scrollContainer: {
    width: "100%",
  },

  // personal info
  personalInfoContainer: {
    flex: 1,
    padding: 20,  
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: { 
    resizeMode: "contain",
    width: 200,
    maxHeight: 150,
  },

  enterYourNameContainer: {
    alignSelf: "center",
    width: "100%",
  },

  nameText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputText: {
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 10,
    fontSize: 18,
    padding: 16,
    backgroundColor: "#fff",
  },

  // ImageChooser
  imageChooserContainer: {
    alignSelf: "center",
  },

  avatar: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "#404040",
  }

});