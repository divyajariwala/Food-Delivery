/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Alert,
  I18nManager,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import components
import ActivityIndicatorModal from '../../components/modals/ActivityIndicatorModal';
import Button from '../../components/buttons/Button';
import {Heading5, Paragraph} from '../../components/text/CustomText';
// import colors
import Colors from '../../theme/colors';
import {TextInput} from 'react-native-gesture-handler';

// VerificationA Config
const isRTL = I18nManager.isRTL;

// VerificationA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    marginTop: 70,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  instructionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instruction: {
    marginTop: 16,
    paddingHorizontal: 40,
    fontSize: 14,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  digitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    width: 48,
    height: 50,
    borderRadius: 4,
    backgroundColor: Color(Colors.primaryColor).alpha(0.12),
  },
  digit: {
    fontWeight: '400',
    fontSize: 17,
    color: Colors.primaryText,
  },
  buttonContainer: {
    paddingBottom: 44,
  },
  underlineStyleBase: {
    borderWidth: 0,
    backgroundColor: Color(Colors.primaryColor).alpha(0.12),
    color: Colors.primaryText,
  },
});

// VerificationA
export default class VerificationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      code: '',
    };
  }

  // avoid memory leak
  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  navigateTo = (screen) => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  submit = () => {
    this.setState(
      {
        modalVisible: true,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.closeModal();
          this.navigateTo('HomeNavigator');
        }, 3000);
      },
    );
  };

  closeModal = () => {
    // for demo purpose clear timeout if user request close modal before 3s timeout
    clearTimeout(this.timeout);
    this.setState({
      modalVisible: false,
      code: '',
    });
  };

  render() {
    const {modalVisible, code} = this.state;
    // const mobileno = this.props.navigation.getParam('mobileno', 'NO-User');

    return (
      <SafeAreaView forceInset={{top: 'never'}} style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.instructionContainer}>
            <Heading5>Verification Code</Heading5>
            <Paragraph style={styles.instruction}>
              Please, enter the verification code sent to +1234567890
            </Paragraph>
            <OTPInputView
              style={{width: '60%', height: 130, backgroundColor: 'white'}}
              pinCount={4}
              onCodeChanged={(code) => {
                this.setState({code});
              }}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <Button
              onPress={this.submit}
              disabled={!code}
              borderRadius={4}
              small
              title={'Submit code'.toUpperCase()}
            />
          </View>
          <ActivityIndicatorModal
            message="Please wait . . ."
            onRequestClose={this.closeModal}
            title="Loading"
            visible={modalVisible}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
