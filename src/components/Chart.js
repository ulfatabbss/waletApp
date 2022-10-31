import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width - 20;

const Chart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 55],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'green',
    color: opacity => 'rgba(255, 0, 0,1)',
    strokeWidth: 5, // optional, default 3
    useShadowColorFromDataset: false, // optional
    barPercentage: 0.7,
    propsForLabels: {
      fontSize: 12,
    },

    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  return (
    <BarChart
      data={data}
      width={screenWidth}
      height={200}
      yAxisLabel="$"
      chartConfig={chartConfig}
      // verticalLabelRotation={20}
      fromZero={true}
      style={{
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 20,
      }}
    />
  );
};

export default Chart;

const styles = StyleSheet.create({});
