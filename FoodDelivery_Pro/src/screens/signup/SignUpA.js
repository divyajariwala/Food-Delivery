/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';
// import components
import Button from '../../components/buttons/Button';
import UnderlinePasswordInput from '../../components/textinputs/UnderlinePasswordInput';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';

// import colors, layout
import Colors from '../../theme/colors';
import Icons from 'react-native-vector-icons/Ionicons';
import Layout from '../../theme/layout';
import Logo from '../../components/logo/Logo';
console.disableYellowBox = true;

// SignUpA Config
const PLACEHOLDER_TEXT_COLOR = 'rgba(0, 0, 0, 0.4)';
const INPUT_TEXT_COLOR = 'rgba(0, 0, 0, 0.87)';
const INPUT_BORDER_COLOR = 'rgba(0, 0, 0, 0.2)';
const INPUT_FOCUSED_BORDER_COLOR = '#000';

// import responsive screen
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// SignUpA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: Layout.LARGE_PADDING,
    marginTop: hp(4),
  },
  inputContainer: {marginBottom: 7},
  vSpacer: {
    height: 15,
  },
  buttonContainer: {
    paddingVertical: hp(3),
    marginTop: hp(0.5),
    alignSelf: 'center',
    width: '50%',
  },
  buttonsGroup: {
    paddingTop: 23,
  },
  separator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 64,
    height: 1,
    backgroundColor: INPUT_BORDER_COLOR,
  },
  orText: {
    top: -2,
    paddingHorizontal: 8,
    color: PLACEHOLDER_TEXT_COLOR,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  termsContainer: {
    flexDirection: 'row',
  },
  footerText: {
    fontWeight: '300',
    fontSize: 13,
    color: Colors.primaryText,
  },
  footerLink: {
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  companyName: {
    fontSize: hp(4.5),
    fontWeight: '700',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  signup: {
    fontSize: hp(2.8),
    color: Colors.orange,
    marginLeft: 5,
  },
});

// SignUpA
export default class SignUpA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailFocused: false,
      phone: '',
      phoneFocused: false,
      password: '',
      passwordFocused: false,
      secureTextEntry: true,
      phonenumber: '',
      countrycode: '',
    };
  }

  emailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  emailFocus = () => {
    this.setState({
      emailFocused: true,
      phoneFocused: false,
      passwordFocused: false,
    });
  };

  phoneChange = (text) => {
    this.setState({
      phone: text,
    });
  };

  phoneFocus = () => {
    this.setState({
      phoneFocused: true,
      emailFocused: false,
      passwordFocused: false,
    });
  };

  passwordChange = (text) => {
    this.setState({
      password: text,
    });
  };

  passwordFocus = () => {
    this.setState({
      passwordFocused: true,
      emailFocused: false,
      phoneFocused: false,
    });
  };

  onTogglePress = () => {
    const {secureTextEntry} = this.state;
    this.setState({
      secureTextEntry: !secureTextEntry,
    });
  };

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  createAccount = () => {
    // const { email, phone, password } = this.state;
    this.setState(
      {
        emailFocused: false,
        phoneFocused: false,
        passwordFocused: false,
      },
      // this.navigateTo('HomeNavigator'),

      this.props.navigation.navigate('Verification',{mobileno:this.state.phonenumber}),
    );
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };
  Capitalize = (str) => {
    return str.toLowerCase();
  };
  selectCountry = (country) => {
    const countrycode = this.phone.getCountryCode(country);
    this.setState({countrycode: countrycode});
    console.log(this.state.countrycode);
    this.phone.selectCountry(country.iso2);
  };
  function2 = (phonenumber) => {
    this.setState({
      phonenumber: phonenumber,
    });
    console.log(phonenumber);
  };
  render() {
    const {
      emailFocused,
      phoneFocused,
      password,
      passwordFocused,
      secureTextEntry,
    } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainerStyle}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              margin: hp(3.9),
              marginTop: hp(3),
            }}>
            <Icons
              onPress={this.navigateTo('Welcome')}
              name={Platform.OS === 'android' ? 'md-close' : 'ios-close'}
              size={hp(4.5)}
            />
          </View>

          <View style={styles.content}>
            <View />

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Logo size={50} />
            </View>

            <View>
              <Text style={styles.companyName}>MD Deliver</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(0.5),
              }}>
              <Text style={{fontSize: hp(2.8)}}>Already a user ?</Text>
              <Text style={styles.signup} onPress={this.navigateTo('SignIn')}>
                Login
              </Text>
            </View>

            <View style={styles.form}>
              <TextInput
                onRef={(r) => {
                  this.email = r;
                }}
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  paddingLeft: 10,
                  borderColor: 'red',
                  fontSize: hp(2.5),
                }}
                onChangeText={this.emailChange}
                onFocus={this.emailFocus}
                inputFocused={emailFocused}
                onSubmitEditing={this.focusOn(this.phone)}
                returnKeyType="next"
                blurOnSubmit={false}
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                inputTextColor={INPUT_TEXT_COLOR}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                inputContainerStyle={styles.inputContainer}
              />

              <TextInput
                onRef={(r) => {
                  this.phone = r;
                }}
                style={{
                  borderRadius: 7,
                  borderWidth: 1,
                  paddingLeft: 10,
                  marginTop: hp(3),
                  fontSize: hp(2.5),
                }}
                onChangeText={this.phoneChange}
                onFocus={this.phoneFocus}
                inputFocused={phoneFocused}
                onSubmitEditing={this.focusOn(this.password)}
                returnKeyType="next"
                blurOnSubmit={false}
                secureTextEntry={secureTextEntry}
                placeholder="Password"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                inputTextColor={INPUT_TEXT_COLOR}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                inputContainerStyle={styles.inputContainer}
              />

              <TextInput
                onRef={(r) => {
                  this.password = r;
                }}
                style={{
                  borderRadius: 7,
                  borderWidth: 1,
                  paddingLeft: 10,
                  marginTop: hp(3),
                  fontSize: hp(2.5),
                }}
                onChangeText={this.passwordChange}
                onFocus={this.passwordFocus}
                inputFocused={passwordFocused}
                onSubmitEditing={this.createAccount}
                returnKeyType="done"
                placeholder="Confirm Password"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                secureTextEntry={secureTextEntry}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                toggleVisible={password.length > 0}
                toggleText={secureTextEntry ? 'Show' : 'Hide'}
                onTogglePress={this.onTogglePress}
              />
              <PhoneInput
                ref={(ref) => {
                  this.phone = ref;
                }}
                onChangePhoneNumber={(phonenumber) =>
                  this.function2(phonenumber)
                }
                onSelectCountry={(country) => {
                  this.selectCountry(country);
                }}
                style={{
                  borderRadius: 7,
                  borderWidth: 1,
                  paddingLeft: 10,
                  marginTop: hp(3),
                  fontSize: hp(2.5),
                  borderColor: INPUT_BORDER_COLOR,
                  height: hp(7.5),
                }}
                returnKeyType="done"
                placeholder="Phone Number"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              />
              <View style={styles.buttonContainer}>
                <Button
                  onPress={this.createAccount}
                  title={'Create Account'.toUpperCase()}
                />
              </View>

              {/* <View style={styles.separator}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
              </View> */}

              {/* <View style={styles.buttonsGroup}>
                <Button
                  onPress={this.createAccount}
                  color="#3b5998"
                  socialIconName="facebook-square"
                  iconColor={Colors.white}
                  title={'Sign up with Facebook'.toUpperCase()}
                />

                <View style={styles.vSpacer} />

                <Button
                  onPress={this.createAccount}
                  color="#db4437"
                  socialIconName="google"
                  iconColor={Colors.white}
                  title={'Sign up with Google'.toUpperCase()}
                />
              </View> */}
            </View>

            {/* <TouchableWithoutFeedback
              onPress={this.navigateTo('TermsConditions')}>
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  By registering, you accepts our
                </Text>
                <View style={styles.termsContainer}>
                  <Text style={[styles.footerText, styles.footerLink]}>
                    Terms & Conditions
                  </Text>
                  <Text style={styles.footerText}> and </Text>
                  <Text style={[styles.footerText, styles.footerLink]}>
                    Privacy Policy
                  </Text>
                  <Text style={styles.footerText}>.</Text>
                </View>
              </View>
            </TouchableWithoutFeedback> */}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
