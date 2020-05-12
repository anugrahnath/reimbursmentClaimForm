import React, {useSate} from 'react';
import { ListItem } from 'react-native-elements'
import {View,FlatList, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {globalStyles} from '../Styles/global';


export default function DropDownUI({ navigation}){
    const dataAll =  navigation.getParam('data');
    const keyIndex =  navigation.getParam('key');

    const screenBFun = (params) => (
        // console.log("params print:: "),
        // console.log(params),
      //Alert.alert(navigation.getParam('key')),
      navigation.navigate('ReimbursementClaim', { "post": params.text, 'keyIndex' : keyIndex, })
 
      )

    

   // const { onPressScreenAFun } = this.props.navigation.navigate.state.params

  // onPressScreenAFun(params)
   //this.props.navigation.goBack()
 

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={dataAll}
                renderItem = {({item,i}) => (
                    <ListItem
                    key={i}
                    title={item.text}
                    onPress = {() => screenBFun(item)}
                    
                    bottomDivider
                  />
                )}
            />

            
        </View>
    );
}

const styles = StyleSheet.create({
    items : {
        padding : 16,
        marginTop : 15,
        borderColor : "#000",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth : 1,
    }
})