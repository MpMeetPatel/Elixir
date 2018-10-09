import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default class LinksScreen extends Component {
   static navigationOptions = {
      title: "Setting"
   };

   render() {
      return (
         <ScrollView style={styles.container}>
            <View>
               <Text> My Setting Navigation Screen</Text>
            </View>
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: "#fff"
   }
});
