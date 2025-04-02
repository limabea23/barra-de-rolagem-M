import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, SectionList } from 'react-native';

const musicas = [
  {id: '1', title: 'What Makes You Beautiful'},
  {id: '2', title: 'Story of My Life'},
  {id: '3', title: 'History'},
];

const albums = [
  {title: 'Up All Night', data: ['What Makes You Beautiful', 'Gotta Be You', 'One Thing'] },
  {title: 'Take Me Home', data: ['Live While We re Young', 'Little Things', 'Kiss You'] },
  { title: 'Midnight Memories', data: ['Story of My Life', 'You & I', 'Midnight Memories'] },
  {title: 'Four', data: ['Steal My Girl', 'Night Changes', 'No Control'] },
  {title: 'Made in the A.M.', data:['Drag Me Down', 'Perfect', 'History'] },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>One Direction Songs </Text>

        <Text style={styles.subtitle}>Songs</Text>
        <FlatList
          data={musicas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />

        <Text style={styles.subtitle}>Albums</Text>
        <SectionList
          sections={albums}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00247D',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#CF142B', 
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    marginTop: 10,
    textAlign: 'center',
    color: '#CF142B', 
  },
});