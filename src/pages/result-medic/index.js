import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IconConsult, IconLabotory, LogoGetwell} from '../../assets/icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CardResult from '../../components/card-result';
import ProgressCirclesDisplay from '../../components/circle-information';
import {LogoAnatomy} from '../../assets';

const ResultMedic = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const containerWidth = screenWidth / 2; // Since we're using 50% width
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoGetwell />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
          }}>
          <MaterialCommunityIcons
            name={'bell-badge-outline'}
            size={24}
            color={'white'}
          />
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
            }}
            source={{uri: 'https://randomuser.me/api/portraits/med/men/14.jpg'}}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 16,
            backgroundColor: '#1F978D',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Personal Health Care
          </Text>
          <View style={styles.cardProfile}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
              }}
              source={{
                uri: 'https://randomuser.me/api/portraits/med/men/14.jpg',
              }}
            />
            <View>
              <Text style={{
                fontWeight: "bold"
              }}>Bayu Prabu</Text>
              <Text>Pria • 24 Thn • Golongan Darah A</Text>
              <TouchableOpacity
                style={{
                  width: 123,
                  backgroundColor: '#30B6AA',
                  padding: 3,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                  }}>
                  Wellness Program
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}>
          <View style={styles.containerResult}>
            <TouchableOpacity
              style={{
                width: '50%',
              }}
              onPress={() => {
                navigation.navigate('DetailMedic');
              }}>
              <CardResult
                icon={<IconConsult />}
                title={'Hasil Konsultasi'}
                body={'(200 hasil)'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
              }}
              onPress={() => {
                navigation.navigate('DetailMedic');
              }}>
              <CardResult
                icon={<IconLabotory />}
                title={'Hasil Laboratorium'}
                body={'(200 hasil)'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailMedic');
            }}
            style={styles.cardDetails}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                12 Body Systems Terbaru
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                }}>
                16 September 2023
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#30B6AA',
                }}>
                Lihat Detail
              </Text>
              <MaterialIcons
                name={'arrow-forward-ios'}
                size={24}
                color={'#30B6AA'}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              gap: 2,
            }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
              }}>
              <Image
                source={LogoAnatomy}
                style={{
                  width: containerWidth,
                  height: 400, // This will maintain square aspect initially
                  resizeMode: 'contain', // This ensures the image isn't cropped
                }}
              />
            </View>
            <View
              style={{
                width: '50%',
              }}>
              <ProgressCirclesDisplay />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultMedic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F978D',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    backgroundColor: '#1F978D',
  },
  cardProfile: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {width: 0, height: 2}, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
    elevation: 5, // Android elevation
  },
  containerResult: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 16,
  },
  cardDetails: {
    margin: 10,
    padding: 16,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});
