import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export function homeScreen({navigation}){
  return (
    <View>
      <Text>
        Home
      </Text>
    </View>
  );
}

export function RoomsScreen({navigation}){
  return (
    <View>
      <Text>
        Rooms
      </Text>
    </View>
  );
}

export function HistoryScreen({navigation}){
  return (
    <View>
      <Text>
        HistoryScreen
      </Text>
    </View>
  );
}

export function CalendarScreen({navigation}){
  return (
    <View>
      <Text>
        CalendarScreen
      </Text>
    </View>
  );
}

export function ProfileScreen({navigation}){
  return (
    <View>
      <Text>
        ProfileScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
