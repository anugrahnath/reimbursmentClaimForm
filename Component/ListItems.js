import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text,Image, TextInput} from 'react-native';

export default function ListItemsView({item, onPressSelectHandler}){

    return (

        <View style={styles.itemView}>
            
            
            {item.isRequired == 1 ? 
            <View style={{ width:"50%"}}>
            <Text style = {styles.items} > {item.text}
            <Text style={{color:'red', fontSize: 20}}>*</Text>
            </Text>
            </View>
            :
            <View style={{ width:"50%"}}>
            <Text style = {styles.items}>{item.text}</Text>
            </View>
            }

            {item.fieldType == 'select' ? 
            <View style={{ width:"50%", }}>
            <TouchableOpacity 
            style={{
            position:'absolute', 
            right:10, 
            width: "80%", 
            //flexDirection: 'row',  
            alignItems: 'flex-end'}}
            onPress = {() => onPressSelectHandler(item)}

            >
            <Text style = {styles.items}>{item.placeholder}
            <Image style={{width: 15, height: 15, }} source={require('../icons/arrow.png') }/>
            </Text>
            
            </TouchableOpacity>
            </View>
            :
            <View style={{width:"50%", alignItems: 'flex-end', justifyContent: 'center'}}>
            <TextInput placeholder = {item.placeholder}/>
            </View>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    items : {
        paddingVertical : 10,
       // height: 40,
        fontSize: 15,
    },
    itemView:{
        borderBottomWidth: 1,
        padding: 5,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row'
    }
})