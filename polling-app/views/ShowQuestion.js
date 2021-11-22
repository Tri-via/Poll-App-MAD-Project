import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import RNPoll, {IChoice} from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';
import ShowPolls from './ShowPolls';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/writeBlogStyles';

const ShowQuestion = ({item}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.optionContainerStyles}>
            <TouchableOpacity
                style={styles.btnques}
          onPress={() => navigation.navigate("ShowPolls", { Poll: item })}>
            <Text style={styles.heading}>{item.question}</Text>
        </TouchableOpacity>
     </View>

  );
};

export default ShowQuestion;

//const styles = StyleSheet.create({
//  mainScreen: {
//    padding: 10,
//    height: hp(100),
//  },
//  heading: {
//    fontSize: 25,
//    color: 'black',
//  },
//});
