import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import Login  from './src/Vistas/Login/Login';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const RootStack = createStackNavigator({
  Login: {screen: Login},

  
},{
  initialRouteName: 'Login',
headerMode:'none'});

const AppContainer = createAppContainer(RootStack);
class App extends Component {


constructor(props){
  super(props);
  this.state = {
 loading: true
  }
}


  render() {
    return (
      <MenuProvider  >
      
      <AppContainer >
   
        </AppContainer>

      </MenuProvider>
   
    );
  }

}
export default App;

