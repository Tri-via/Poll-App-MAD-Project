import React, { useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput,FlatList } from 'react-native';
import styles from '../styles/writeBlogStyles';
import textEditorStyles from '../styles/textEditorStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ShowPolls from './ShowPolls';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { pollContext } from '../Context/PollContext';



const CreatePoll = ({ route }) => {
    const contextPoll = useContext(pollContext);
    const [enteredPoll, setEnteredPoll] = useState('');
    const [enteredOption, setEnteredOption] = useState('');
    const [options, setOptions] = useState([]);
    const [index, setIndex] = useState(1);
    console.log("renderedCreatePoll");

    const onChangeEnteredOption = (enteredText) => {
        setEnteredOption(enteredText);
        console.log("inchangeoption");
    }

    const onAdd = () => {
        console.log(index);
        setOptions(currentOptions => [...currentOptions, {key:index.toString(), value: enteredOption.toString() }]);
        setIndex(currentIndex => currentIndex + 1);
        console.log("inonadd");
        console.log(index);
    }

    const onChangePollText = (enteredText) => {
        setEnteredPoll(enteredText);
    }

    const onPublish = () => {
        contextPoll.setPolls(currentPolls => [...currentPolls, { id: contextPoll.pollIndex, question: enteredPoll, choices: options }]);
        contextPoll.setPollIndex(currentPollIndex => currentPollIndex + 1);
    }

    return (
        <View style={styles.outerView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon
                        name="angle-left"
                        size={45}
                        color="#eca72c"
                        //style={styles.icon}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={onPublish}>
                    <Text style={textEditorStyles.textStyle}>Publish</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headView}>
                <Icon name="plus-square" size={45} color="#eca72c" />
                <Text style={styles.headText}>Create New Poll</Text>
            </View>

            <View style={styles.group}>
                <TextInput
                    placeholder="Write your Poll"
                    placeholderTextColor="#eca72c"
                    style={styles.title}
                    value={enteredPoll}
                    onChangeText={onChangePollText}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Write option"
                    placeholderTextColor="#d6d6d6"
                    style={styles.blogText}
                    multiline={true}
                    value={enteredOption}
                    onChangeText={onChangeEnteredOption}
                />

                    <TouchableOpacity style={styles.btn1} onPress={onAdd}>
                    <Text style={styles.text1}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.optionContainerStyles}>

                <FlatList
                    keyExrtractor={(item,index) => item.key}
                    data={options}
                    renderItem={itemData => (
                        <View style={styles.optionStyles}>
                            <Text style={styles.text1}>{ itemData.item.key}.)  {itemData.item.value}</Text>
                        </View>
                    )}
                />
            

            </View>

        </View>
    );
};

export default CreatePoll;

