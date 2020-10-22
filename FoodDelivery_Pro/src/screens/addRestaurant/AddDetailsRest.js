import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {ProgressBar} from 'react-native-paper';
import Colors from '../../theme/colors';
import TouchableItem from '../../components/TouchableItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StackActions, TabActions} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontFamily from '../../theme/FontFamily';

export default class AddDetailsRest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessAdd: '',
      businessAddFocused: false,
      businessAdd2: '',
      businessAdd2Focused: false,
      cityName: '',
      cityNameFocused: false,
      stateProvince: '',
      stateProvinceFocused: false,
      zipCode: '',
      zipCodeFocused: false,
      country: '',
      countryFocused: false,
      phoneNumber: '',
      phoneNumberFocused: false,
    };
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

  onFocus = (key) => () => {
    let focusedInputs = {
      businessAddFocused: false,
      businessAdd2Focused: false,
      cityNameFocused: false,
      stateProvinceFocused: false,
      zipCodeFocused: false,
      countryFocused: false,
      phoneNumberFocused: false,
    };
    focusedInputs[key] = true;

    this.setState({
      ...focusedInputs,
    });
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const {
      businessAddFocused,
      businessAdd2Focused,
      cityNameFocused,
      stateProvinceFocused,
      zipCodeFocused,
      countryFocused,
      phoneNumberFocused,
    } = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1,backgroundColor:'white'}}>
          <View
            style={{
              backgroundColor: 'white',
              height: hp('6%'),
              width: wp('100%'),
              flexDirection: 'row',
            }}>
            <Icons
              size={35}
              style={{marginLeft: 5, alignSelf: 'center'}}
              name={'keyboard-arrow-left'}
              onPress={() => this.props.navigation.goBack()}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('-8%'),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 20,
                  fontFamily:FontFamily.SemiBold,
                  color:'#333f4b'
                  //fontWeight: '800',
                }}>
                Add Your Restaurant
              </Text>
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
            progress={1}
            color={Colors.orangeLight}
          />

          <Text
            style={{
              position: 'absolute',
              right: wp('4%'),
              fontSize: hp(2),
              top: hp('10%'),
            }}>
            2/2
          </Text>

          <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  //fontWeight: 'bold',
                  alignSelf: 'center',
                  marginTop: hp('3%'),
                  fontFamily:FontFamily.Bold,
                  color:'#333f4b'
                }}>
                Almost there ...
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '2.5%',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: hp('2%'),fontFamily:FontFamily.Regular,color:'#333f4b'}}>
                  Already have an account?
                </Text>
                <TouchableItem
                  onPress={() => this.props.navigation.navigate('SignIn')}>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: Colors.orangeLight,
                      marginLeft: 5,
                      fontFamily:FontFamily.Regular
                    }}>
                    Log in
                  </Text>
                </TouchableItem>
              </View>

              <TextInput
                style={{
                  height: hp(7.2),
                  marginTop: hp('4%'),
                  width: wp('88%'),
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  textAlign: 'left',
                  fontSize: hp('2.5%'),
                  paddingLeft: 15,
                  borderColor: '#c7c7c7',
                  fontFamily:FontFamily.Regular
                }}
                onChangeText={(businessAdd) =>
                  this.setState({businessAdd: businessAdd})
                }
                placeholder="Business Address"
                onFocus={this.onFocus('businessAddFocused')}
                inputFocused={businessAddFocused}
                onSubmitEditing={this.focusOn(this.businessAdd2)}
                returnKeyType="next"
                blurOnSubmit={false}
              />
              <TextInput
                ref={(r) => {
                  this.businessAdd2 = r;
                }}
                style={{
                  height: hp(7.2),
                  width: wp('88%'),
                  marginTop: hp('2.5%'),
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  textAlign: 'left',
                  fontSize: hp('2.5%'),
                  paddingLeft: 15,
                  borderColor: '#c7c7c7',
                  fontFamily:FontFamily.Regular
                }}
                onChangeText={(businessAdd2) =>
                  this.setState({businessAdd2: businessAdd2})
                }
                placeholder="Business Address 2 (optional)"
                onFocus={this.onFocus('businessAdd2Focused')}
                inputFocused={businessAdd2Focused}
                onSubmitEditing={this.focusOn(this.cityName)}
                returnKeyType="next"
                blurOnSubmit={false}
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TextInput
                  ref={(r) => {
                    this.cityName = r;
                  }}
                  style={{
                    height: hp(7.2),
                    width: wp('41%'),
                    marginTop: hp('2.5%'),
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    textAlign: 'left',
                    fontSize: hp('2.5%'),
                    paddingLeft: 15,
                    borderColor: '#c7c7c7',
                    fontFamily:FontFamily.Regular
                  }}
                  onChangeText={(cityName) =>
                    this.setState({cityName: cityName})
                  }
                  placeholder="City"
                  onFocus={this.onFocus('cityNameFocused')}
                  inputFocused={cityNameFocused}
                  onSubmitEditing={this.focusOn(this.stateProvince)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                />

                <TextInput
                  ref={(r) => {
                    this.stateProvince = r;
                  }}
                  style={{
                    height: hp(7.2),
                    width: wp('41%'),
                    marginTop: hp('2.5%'),
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    textAlign: 'left',
                    fontSize: hp('2.5%'),
                    paddingLeft: 15,
                    borderColor: '#c7c7c7',
                    fontFamily:FontFamily.Regular
                  }}
                  onChangeText={(stateProvince) =>
                    this.setState({stateProvince: stateProvince})
                  }
                  placeholder="State, Province"
                  onFocus={this.onFocus('stateProvinceFocused')}
                  inputFocused={stateProvinceFocused}
                  onSubmitEditing={this.focusOn(this.zipCode)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TextInput
                  ref={(r) => {
                    this.zipCode = r;
                  }}
                  style={{
                    height: hp(7.2),
                    width: wp('41%'),
                    marginTop: hp('2.5%'),
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    textAlign: 'left',
                    fontSize: hp('2.5%'),
                    paddingLeft: 15,
                    borderColor: '#c7c7c7',
                    fontFamily:FontFamily.Regular
                  }}
                  onChangeText={(zipCode) => this.setState({zipCode: zipCode})}
                  placeholder="Zip Code"
                  onFocus={this.onFocus('zipCodeFocused')}
                  inputFocused={zipCodeFocused}
                  onSubmitEditing={this.focusOn(this.country)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                />

                <TextInput
                  ref={(r) => {
                    this.country = r;
                  }}
                  style={{
                    height: hp(7.2),
                    width: wp('41%'),
                    marginTop: hp('2.5%'),
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    textAlign: 'left',
                    fontSize: hp('2.5%'),
                    paddingLeft: 15,
                    borderColor: '#c7c7c7',
                    fontFamily:FontFamily.Regular
                  }}
                  onChangeText={(country) => this.setState({country: country})}
                  placeholder="Country"
                  onFocus={this.onFocus('countryFocused')}
                  inputFocused={countryFocused}
                  onSubmitEditing={this.focusOn(this.phoneNumber)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>

              <TextInput
                ref={(r) => {
                  this.phoneNumber = r;
                }}
                style={{
                  height: hp(7.2),
                  width: wp('88%'),
                  marginTop: hp('2.5%'),
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  textAlign: 'left',
                  fontSize: hp('2.5%'),
                  paddingLeft: 15,
                  borderColor: '#c7c7c7',
                  fontFamily:FontFamily.Regular
                }}
                onChangeText={(phoneNumber) =>
                  this.setState({phoneNumber: phoneNumber})
                }
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onFocus={this.onFocus('phoneNumberFocused')}
                inputFocused={phoneNumberFocused}
                returnKeyType="next"
                blurOnSubmit={false}
              />

              <View
                style={{
                  marginTop: hp(4),
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableItem
                  onPress={() => this.props.navigation.navigate('AddNameRest')}
                  style={{
                    width: '41%',
                    alignSelf: 'center',
                    backgroundColor: Colors.orangeLight,
                    padding: 15,
                    borderRadius: 8,
                    height: hp(8),
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp(2.5),
                      color: 'white',
                      fontFamily:FontFamily.Regular
                    }}>
                    BACK
                  </Text>
                </TouchableItem>
                <TouchableItem
                  onPress={() =>
                    this.props.navigation.navigate('ActivationSuccess')
                  }
                  style={{
                    width: '41%',
                    alignSelf: 'center',
                    backgroundColor: Colors.primaryColor,
                    padding: 15,
                    borderRadius: 8,
                    height: hp(8),
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp(2.5),
                      color: 'white',
                      fontFamily:FontFamily.Regular
                    }}>
                    Create Account
                  </Text>
                </TouchableItem>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: hp(3.5),
                }}>
                <Text
                  style={{
                    fontSize: hp(2.1),
                    color: 'rgb(137,144,155)',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontFamily:FontFamily.Regular
                  }}>
                  By Clicking the button above, you agree to our
                  <Text
                    style={{
                      color: Colors.orangeLight,
                      fontSize: hp(2.1),
                      alignSelf: 'center',
                      fontFamily:FontFamily.Regular
                    }}>
                    {' '}
                    Terms of Service{' '}
                  </Text>
                  and
                  <Text
                    style={{
                      color: Colors.orangeLight,
                      fontSize: hp(2.1),
                      alignSelf: 'center',
                      fontFamily:FontFamily.Regular
                    }}>
                    {' '}
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
