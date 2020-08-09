import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003145',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#8996a0',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: '#ff8800',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okButtonText: {
    color: '#003145',
    fontSize: 20,
    fontFamily: 'Archivo_700Bold'
  }

});

export default styles;