// Dashboard.js or any other screen
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import UserBarDiagram from '../../Components/UserBarDiagram';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Monthly User Data</Text>
      <Text style={{ fontSize: 16 }}>Showing static bar diagram list with the help of react native chartkit.</Text>
      <UserBarDiagram></UserBarDiagram>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Dashboard;
