import React, { useContext } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNPoll, {IChoice} from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';
import { pollContext } from '../Context/PollContext';

const ShowPolls = ({ route }) => {
    const Poll = route.params.Poll;
    console.log(Poll);
    console.log(Poll.choices);
    return (
      <View style={styles.mainScreen}>
      <Text style={styles.heading}>{Poll.question}</Text>
      <RNPoll
        appearFrom="left"
        animationDuration={750}
        totalVotes={30}
        choices={Poll.choices}
        PollContainer={RNAnimated}
        PollItemContainer={RNAnimated}
        onChoicePress={selectedChoice =>
          console.log('SelectedChoice: ', selectedChoice)
        }
      />
    </View>
  );
};

export default ShowPolls;

const styles = StyleSheet.create({
  mainScreen: {
    padding: 10,
  },
  heading: {
    fontFamily: 'Sans',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
