/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Keyboard,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  View,
} from 'react-native';
import Color from 'color';

// import components
import ActivityIndicatorModal from '../../components/modals/ActivityIndicatorModal';
import Button from '../../components/buttons/Button';
import {Paragraph} from '../../components/text/CustomText';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import colors
import Colors from '../../theme/colors';
import Logo from '../../components/logo/Logo';
import Icons from "react-native-vector-icons/Ionicons";

//import responsive screens
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";

// ForgotPasswordA Config
const PLACEHOLDER_TEXT_COLOR = 'rgba(0, 0, 0, 0.4)';
const INPUT_TEXT_COLOR = 'rgba(0, 0, 0, 0.87)';
const INPUT_BORDER_COLOR = 'rgba(0, 0, 0, 0.2)';
const INPUT_FOCUSED_BORDER_COLOR = '#000';

//Width and height of screen 
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;


// ForgotPasswordA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    flex:1,
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Color(Colors.primaryColor).alpha(0.16),
  },
  companyName:{
    fontSize:hp(4.3),
    fontWeight:'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:hp(4.3),
    marginBottom:hp(4.3),
  },
  instruction: {
    marginTop: hp(1.3),
    paddingHorizontal: wp(5),
    fontSize: hp(2.5),
    textAlign: 'center',
  },
  inputContainer: {
    paddingTop: hp(2.6),
    marginTop:hp(3.6)
  },
  buttonContainer: {
    paddingTop: hp(6),
    alignSelf: 'center',
    marginTop:hp(0.7),
    width:"60%"
  },
});

// ForgotPasswordA
export default class ForgotPasswordA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailFocused: false,
      modalVisible: false,
    };
  }

  componentDidMount = () => {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  };

  // avoid memory leak
  componentWillUnmount = () => {
    clearTimeout(this.timeout);
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  };

  keyboardDidShow = () => {
    this.setState({
      emailFocused: true,
    });
  };

  keyboardDidHide = () => {
    this.setState({
      emailFocused: false,
    });
  };

  emailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  navigateTo = (screen) => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  resetPassword = () => {
    Keyboard.dismiss();
    this.setState(
      {
        modalVisible: true,
        emailFocused: false,
      },
      () => {
        // for demo purpose after 3s close modal
        this.timeout = setTimeout(() => {
          this.closeModal();
        }, 3000);
      },
    );
  };

  closeModal = () => {
    // for demo purpose clear timeout if user request close modal before 3s timeout
    clearTimeout(this.timeout);
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const {emailFocused, modalVisible} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <KeyboardAwareScrollView contentContainerStyle={styles.contentContainerStyle}>
        
        <View style={{ position: 'absolute', right: 0, margin: hp(3.9), marginTop: hp(3) }}>
            <Icons onPress={()=>this.props.navigation.navigate('SignIn')} name={Platform.OS === 'android' ? 'md-close' : 'ios-close'} size={hp(4.5)} />
          </View>

        <View style={{flex:1,justifyContent: 'center'}}>
          <View style={styles.instructionContainer}>

              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Logo size={60} />
              </View>

              <View>
                <Text style={styles.companyName}>
                  MD Deliver
                </Text>
              </View>
              <View>
                <Text style={{fontSize:hp(3)}}>Forgot your password?</Text>
              </View>
            <Paragraph style={styles.instruction}>
                Confirm your email & we'll send the
                instructions
            </Paragraph>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={this.emailChange}
              inputFocused={emailFocused}
              onSubmitEditing={this.resetPassword}
              returnKeyType="next"
              blurOnSubmit={false}
              keyboardType="email-address"
              style={{width:'92%',alignSelf: 'center',height:50,borderWidth:2,borderRadius:5,paddingLeft:10,fontSize:17}}
              placeholder="E-mail"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              inputTextColor={INPUT_TEXT_COLOR}
              borderColor={INPUT_BORDER_COLOR}
              focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this.resetPassword}
              large
              title={'Reset password'.toUpperCase()}
            />
          </View>
        </View>

          <ActivityIndicatorModal
            message="Please wait . . ."
            onRequestClose={this.closeModal}
            title="Sending instructions"
            visible={modalVisible}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
