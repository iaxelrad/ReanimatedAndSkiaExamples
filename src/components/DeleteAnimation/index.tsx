import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ListItem from './ListItem';

const TITLES = [
  'Record the dismissible tutorial 🎥',
  'Leave 👍🏻 to the video',
  'Check YouTUbe comments',
  'Subscribe to the channel 🚀',
  'Leave a ⭐️ on the Github Repo',
];

export interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}));
const BACKGROUND_COLOR = '#FAFBFF';

type Props = {};

const DeleteAnimationScreen = (props: Props) => {
  const [tasks, setTasks] = useState(TASKS);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <ScrollView style={{flex: 1}}>
        {tasks.map(task => {
          return <ListItem task={task} key={task.index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeleteAnimationScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: BACKGROUND_COLOR},
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});
