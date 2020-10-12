import React, { Component } from 'react';
import { View, Text, TouchableOpacity,TouchableNativeFeedback, TextInput, Keyboard } from 'react-native';
import Icons from "react-native-vector-icons/MaterialIcons";
import { ProgressBar } from "react-native-paper";
import Colors from "../../theme/colors";
import TouchableItem from '../../components/TouchableItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class AddNameRest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      firstNameFocused: false,
      lastName: '',
      lastNameFocused: false,
      businessName: '',
      businessNameFocused: false,
      emailAdd: '',
      emailAddFocused: false,
      borderColor: false
    }
  }

  componentDidMount = () => {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  };

  // avoid memory leak
  componentWillUnmount = () => {
    clearTimeout(this.timeout);
    this.keyboardDidHideListener.remove();
  };

  keyboardDidHide = () => {
    this.setState({
      firstNameFocused: false,
      lastNameFocused: false,
      businessNameFocused: false,
      emailAddFocused: false,
    });
  };

  onFocus = key => () => {
    let focusedInputs = {
      firstNameFocused: false,
      lastNameFocused: false,
      businessNameFocused: false,
      emailAddFocused: false,
    };
    focusedInputs[key] = true;

    this.setState({
      ...focusedInputs,
    });
  };

  onSubmit = () => {
    this.setState({ borderColor: true })
  }

  focusOn = nextFiled => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const { firstNameFocused, lastNameFocused, businessNameFocused, emailAddFocused } = this.state;
    return (
      <SafeAreaView style={{flex:1}}>
      
      
        
        {/* Custom Header */}
        <View style={{
            backgroundColor: 'white', height: hp('6%'),width: wp('100%'), flexDirection: 'row',
          }}>
            <Icons
              size={35}
              style={{ marginLeft: 5, alignSelf: 'center', }}
              name={'keyboard-arrow-left'}
              onPress={() => this.props.navigation.goBack()}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: wp('-8%') }}>
              <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 20, fontWeight: '800' }}>Add Your Restaurant</Text>
            </View>
          </View>
    

          <ProgressBar
            style={{
              height: hp('1.3%'),
              marginLeft: wp('2.9%'),
              marginRight: wp('2.9%'),
              marginTop: hp('1.1%'),
              backgroundColor: 'rgb(239,239,239)',
              borderRadius: 5,
            }}
            progress={0.46}
            color={Colors.orangeLight}
          />
        
        
        <Text style={{ position: 'absolute', right: wp('4%'), fontSize: hp(2), top: hp('10%'), }}>1/2</Text>

        <KeyboardAwareScrollView contentContainerStyle={{flex:1,}}>

        <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'white' }}>
          <Text style={{ fontSize: hp(3), fontWeight: 'bold', alignSelf: 'center', }}>Create your MenuDrive account</Text>
          <View style={{ flexDirection: 'row', marginTop: hp('2%'), alignSelf: 'center', }}>
            <Text style={{ fontSize: hp(2.5) }}>Already have an account?</Text>
            <TouchableItem onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={{ fontSize: hp(2.5), color: Colors.orangeLight, marginLeft: 5 }}>Log in</Text>
            </TouchableItem>
          </View>

          <View style={{ marginTop: hp('6.5%'), flexDirection: 'row' }}>
            <TextInput
              style={{
                width: wp('89%'),
                borderWidth: 1,
                borderRadius: 5,
                height:hp(7.2),
                textAlign: 'left',
                fontSize: hp('2.6'),
                marginLeft: wp('4%'),
                paddingLeft: 15,
                borderColor: this.state.firstName.length > 0 ? 'green' : '#c7c7c7'
              }}
              onChangeText={(firstName) => this.setState({ firstName: firstName })}
              placeholder="First Name"
              onFocus={this.onFocus('firstNameFocused')}
              inputFocused={firstNameFocused}
              onSubmitEditing={this.focusOn(this.lastName)}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            {this.state.firstName !== '' && (<Icons name={'check'} size={20} color={'green'} style={{ alignSelf: 'center', marginLeft: '1%' }} />)
            }
          </View>

          <View style={{ marginTop: hp('3%'), flexDirection: 'row' }}>
            <TextInput
              ref={r => {
                this.lastName = r;
              }}
              style={{
                width: wp('89%'),
                borderWidth: 1,
                borderRadius: 5,
                height:hp(7.2),
                marginLeft: wp('4%'),
                textAlign: 'left',
                fontSize: hp('2.6'),
                paddingLeft: 15,
                borderColor: this.state.lastName.length > 0 ? 'green' : '#c7c7c7'
              }}
              onChangeText={(lastName) => this.setState({ lastName: lastName })}
              placeholder="Last Name"
              onFocus={this.onFocus('lastNameFocused')}
              inputFocused={lastNameFocused}
              onSubmitEditing={this.focusOn(this.businessName)}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            {this.state.lastName !== '' && (<Icons name={'check'} size={20} color={'green'} style={{ alignSelf: 'center', marginLeft: '1%' }} />)
            }
          </View>

          <View style={{ marginTop: hp('3%'), flexDirection: 'row' }}>
            <TextInput
              ref={r => {this.businessName = r}}
              style={{
                width: wp('89%'),
                borderWidth: 1,
                borderRadius: 5,
                marginLeft: wp('4%') ,
                textAlign: 'left',
                fontSize: hp('2.6%'),
                height:hp(7.2),
                paddingLeft: 15,
                borderColor: this.state.businessName.length > 0 ? 'green' : '#c7c7c7'
              }}
              onChangeText={(businessName) => this.setState({ businessName: businessName })}
              placeholder="Business Name"
              onFocus={this.onFocus('businessNameFocused')}
              inputFocused={businessNameFocused}
              onSubmitEditing={this.focusOn(this.emailAdd)}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            {this.state.businessName !== '' && (<Icons name={'check'} size={20} color={'green'} style={{ alignSelf: 'center', marginLeft: '1%' }} />)
            }
          </View>

          {/* <TextInput
            style={{
              width: '70%',
              marginTop: '5%',
              alignSelf: 'center',
              borderWidth: 2,
              borderRadius: 5,
              textAlign: 'left',
              fontSize: 18,
              paddingLeft: 15,
              borderColor: this.state.businessName.length > 0 ? 'green' : 'black'
            }}
            onChangeText={(businessName) => this.setState({ businessName: businessName })}
            placeholder="Business Name"
            value={this.state.businessName}
          /> */}
          {/* <TextInput
            style={{
              width: '70%',
              marginTop: '5%',
              alignSelf: 'center',
              borderWidth: 2,
              borderRadius: 5,
              textAlign: 'left',
              fontSize: 18,
              paddingLeft: 15,
              borderColor: this.state.emailAdd.length > 0 ? 'green' : 'black'
            }}
            onChangeText={(emailAdd) => this.setState({ emailAdd: emailAdd })}
            placeholder="Email Address"
            value={this.state.emailAdd}
          /> */}

          <View style={{ marginTop: hp('3%'), flexDirection: 'row', }}>
            <TextInput
              ref={r=> {this.emailAdd = r}}
              style={{
                width: '89%',
                borderWidth: 1,
                borderRadius: 5,
                marginLeft: wp('4%'),
                textAlign: 'left',
                height:hp(7.2),
                fontSize: hp('2.6%') ,
                paddingLeft: 15,
                borderColor: this.state.emailAdd.length > 0 ? 'green' : '#c7c7c7'

              }}
              onChangeText={(emailAdd) => this.setState({ emailAdd: emailAdd })}
              returnKeyType="next"
              onFocus={this.onFocus('emailAddFocused')}
              inputFocused={emailAddFocused}
              blurOnSubmit={false}
              placeholder="Email Address"
              value={this.state.emailAdd}
            />
            {this.state.emailAdd !== '' && (<Icons name={'check'} size={20} color={'green'} style={{ alignSelf: 'center', marginLeft: '1%' }} />)
            }
          </View>

          <TouchableItem onPress={() => this.props.navigation.navigate('AddDetailsRest')} style={{marginLeft: wp('4%'), marginTop: hp(4),width:'89%'}}>          
              <Text style={{ textAlign: 'center', fontSize: hp(3), color: 'white', backgroundColor: Colors.primaryColor, padding: 15, borderRadius: 8,height:hp(9) }}>Next</Text>
           </TouchableItem>

        </View>
    
      </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
