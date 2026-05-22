"use client";

//import React from 'react';
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import todaysDate from "./get-date";
//import { useSetFont } from '@/app/components/SetFontProvider';
//import { useLocalStorage } from '@mantine/hooks';
//import { Commissioner } from 'next/font/google';
import userChoice from "./sharingChoice";
import { useLocalStorage } from "usehooks-ts";

// set all styles

const MyPDF = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    titleBlock: {
      alignItems: "center",
      marginBottom: 8,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      color: "#2c1810",
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    text: {
      marginBottom: 10,
      fontSize: 11,
      textAlign: "justify",
      lineHeight: 1.7,
      color: "#333",
    },
    subscript: {
      fontSize: 9,
      textAlign: "left",
    },
    contactInfo: {
      textAlign: "center",
      fontSize: "16",
      color: "#333",
    },
    heading: {
      fontSize: "20",
      textAlign: "left",
      color: "#333",
    },
  });

  // declare all variables and take off quote from each end

  const [name] = useLocalStorage("name", undefined);

  const [pronouns] = useLocalStorage("pronouns", null);

  const [phone] = useLocalStorage("phone", undefined);

  const [email] = useLocalStorage("email", undefined);

  const [supportName] = useLocalStorage("supportName", undefined);

  const [supportPronouns] = useLocalStorage("supportPronouns", undefined);

  const [supportPhone] = useLocalStorage("supportPhone", undefined);

  const [supportEmail] = useLocalStorage("supportEmail", undefined);

  const [shortIntro] = useLocalStorage("shortIntro", undefined);

  const [dayToDay] = useLocalStorage("dayToDay", undefined);

  const [travel] = useLocalStorage("travel", undefined);

  const [workingHours] = useLocalStorage("workingHours", undefined);

  const [location] = useLocalStorage("location", undefined);

  const [comms] = useLocalStorage("comms", undefined);

  const [flare] = useLocalStorage("flare", undefined);

  const [emergencyName] = useLocalStorage("emergencyName", undefined);

  const [emergencyPronouns] = useLocalStorage("emergencyPronouns", undefined);

  const [emergencyPhone] = useLocalStorage("emergencyPhone", undefined);

  const [emergencyEmail] = useLocalStorage("emergencyEmail", undefined);

  const [otherInfo] = useLocalStorage("otherInfo", undefined);

  const [supportingInfo] = useLocalStorage("supportingInfo", undefined);

  const [sharing] = useLocalStorage("sharing", undefined);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          //the title of the document
          <title>{name}'s Access Rider</title>
          {/* title of page */}
          <Text style={styles.title}> {name}'s access rider</Text>
          <Text style={styles.contactInfo}>
            {pronouns} {email} {phone}
          </Text>
          <Text style={styles.title}>Support Worker:</Text>
          <Text style={styles.contactInfo}>{supportName}</Text>
          <Text style={styles.contactInfo}>
            {supportPronouns} {supportPhone} {supportEmail}
          </Text>
          <Text style={styles.text}>{shortIntro}</Text>
          <Text style={styles.heading}>Day To Day</Text>
          <Text style={styles.text}>{dayToDay}</Text>
          <Text style={styles.heading}>Travel</Text>
          <Text style={styles.text}>{travel}</Text>
          <Text style={styles.heading}>Working Hours</Text>
          <Text style={styles.text}>{workingHours}</Text>
          <Text style={styles.heading}>Location and Working Environment</Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.heading}>Communication Requirements</Text>
          <Text style={styles.text}>{comms}</Text>
          <Text style={styles.heading}>A Flare Up/Episode For Me</Text>
          <Text style={styles.text}>{flare}</Text>
          <Text style={styles.title}>Emergency Contact:</Text>
          <Text style={styles.contactInfo}>{emergencyName}</Text>
          <Text style={styles.contactInfo}>
            {emergencyPronouns} {emergencyPhone} {emergencyEmail}
          </Text>
          <Text style={styles.heading}>Other Information</Text>
          <Text style={styles.text}>{otherInfo}</Text>
          <Text style={styles.heading}>Supporting Information</Text>
          <Text style={styles.text}>{supportingInfo}</Text>
          {/* footer */}
          <Text style={styles.subscript}>{userChoice}</Text>
          <Text style={styles.subscript}>
            This document was created on {todaysDate}
          </Text>
          <Text style={styles.subscript}>
            {" "}
            This document was made with access-rider-web
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;

// Source - https://stackoverflow.com/a/57785947
// Posted by gujaru
// Retrieved 2026-05-18, License - CC BY-SA 4.0
