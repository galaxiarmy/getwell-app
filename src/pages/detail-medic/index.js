import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this package

const DetailMedic = ({navigation}) => {
  const dataMCU = [
    {
      inspect: 'Random Blood Sugar',
      result: '220 mg/dL',
      normalRange: '70 - 200 mg/dL',
      isHighlighted: true,
    },
    {
      inspect: 'Fasting Blood Sugar',
      result: '140 mg/dL',
      normalRange: '70 -100 mg/dL',
      isHighlighted: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Endocrine</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Need Improvement</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
            navigation.goBack()
        }}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
     
     <View style={styles.containerInspect}>
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Pemeriksaan</Text>
        <Text style={styles.columnHeader}>Hasil MCU</Text>
        <Text style={styles.columnHeader}>Nilai Normal</Text>
      </View>

      {dataMCU.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.inspect}</Text>
          <Text
            style={[
              styles.cell,
              styles.resultValue,
              item.isHighlighted && styles.highlightedText,
            ]}>
            {item.result}
          </Text>
          <Text style={styles.cell}>{item.normalRange}</Text>
        </View>
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#E25151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  containerInspect: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E5E7EB'
    
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#F7F9FA',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 6

  },
  columnHeader: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    padding: 6

  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  resultValue: {
    fontWeight: '500',
  },
  highlightedText: {
    color: '#FF4D4D',
  },
});

export default DetailMedic;
