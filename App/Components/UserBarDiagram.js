// src/components/UserBarChart.js
import React from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

// Sample data (you might replace this with your actual data)
const userData = {
  September: 180,
  October: 190,
  November: 210,
  December: 220,
};

const UserBarDiagram = () => {
  const screenWidth = Dimensions.get('window').width;

  // Data preparation
  const months = Object.keys(userData);
  const userCounts = Object.values(userData);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BarChart
        data={{
          labels: months,
          datasets: [
            {
              data: userCounts,
            },
          ],
        }}
        width={screenWidth - 32} // from react-native
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#FFF',
        //   backgroundGradientFrom: '#000',
        //   backgroundGradientTo: '#ffc3a0',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius:16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '5',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
};

export default UserBarDiagram;
