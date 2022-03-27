import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD7E5',
    width: "100%",
    padding: 16,
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
  },

  // chat
  containerChat: {
    padding: 16,
  },

  sendSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  inputMessage: {
    width: '72%',
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 16,
  },

  buttonMessage: {
    width: '25%',
    backgroundColor: '#6cc7f5',
    borderRadius: 10,
    padding: 16,
  },

  textButtonMessage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  // chatItem
  flatListItem: {
    marginBottom: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  smallAvatar: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#484655",
    borderRadius: 50,
    marginRight: 16,
    position: 'absolute',
    left: -8,
    top: -8,
  },

  message: {
    backgroundColor: '#fff',
    padding: 26,
    borderRadius: 20,
    marginLeft: 16,
    marginTop: 16,
  },

  chatText: {
    marginTop: 8,
  },

  smallItalicText: {
    fontSize: 10,
    fontStyle: 'italic',
  },

});