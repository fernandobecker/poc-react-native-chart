import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryLegend,
} from 'victory-native';

export default function App() {
  const data1 = [
    { x: '1 dias', y: '2 kg' },
    { x: '2 dias', y: '3 kg' },
    { x: '3 dias', y: '5 kg' },
    { x: '4 dias', y: '3 kg' },
    { x: '5 dias', y: '7 kg' },
    { x: '6 dias', y: '10 kg' },
  ];

  const data2 = [
    { x: '1 dias', y: '2 kg' },
    { x: '2 dias', y: '3 kg' },
    { x: '3 dias', y: '5 kg' },
    { x: '4 dias', y: '5 kg' },
    { x: '5 dias', y: '7 kg' },
    { x: '6 dias', y: '10 kg' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Consumo de Ração</Text>
      <VictoryChart>
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: '#595c5e',
              strokeDasharray: '5,1',
              strokeWidth: 2,
              fillOpacity: 0.4,
            },
            parent: { border: '1px solid #ccc' },
          }}
          data={data1}
        />
        <VictoryScatter
          style={{ data: { fill: '#4380e0' } }}
          size={4}
          data={data2}
        />
      </VictoryChart>
      <VictoryLegend
        x={12}
        y={5}
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{ title: { fontSize: 20 } }}
        data={[
          { name: 'Real', symbol: { fill: '#4380e0', type: 'orange' } },
          { name: 'Planejado', symbol: { fill: '#595c5e', type: 'minus' } },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
