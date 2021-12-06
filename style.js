import {StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  
    boxFora: {
      flex: 1,      
      backgroundColor: '#000000', 
    },
  
    container: {
      flex: 1,           
      borderRadius: '0%',        
      marginLeft: '2%', 
      marginTop: '3%',
      marginRight: '2%',
      marginBottom: '3%',  
      backgroundColor: '#F0F8FF',     
    },
    
    boxTitle: {
      padding: '6%',
      backgroundColor: '#b22222',       
    },

    boxTitleBase: {
        padding: 30,
        backgroundColor: '#b22222',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white'      
    }, 

    checkboxContainer: {
      flexDirection: "row",
      marginTop: '1%',
      alignSelf: "center",   
      alignItems: 'center',     
    },
    
    label: {
      margin: 8,
    },
  
    textTitle: {    
      textAlign: 'center',   
      lineHeight: 26,
      fontWeight: 'bold',
      fontSize: 16,   
      color: 'white' 
    },
  
    textSubTitle: {      
      paddingTop: '9%',    
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    textCad: {
      marginLeft: '5%',
      marginTop: '3%',
      textAlign: 'left',
      paddingBottom: '2%',
      color: '#000000', 
      fontWeight: 'bold',
    },

    boxCad: {
      backgroundColor: '#dcdcdc',
      paddingBottom: '5%',      
      paddingTop: '2%',
      marginTop: '5%',    
    },

    boxContainerCad: {      
      marginRight: '2%',
      marginLeft: '2%',
      paddingBottom: '3%',
    },

    butaoBack: {
      padding: '1%',
      backgroundColor: '#0000', 
      color: '#0000',
      borderWidth: 1,        
      borderBottomEndRadius: 10, 
      borderBottomLeftRadius: 10,     
    },

    textButaoCad: {
      fontSize: 16,   
      color: 'white',
      textAlign: 'center',   
      lineHeight: 26,
      fontWeight: 'bold',
      backgroundColor: 'green',
    },

    textSubTitleLogin: {      
        padding: 10,         
        backgroundColor: '#afeeee',           
        fontSize: 18,
        textAlign: 'center',
        paddingRight: '30%',
        fontWeight: 'bold',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    boxTextComun: {        
        //borderWidth: 2,
        //borderRadius: 15,
        backgroundColor: '#f0f8ff',        
        //paddingBottom: '3%',
        //marginBottom: '5%', 
        margin: '3%',  
        //marginRight: '3%',  
        //marginLeft: '3%',    
    },
  
    textComunm: {   
      fontSize: 14,
      paddingTop: '4%',  
      paddingBottom: '2%',   
      paddingLeft: '6%',      
      fontWeight: 'bold',
      textAlign: 'justify',    
    }, 

    textInput: {
        height: 40,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },

    textButao: {
        padding: 5,
        backgroundColor: '#0000cd',  
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white',  
        marginRight: 20,
        marginLeft: 20,  
        borderWidth: 1,        
        borderBottomEndRadius: 10, 
        borderBottomLeftRadius: 10,     
    },  

    textButaoComun: {
        padding: 5,
        backgroundColor: '#8b008b',  //borda dos botões
        textAlign: 'center',   
        lineHeight: 26,
        fontWeight: 'bold',
        fontSize: 16,   
        color: 'white',  
        marginRight: 20,
        marginLeft: 20,  
        borderWidth: 1,        
    },

    textComunmLogin: {   
        fontSize: 14,
        paddingTop: 50,  
        paddingBottom: 5,  
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify',         
    }, 
  
    textCorpo: {
      paddingTop: '2%',
      paddingBottom: '2%',
      borderWidth: 2,
      borderRadius: 30,
      //marginRight: '3%',
      //marginLeft: '3%',
      margin: '5%',
    },

    textCorpoLogin: {
      paddingTop: '7%',
      paddingBottom: '7%',      
    },

    selectBox: {
      height: 35, 
      width: '97%', 
      alignSelf: 'center' 
    }
  
  });

  export default styles; 