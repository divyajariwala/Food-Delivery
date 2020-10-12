/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  I18nManager,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import Color from 'color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import TouchableItem from '../../components/TouchableItem';
import {Heading6} from '../../components/text/CustomText';

//import responsive screen
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// import colors
import Colors from '../../theme/colors';

// SearchA Config
const isRTL = I18nManager.isRTL;
const SEARCH_ICON = 'magnify';
const imgHolder = require('../../assets/img/imgholder.png');
const pizza = require('../../assets/img/pizza_cato.png');
const grill = require('../../assets/img/grill_cato.jpeg');
const pasta = require('../../assets/img/grill_cato.jpeg');
const salads = require('../../assets/img/salad_cato.png');
//cosnt dessert  = require('../../assets/img/')

// SearchA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  titleContainer: {

    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth:0.4,
    borderColor:'#89909b',
    

  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 8,
    fontWeight: '100',
    textAlign: 'left',
  },
  inputContainer: {
    marginHorizontal: hp(2.5),
    borderRadius: 8,
    marginTop: hp(2.5),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  textInput: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    fontSize: hp(2.8),
    textAlignVertical: 'center',
    textAlign: isRTL ? 'right' : 'left',
  },
  searchButtonContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
  },
  categoriesList: {
    paddingBottom: 10,
    marginTop: 5,
  },
  cardImg: {borderRadius: 4},
  card: {
    marginVertical: 6,
    marginHorizontal: 16,
    height: 100,
    resizeMode: 'cover',
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.overlayColor).alpha(0.2),
    overflow: 'hidden',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardTitle: {
    padding: 16,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.88)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  categoryImageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: '9%',
  },
  categoryText: {
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: '10%',
    color: Colors.primaryColor,
    fontWeight: '700',
  },
});

// SearchA
export default class SearchA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/pizza_cato.png'),
          name: 'PIZZA',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/Grill_cato1.jpeg'),
          name: 'GRILL',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/pasto_cato.png'),
          name: 'PASTA',
        },
        {
          key: 4,
          imageUri: require('../../assets/img/soup_cato.png'),
          name: 'SOUPS',
        },
        {
          key: 5,
          imageUri: require('../../assets/img/salad_cato.png'),
          name: 'SALADS',
        },
        {
          key: 6,
          imageUri: require('../../assets/img/soup_cato.png'),
          name: 'DESSERT',
        },
      ],
    };
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;

    Keyboard.dismiss();

    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

  renderCategoryItem = ({item, index}) => (
    <View
      style={{
        marginHorizontal: hp(2.5),
        marginVertical:hp(1),
        justifyContent: 'center',
        borderWidth:hp(0.1),
        paddingVertical:hp(1),
        borderRadius:10,
        borderColor:'#efefef'
  
      }}>
      <TouchableItem key={index} onPress={this.navigateTo('Category')}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.imageUri} style={styles.categoryImageStyle} />
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
      </TouchableItem>
    </View>

    // <ImageBackground
    //   key={index}
    //   defaultSource={imgHolder}
    //   source={getImgSource(item.imageUri)}
    //   imageStyle={styles.cardImg}
    //   style={styles.card}>
    //   <View style={styles.cardOverlay}>
    //     <TouchableItem
    //       onPress={this.navigateTo('Category')}
    //       style={styles.cardContainer}
    //       // borderless
    //     >
    //       <Text style={styles.cardTitle}>{item.name}</Text>
    //     </TouchableItem>
    //   </View>
    // </ImageBackground>
  );

  render() {
    const {categories} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Search</Heading6>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={SEARCH_ICON}
            size={hp(4.5)}
            color={'#505050'}
            style={{color: '#505050', marginLeft: 10}}
          />
          <TextInput
            placeholder="Food name or description"
            returnKeyType="search"
            maxLength={50}
            style={styles.textInput}
          />

          {/* <View style={styles.searchButtonContainer}>
            <TouchableItem
              onPress={this.navigateTo('SearchResults')}
              // borderless
            >
              <View style={styles.searchButton}>
                <Icon
                  name={SEARCH_ICON}
                  size={23}
                  color={Colors.onPrimaryColor}
                />
              </View>
            </TouchableItem>
          </View> */}
        </View>

        <View style={styles.container}>
          <FlatList
            data={categories}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderCategoryItem}
            contentContainerStyle={styles.categoriesList}
          />
        </View>
      </SafeAreaView>
    );
  }
}
