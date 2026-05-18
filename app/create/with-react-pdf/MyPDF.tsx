'use client'

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const name = "charlie";
let value
value = localStorage.getItem("textInputStore") 

const MyPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text> {name}'s access rider</Text>
          <Text> this is a heading with the following text: {value}</Text>
          <Text>Hello, React-PDF! hello hello </Text>
         <Text>{`const greet = "Hello, World!";`}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;