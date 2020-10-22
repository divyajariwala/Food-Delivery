/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { I18nManager, StyleSheet, View, Platform } from 'react-native';
import Color from 'color';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { SwipeRow } from 'react-native-swipe-list-view';
import Icons from "react-native-vector-icons/Ionicons";
// import components
import { Caption, Subtitle1, Subtitle2 } from '../text/CustomText';
import TouchableItem from '../TouchableItem';

// import colors
import Colors from '../../theme/colors';
import FontFamily from '../../theme/FontFamily';
// NotificationItem Config
const isRTL = I18nManager.isRTL;

const NOTIFICATIONS_ICON = 'bell-ring-outline';

const ON_THE_WAY_ICON = 'check-circle';
const READY_FOR_DELIVERY_ICON = 'check-circle';
const FAILED_DELIVERY_ICON = 'sim-alert';
const DELIVERED_ICON = 'check-circle';
const EXCEPTION_ICON = 'close-circle';

const DELETE_ICON = 'trash-can-outline';

const DEFAULT_ICON_COLOR = Colors.primaryColor;
const ON_THE_WAY_ICON_COLOR = 'rgba(44, 163, 35, 0.4)';
const READY_FOR_DELIVERY_ICON_COLOR = 'rgba(44, 163, 35, 0.4)';
const FAILED_DELIVERY_ICON_COLOR = 'rgba(201,49,26,0.4)';
const DELIVERED_ICON_COLOR = 'rgba(44, 163, 35, 0.4)';
const EXCEPTION_ICON_COLOR = 'rgb(137,144,155)'

const READOUT_ICON_COLOR = 'rgba(35, 47, 52, 0.56)';
const READOUT_ICON_BACKGROUND = 'rgba(35, 47, 52, 0.12)';

// NotificationItem Styles
const styles = StyleSheet.create({
  swipeRow: {
    marginVertical: 1,
  },
  cardBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.error)
      .alpha(0.12)
      .string(),
  },
  deleteButtonContainer: {
    width: 88,
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    height: 92,
    backgroundColor: Colors.background,
  },
  primaryArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
  },
  firstLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  firstLine: {
    flex: 1,
    fontFamily: FontFamily.Bold
  },
  readedFirstLine: {
    textAlign: 'left',
    fontFamily: FontFamily.Regular
  },
  unreadFirstLine: {
    //fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.Bold
  },
  unreadText: {
    color: Colors.primaryText,
    //fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.Regular

  },
  readedText: {
    textAlign: 'left',
    fontFamily: FontFamily.Regular
  },
  meta: {
    marginLeft: 4,
    minWidth: 24,
    height: 24,
    fontFamily: FontFamily.Regular

  },
});

// NotificationItem Props
type Props = {
  activeOpacity: number,
  type:
  | 'on_the_way'
  | 'ready_for_delivery'
  | 'failed_delivery'
  | 'delivered'
  | 'exception',
  title: string,
  text: string,
  meta: string,
  onPress: () => {},
  readOut: boolean,
  swipeoutOnPressRemove: () => {},
};

// NotificationItem Functions & Components
const renderIcon = (type, readOut) => {
  let ICON_NAME, ICON_COLOR, ICON_BACKGROUND;

  switch (type) {
    case 'on_the_way':
      ICON_NAME = ON_THE_WAY_ICON;
      ICON_COLOR = ON_THE_WAY_ICON_COLOR;
      ICON_BACKGROUND = Color(ON_THE_WAY_ICON_COLOR).alpha(0.16);
      break;
    case 'ready_for_delivery':
      ICON_NAME = READY_FOR_DELIVERY_ICON;
      ICON_COLOR = READY_FOR_DELIVERY_ICON_COLOR;
      ICON_BACKGROUND = Color(READY_FOR_DELIVERY_ICON_COLOR).alpha(0.16);
      break;
    case 'failed_delivery':
      ICON_NAME = FAILED_DELIVERY_ICON;
      ICON_COLOR = FAILED_DELIVERY_ICON_COLOR;
      ICON_BACKGROUND = Color(FAILED_DELIVERY_ICON_COLOR).alpha(0.16);
      break;
    case 'delivered':
      ICON_NAME = DELIVERED_ICON;
      ICON_COLOR = DELIVERED_ICON_COLOR;
      ICON_BACKGROUND = Color(DELIVERED_ICON_COLOR).alpha(0.16);
      break;
    case 'exception':
      ICON_NAME = EXCEPTION_ICON;
      ICON_COLOR = EXCEPTION_ICON_COLOR;
      ICON_BACKGROUND = Color(EXCEPTION_ICON_COLOR).alpha(0.16);
      break;
    default:
      ICON_NAME = NOTIFICATIONS_ICON;
      ICON_COLOR = DEFAULT_ICON_COLOR;
      ICON_BACKGROUND = Color(Colors.primaryColor).alpha(0.12);
  }

  if (readOut) {
    ICON_BACKGROUND = READOUT_ICON_BACKGROUND;
    ICON_COLOR = READOUT_ICON_COLOR;
  }

  return (
    <View style={[styles.iconContainer]}>
      <Icon name={ICON_NAME} size={28} color={ICON_COLOR} />
    </View>
  );
};

// NotificationItem DeleteButton
const DeleteButton = ({ onPress }) => (
  <View style={styles.deleteButtonContainer}>
    <TouchableItem onPress={onPress} style={styles.deleteButton}>
      <Icon name={DELETE_ICON} size={24} color={Colors.error} />
    </TouchableItem>
  </View>
);

// NotificationItem
const NotificationItem = ({
  activeOpacity = 0.85,
  type,
  title,
  text,
  meta,
  onPress,
  readOut = true,
  swipeoutOnPressRemove,
}: Props) => {
  return (
    <SwipeRow
      disableLeftSwipe={isRTL ? true : false}
      disableRightSwipe={isRTL ? false : true}
      directionalDistanceChangeThreshold={16}
      rightOpenValue={isRTL ? 0 : -88}
      leftOpenValue={isRTL ? 88 : 0}
      style={styles.swipeRow}>
      <View style={styles.cardBack}>
        <DeleteButton onPress={swipeoutOnPressRemove} />
      </View>

      <TouchableItem
        onPress={onPress}
        activeOpacity={activeOpacity}
        useForeground>
        <View style={styles.content}>
          <View style={styles.primaryArea}>
            {renderIcon(type, readOut)}

            <View style={styles.textContainer}>
              <View style={styles.firstLineContainer}>
                <Subtitle1
                  numberOfLines={1}
                  style={[
                    styles.firstLine,
                    styles.readedFirstLine,
                    !readOut && styles.unreadFirstLine,
                  ]}>
                  {title}
                </Subtitle1>

                <View style={styles.meta}>
                  <Caption style={!readOut && styles.unreadText}>
                    {meta}
                  </Caption>
                </View>
              </View>

              <View style={styles.secondLineContainer}>
                <Subtitle2
                  numberOfLines={2}
                  style={[styles.readedText, !readOut && styles.unreadText]}>
                  {text}
                </Subtitle2>
              </View>
            </View>
          </View>
        </View>
      </TouchableItem>
    </SwipeRow>
  );
};

export default NotificationItem;
