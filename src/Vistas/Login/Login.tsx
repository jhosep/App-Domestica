import React, { Component } from 'react';
import {  Image, View } from 'react-native';
import { Input, Divider, Icon } from 'react-native-elements';
import CButton from '../../Componentes/CButton';
import CLabel from '../../Componentes/CLabel';
import StyleLogin  from './Login.css';


const ConstLogin = {
  TextUsuario: 1,
  TextPassword: 2,
  TitleUser: 'Usuario',
  TitlePass: 'Password'
};


/** 
 * Pantalla login, se encarga de recoger los datos de acceso para validar
 * al usuario
 * 
 */
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeEndpoint: '',
      inputNombre: '',
      inputPass: '',
      placeholderUser: ConstLogin.TitleUser,
      placeholderPass: ConstLogin.TitlePass,
      titleUser: '',
      titlePass: '',
      iconEye: 'ios-eye-off',
      securityPass: true,
      user: null,
      loading: false,
    }
  }

  

componentDidMount(){
 
}




  /*Metodo encargado de hacer la validacion de los datos de acceso */
  eventLogin() {
       }

  onChangeInput(value: string, type: number) {
    switch (type) {
      case ConstLogin.TextUsuario:
        this.setState({ inputNombre: value });
        break;
      case ConstLogin.TextPassword:
        this.setState({ inputPass: value })
    }
  }

  onFocus(type, isFocus) {
    switch (type) {
      case ConstLogin.TextUsuario:
        let titleUser = isFocus || this.state.inputNombre !== '' ? ConstLogin.TitleUser : '';
        let placeUser = this.state.inputNombre === '' && !isFocus ? ConstLogin.TitleUser : '';
        this.setState({ titleUser: titleUser, placeholderUser: placeUser });

        break;
      case ConstLogin.TextPassword:
        let titlePass = isFocus || this.state.inputPass !== '' ? ConstLogin.TitlePass : '';
        let placePass = this.state.inputPass === '' && !isFocus ? ConstLogin.TitlePass : '';
        this.setState({ titlePass: titlePass, placeholderPass: placePass });
        break;
    }
  }
  changeIcon = () => {
    this.state.securityPass
      ? this.setState({ iconEye: 'ios-eye', securityPass: false })
      : this.setState({ iconEye: 'ios-eye-off', securityPass: true })
  }
  render() {

    let iconRight = <Icon
      name={this.state.iconEye}
      type='ionicon'
      color='#AAAAAA'
      size={25}
      onPress={() => this.changeIcon()} />
    return (
      <View style={StyleLogin.container} >
             <Divider style={StyleLogin.divisor} />
        <Image source={require('../../../assets/icon.png')} style={StyleLogin.logoArturo} />
        <Input placeholder={this.state.placeholderUser}
          inputStyle={StyleLogin.textbox}
          labelStyle={StyleLogin.textbox}
          label={this.state.titleUser}
          containerStyle={StyleLogin.containerTextBox}
          onChangeText={value => this.onChangeInput(value, ConstLogin.TextUsuario)}
          onBlur={() => this.onFocus(ConstLogin.TextUsuario, false)}
          onFocus={() => this.onFocus(ConstLogin.TextUsuario, true)}
          value={this.state.inputNombre}
        />
        <Input placeholder={this.state.placeholderPass}
          secureTextEntry={this.state.securityPass}
          inputStyle={StyleLogin.textbox}
          labelStyle={StyleLogin.textbox}
          label={this.state.titlePass}
          value={this.state.inputPass}
          containerStyle={StyleLogin.containerTextBox}
          onChangeText={value => this.onChangeInput(value, ConstLogin.TextPassword)}
          onBlur={() => this.onFocus(ConstLogin.TextPassword, false)}
          onFocus={() => this.onFocus(ConstLogin.TextPassword, true)}
          rightIcon={iconRight}
        />
 <Divider style={{ backgroundColor: 'white', height: 20 }} />
        <CButton
          title="Conectar"
          onPress={() => { this.eventLogin(); }}
          
        />
          <Divider style={StyleLogin.divisor} />
        <CLabel title="La tecnologia mejora tu vida" />

        <Divider style={{ backgroundColor: 'white', height: 20 }} />
        
      </View>
    );
  }

}
export default Login;