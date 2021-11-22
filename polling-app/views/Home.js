import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import RNPoll, {IChoice} from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';
import ShowPolls from './ShowPolls';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import ShowQuestion from './ShowQuestion';
import CreatePoll from './CreatePoll';
import { pollContext, pollDataProvider } from '../Context/PollContext';
import styles from '../styles/writeBlogStyles';

const renderItem = ({ item }) => {
    return <ShowQuestion item={item} />;
};

const Home = ({ navigation }) => {
    const { Polls } = useContext(pollContext);
    console.log(pollContext.Provider);
    return (
        <View style={styles.outerView}>
           
            <View style={{ align: "center" }}>
                <TouchableOpacity
                style={styles.btnadd}
            onPress={() => navigation.navigate("CreatePoll")}>
                    <Text style={styles.text1}>Create a New Poll</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            data={Polls}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            navigation={navigation}
            />
           
        </View>

  );
};

export default Home;

//const styles = StyleSheet.create({
//  mainScreen: {
//    padding: 10,
//    height: hp(100),
//  },
//  heading: {
//    // fontFamily: 'Sans',
//    // fontWeight: 'bold',
//    fontSize: 25,
//    color: 'black',
//  },
//});
