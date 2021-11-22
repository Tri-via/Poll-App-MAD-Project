import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/homeStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import { authContext } from '../Context/AuthContext';
//import { themeContext } from '../Context/ThemeContext';
import LoggedInPage from './LoggedInPage';

const home = ({ navigation }) => {
    //const contextAuth = useContext(authContext);
    //const contextTheme = useContext(themeContext);

    return (
        //<>
            /*{!contextAuth.user && (*/
                <View style={styles.outerView}>
                    <View style={styles.headView}>
                        <Icon name="bookmark" size={45} color="#eca72c" />
                        <Text style={styles.appName}>POLLIFY</Text>
                        <Text style={styles.headText}>
                            One destination to vote opinions
                        </Text>
                    </View>
                    {/*!contextAuth.user &&*/ (
                        <>
                            <TouchableOpacity
                                style={styles.btn1}
                                onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.text1}>Sign In</Text>
                            </TouchableOpacity>
                            <Text style={styles.commentTxt}>Not an existing user?</Text>
                            <TouchableOpacity
                                style={styles.btn2}
                                onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.text2}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => navigation.navigate('LoggedInPage')}>
                        <Text style={{...styles.text1, fontSize: 15}}>Continue Without Login</Text>
                    </TouchableOpacity>
                        </>
                    )}

                    {/*{contextAuth.user && (*/}
                    {/*    <>*/}
                    {/*        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>*/}
                    {/*            <Text style={styles.commentTxt}>Visit profile</Text>*/}
                    {/*        </TouchableOpacity>*/}
                    {/*    </>*/}
                    {/*)}*/}
                </View>
            /*)}*/

            
       // </>
    );
};

export default home;
