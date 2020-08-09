import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003145',
    justifyContent: 'center',
    padding: 40,
  },
  banner: {
    width:'100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#8996a0',
  },
  buttonSecondary: {
    backgroundColor: '#ff8800',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#003145',
    fontSize: 18,
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#8996a0',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 35,
  }

});

export default styles;