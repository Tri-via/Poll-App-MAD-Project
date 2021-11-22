import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import RNPoll, { IChoice } from 'react-native-poll';
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
import SideDrawer from '../components/SideDrawer';
import blogStyles from '../styles/blogStyles';
import homeStyles from '../styles/homeStyles';
import loggedInPageStyles from '../styles/loggedInPageStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const renderItem = ({ item }) => {
    return <ShowQuestion item={item} />;
};

const LoggedInPage = ({ navigation }) => {
    const { Polls } = useContext(pollContext);
    console.log(pollContext.Provider);

    const [drawer, setdrawer] = useState(false);

    const toggleOpen = () => {
        const drawerVal = drawer == false ? true : false;
        setdrawer(drawerVal);
        // console.log(drawer)
    };

    return (

        <>
            {drawer === true ? (
                <SideDrawer onCloseDrawer={() => setdrawer(false)} />
            ) : (
                <></>
            )}
            <View
                style={[
                    loggedInPageStyles.outerView,
                    drawer ? { opacity: 0.8 } : { opacity: 1 },
                ]}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => toggleOpen()}>
                        <Icon name="navicon" size={25} color="#eca72c" />
                    </TouchableOpacity>

                    <View style={homeStyles.navHeadView}>
                        <Icon name="bookmark" size={20} color="#eca72c" />
                        <Text style={homeStyles.navAppName}>POLLIFY</Text>
                    </View>
                </View>

                <View style={{ align: "center" }}>
                    <TouchableOpacity
                        style={styles.btnadd}
                        onPress={() => navigation.navigate("CreatePoll")}>
                        <Text style={styles.text1}>Create a New Poll  + </Text>
                    </TouchableOpacity>
                </View>

                <Text style={blogStyles.commentTxt2}>Recommended Polls</Text>
                
                <FlatList
                    data={Polls}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    navigation={navigation}
                />

                {!drawer ? (
                    <TouchableOpacity
                        style={loggedInPageStyles.createPost}
                        onPress={() => navigation.navigate('TextEditor')}>
                        <Icon name="pencil-square-o" size={25} />
                    </TouchableOpacity>
                ) : null}
            </View>
       
        </>
    );
};

export default LoggedInPage;

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
