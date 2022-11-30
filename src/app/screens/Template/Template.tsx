import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '@navigation/InjectInterface';

const Template: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Template</Text>
      </View>
    </SafeAreaView>
  );
};

export default Template;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
