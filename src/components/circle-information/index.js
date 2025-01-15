import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle = ({ percentage = 33, label = '', color = '#00A3A1' }) => {
  const circleSize = 80;
  const strokeWidth = 8;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  // Animation setup
  const progressAnimation = React.useRef(new Animated.Value(0)).current;
  
  React.useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [percentage]);

  const strokeDashoffset = progressAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Svg width={circleSize} height={circleSize} style={{ transform: [{ rotate: '-90deg' }] }}>
          <G>
            {/* Background Circle */}
            <Circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress Circle */}
            <AnimatedCircle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </G>
        </Svg>
        {/* Percentage Text */}
        <View style={styles.percentageContainer}>
          <Text style={[styles.percentageText, { color }]}>{percentage}%</Text>
        </View>
      </View>
      {/* Label */}
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
};

const ProgressCirclesDisplay = () => {
  const data = [
    { percentage: 33, label: 'Good', color: '#00A3A1' },
    { percentage: 33, label: 'Need Improvement', color: '#FF4D4D' },
    { percentage: 33, label: 'No Data', color: '#6B7280' },
  ];

  return (
    <View style={styles.mainContainer}>
      {data.map((item, index) => (
        <ProgressCircle
          key={index}
          percentage={item.percentage}
          label={item.label}
          color={item.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circleContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 20,
    fontWeight: '600',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ProgressCirclesDisplay;