import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const globalStyles = StyleSheet.create({
  boldText: {
    fontSize: 18,
    //fontWeight: 'bold',
    color: '#fff',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    //padding: 20,
    //backgroundColor : 'coral',
  },
  headerContent:{
    flex : 1,
    backgroundColor: '#00bfbc',

    paddingVertical : 40,
  },
  mainContent:{
    flex : 4,
    backgroundColor: '#FDF7E3',
  },
  footerContaint:{
    height : 80,
    backgroundColor: '#00bfbc',
  },
  actionView:{
    flexDirection: 'row',
    paddingVertical: 20,
    //height: 30,
  },
  titleForm:{
    //backgroundColor : 'green',
    paddingVertical: 10,

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf : 'center'
  },
  activityView:{
    flexDirection: 'row',
    //backgroundColor: 'blue',
    height: 20,
  },
  img:{
    height:25,
    width: 25,
},
btn:{
    alignItems: 'center',
    alignSelf: 'center',
  //  backgroundColor: 'pink',
    paddingTop: 10,
   // margin: 5,
},
btnLbl:{
  fontSize: 12,
  color: "#fff",
  paddingVertical: 5,
  //marginLeft: 10
},
hairline: {
  backgroundColor: '#fff',
  height: 1,
  width: 45,
},
hairlineTrns: {
  width: 30,
},
claimDetailsTxt:{
  fontSize : 20,
  fontWeight: 'bold',
  position: 'absolute',
  left: 10,
  paddingVertical : 10,
},
requiredTxt:{
  fontSize : 15,
  position: 'absolute',
  right: 10,
  fontStyle : 'italic',
  paddingVertical : 10,
  color: 'red',
}
});