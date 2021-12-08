import React from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
import styles from '../../style';

export default function ProteCad ({navigation }) {

     return (
       <View style = {styles.boxFora}> 

            <View style = {styles.container}>
                
               <Text style = {styles.boxTitleBase}>Digite os dados pedidos no Cadastro</Text>
               
               <View style = {styles.boxContainerCad}>
               
                    <View style = {styles.boxCad}>                              
                                        
                        <Text style = {styles.textCad}>Insira o Nome do Item</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Colete de Proteção'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Descrição do Item</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Material de borracha.....'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Ano de Compra</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = '2015'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Foi adquirido: Novo/Semi Novo/Usado</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Usado, comprado com 2 anos de uso'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Importado ou Compra Nacional</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Nacional'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Condições do Item e reparos feitos</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Boas Condições de uso,Foi trocado o a espuma interna....'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                        <Text style = {styles.textCad}>Preço</Text>
                        <TextInput 
                            style = {styles.textInput}
                            placeholder = 'Valor a ser anunciado.'
                            //value={text} tem que criar a variavel
                        ></TextInput> 

                    </View>
                                
                    <View style = {styles.textButaoCad}>
                        <Button                         
                            title = 'Salvar Dados Inseridos'
                            onPress = {() => navigation.navigate('Pagina')}
                        ></Button>  
                    </View>                        
                </View>     
           </View>
       </View>
    )
}