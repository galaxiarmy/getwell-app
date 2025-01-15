import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardResult = ({icon, title, body}) => {
  return (
    <View style={styles.container}>
      {icon}
      <View>
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'gray',
          }}>
          {body}
        </Text>
      </View>
    </View>
  );
};

export default CardResult;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    gap: 4,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white'
  },
});
