import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, Alert } from 'react-native';
import { globalStyles } from '../Styles/global';
import ListItemsView from '../Component/ListItems';

export default function ReimbursementClaimUI({ navigation, route }) {



    const [activityClaim, setActivityClaim] = useState([
        { text: "Claim Details", checked: 1, key: 0 , position: 1 },
        { text: "Needed Documents", checked: 0, key: 1 , position: 2 },
        { text: "Payment Method", checked: 0, key: 2, position: 3 },
        { text: "Confirmation", checked: 0, key: 3, position: 4 }
    ]);

    const [claimsDetailsField, setClaimsDetailsField] = useState([
        {
            text: "Select Member", name: 'member', isRequired: 1, key: 0, fieldType: 'select', placeholder: 'Select',
            data: [
                { text: 'Member 1' },
                { text: 'Member 2' },
                { text: 'Member 3' },
                { text: 'Member 4' },
                { text: 'Member 5' },
                { text: 'Member 6' },
            ]
        },
        {
            text: "Healthcare Provider Country", name: 'country', isRequired: 1, key: 1, fieldType: 'select', placeholder: 'Select',
            data: [
                { text: 'Afghanistan' },
                { text: 'Bahrain' },
                { text: 'Bangladesh' },
                { text: 'Bhutan' },
                { text: 'China' },
                { text: 'Egypt' },
                { text: 'India' },
                { text: 'Jordan' },
                { text: 'Kuwait' },
                { text: 'Kyrgyzstan' },
                { text: 'Malaysia' },
                { text: 'Maldives' },
                { text: 'Nepal' },
                { text: 'Oman' },
                { text: 'Pakistan' },
                { text: 'Qatar' },
                { text: 'Saudi Arabia' },
                { text: 'United Arab Emirates' },

            ]
        },
        {
            text: "Service Type", name: 'service', isRequired: 1, key: 2, fieldType: 'select', placeholder: 'Select',
            data: [
                { text: 'Service 1' },
                { text: 'Service 2' },
                { text: 'Service 3' },
                { text: 'Service 4' },
                { text: 'Service 5' },
            ]
        },
        { text: "Service Date", isRequired: 1, key: 3, fieldType: 'input', placeholder: 'dd-mm-yyyy' },
        { text: "Claim Amount", isRequired: 1, key: 4, fieldType: 'input', placeholder: 'Enter Amount' },
        {
            text: "Currency", name: 'currency', isRequired: 1, key: 5, fieldType: 'select', placeholder: 'Select',
            data: [
                { text: 'Currency 1' },
                { text: 'Currency 2' },
                { text: 'Currency 3' },
                { text: 'Currency 4' },
                { text: 'Currency 5' },
            ]
        },
        { text: "Add Notes", isRequired: 0, key: 6, fieldType: 'Text', placeholder: 'Text here..' }
    ])

    const claimsAction = (itemData) => {

        activityClaim.map(function (item, index) {
            if (index == itemData.key) {
                
                item.checked = 1
            }

        })
        
        // setActivityClaim((item) => {
        //     return (item.checked = 1)

        // })

       // console.log(itemData)

       // Alert.alert(itemData.text);
    }

    const onPressSelectHandler = (item) => {
       // Alert.alert("You here");
        navigation.navigate('DropDown', item);
    }

// Set the selected dropdown data

    if (navigation.getParam('post')) {
        claimsDetailsField.map(function (item, index) {
            if (index == navigation.getParam('keyIndex')) {
                item.placeholder = navigation.getParam('post')
            }

        })
    }

    return (

        <View style={globalStyles.container}>
            {/* body */}
            <View style={globalStyles.headerContent}>
                {/* header action */}
                <View style={globalStyles.actionView}>
                    <TouchableOpacity style={{ position: 'absolute', left: 20 }}>
                        <Text style={globalStyles.boldText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                        <Text style={globalStyles.boldText}>Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Title form view */}
                <View style={globalStyles.titleForm}>
                    <Text style={globalStyles.titleText} >
                        Submit Reimbursement Claims
                    </Text>
                </View>

                {/* activity view */}
                <View style={globalStyles.activityView} >
                    <TouchableOpacity>
                        <Text style={globalStyles.boldText}>   Policy Number</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                        <Text style={globalStyles.boldText}>000001 -></Text>
                    </TouchableOpacity>

                </View>
                {/* Radio Btn  */}
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    {activityClaim.map((item) => {
                        return (
                            <View>
                                {item.checked == 1 ?
                                    <TouchableOpacity style={globalStyles.btn}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            {item.position == 1 ?
                                                <Text style={globalStyles.hairlineTrns}></Text>
                                                :
                                                <Text style={globalStyles.hairline}></Text>
                                            }
                                            <Image style={globalStyles.img} source={require("../icons/checkedBtn.png")} />
                                            <Text style={globalStyles.hairline}></Text>
                                        </View>

                                        <Text style={globalStyles.btnLbl}>{item.text}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => claimsAction(item)} style={globalStyles.btn}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={globalStyles.hairline}></Text>
                                            <Image style={globalStyles.img} source={require("../icons/uncheckedBtn.png")} />
                                            {item.position == 4 ?
                                                <Text style={globalStyles.hairlineTrns}></Text>
                                                :
                                                <Text style={globalStyles.hairline}></Text>
                                            }

                                        </View>
                                        <Text style={globalStyles.btnLbl}>{item.text}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })}



                </View>

            </View>
            {/* Main Containt */}
            <View style={globalStyles.mainContent}>
                <View style={{ height: 60 }}>
                    <Text style={globalStyles.claimDetailsTxt}>Claim Details</Text>
                    <Text style={globalStyles.requiredTxt}>* Required</Text>
                </View>
                <View style={{ padding: 20, }}>
                    <FlatList
                        keyExtractor={(item, index) => item.key.toString() + index}
                        data={claimsDetailsField}
                        renderItem={({ item }) => (
                            <ListItemsView item={item} onPressSelectHandler={onPressSelectHandler} />
                        )
                        }
                    />

                </View>
            </View>
            {/* footer Containt */}
            <View style={globalStyles.footerContaint}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 25, color: 'white', alignSelf: 'center', paddingVertical: 10 }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}