import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ReimbursementClaimUI from '../Screen/ReimbursementClaim';
import DropDownUI from '../Screen/DropDown';

const screens = {
    ReimbursementClaim:{
        screen: ReimbursementClaimUI,
    },
    DropDown : {
        screen: DropDownUI,
        navigationOptions: {
            title: "Select",
           // headerShown : false,
            
          },
    },
};

const RouteStack = createStackNavigator(screens);

export default createAppContainer(RouteStack);