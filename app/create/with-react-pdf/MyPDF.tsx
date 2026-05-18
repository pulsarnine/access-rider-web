'use client'

import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import todaysDate from './get-date';
import { useSetFont } from '@/app/components/SetFontProvider';

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
  titleBlock: {
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2c1810',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  text: {  
    marginBottom: 10,
    fontSize: 11,
    font: {useSetFont},
    textAlign: 'justify',
    lineHeight: 1.7,
    color: '#333',
  },
  subscript: {
    fontSize: 9,
    textAlign: 'left',
  }
});

const name = "charlie";
let value
value = localStorage.getItem("textInputStore") 

const MyPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <title>{name}'s Access Rider</title>
          <Text style={styles.title}> {name}'s access rider</Text>
          <Text style={styles.text}> this is a heading with the following text: {value}</Text>
          <Text>Hello, React-PDF! hello hello </Text>
         <Text>{`const greet = "Hello, World!";`}</Text>
         <Text style={styles.subscript}>This document was created on {todaysDate}</Text>
         <Text style={styles.subscript}> This document was made with access-rider-web</Text>
        </View>
      </Page>
    </Document>
    
  );
};




export default MyPDF;



// Source - https://stackoverflow.com/a/57785947
// Posted by gujaru
// Retrieved 2026-05-18, License - CC BY-SA 4.0



