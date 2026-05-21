'use client'

//import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import todaysDate from './get-date';
//import { useSetFont } from '@/app/components/SetFontProvider';
//import { useLocalStorage } from '@mantine/hooks';
//import { Commissioner } from 'next/font/google';
import userChoice from './sharingChoice';


// set all styles 

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
    textAlign: 'justify',
    lineHeight: 1.7,
    color: '#333',
  },
  subscript: {
    fontSize: 9,
    textAlign: 'left',
  },
  contactInfo: {
    textAlign: 'center',
    fontSize: '16',
    color: '#333'
  },
  heading: {
    fontSize: '20',
    textAlign: 'left',
    color: '#333',
  }

});

// declare all variables and take off quote from each end

var name = "placeholder"
name = String(localStorage.getItem("name"));
name = name.substring(1, name.length-1);

var pronouns = "placeholder"
pronouns = String(localStorage.getItem("pronouns"));
pronouns = pronouns.substring(1, pronouns.length-1);

var phone = "placeholder"
phone = String(localStorage.getItem("phone"));
phone = phone.substring(1, phone.length-1);

var email = "placeholder"
email = String(localStorage.getItem("email"));
email = email.substring(1, email.length-1);

var supportName = "placeholder"
supportName = String(localStorage.getItem("supportName"));
supportName = supportName.substring(1, supportName.length-1);

var supportPronouns = "placeholder"
supportPronouns = String(localStorage.getItem("supportPronouns"));
supportPronouns = supportPronouns.substring(1, supportPronouns.length-1);

var supportPhone = "placeholder"
supportPhone = String(localStorage.getItem("supportPhone"));
supportPhone = supportPhone.substring(1, supportPhone.length-1);

var supportEmail = "placeholder"
supportEmail = String(localStorage.getItem("supportEmail"));
supportEmail = supportEmail.substring(1, supportEmail.length-1);

var shortIntro = "placeholder"
shortIntro = String(localStorage.getItem("shortIntro"));
shortIntro = shortIntro.substring(1, shortIntro.length-1);

var dayToDay = "placeholder"
dayToDay = String(localStorage.getItem("dayToDay"));
dayToDay = dayToDay.substring(1, dayToDay.length-1);

var travel = "placeholder"
travel = String(localStorage.getItem("travel"));
travel = travel.substring(1, travel.length-1);

var workingHours = "placeholder"
workingHours = String(localStorage.getItem("workingHours"));
workingHours = workingHours.substring(1, workingHours.length-1);

var location = "placeholder"
location = String(localStorage.getItem("location"));
location = location.substring(1, location.length-1);

var comms = "placeholder"
comms = String(localStorage.getItem("comms"));
comms = comms.substring(1, comms.length-1);

var flare = "placeholder"
flare = String(localStorage.getItem("flare"));
flare = flare.substring(1, flare.length-1);

var emergencyName = "placeholder"
emergencyName = String(localStorage.getItem("emergencyName"));
emergencyName = emergencyName.substring(1, emergencyName.length-1);

var emergencyPronouns = "placeholder"
emergencyPronouns = String(localStorage.getItem("emergencyPronouns"));
emergencyPronouns = emergencyPronouns.substring(1, emergencyPronouns.length-1);

var emergencyPhone = "placeholder"
emergencyPhone = String(localStorage.getItem("emergencyPhone"));
emergencyPhone = emergencyPhone.substring(1, emergencyPhone.length-1);

var emergencyEmail = "placeholder"
emergencyEmail = String(localStorage.getItem("emergencyEmail"));
emergencyEmail = emergencyEmail.substring(1, emergencyEmail.length-1);

var otherInfo = "placeholder"
otherInfo = String(localStorage.getItem("otherInfo"));
otherInfo = otherInfo.substring(1, otherInfo.length-1);

var supportingInfo = "placeholder"
supportingInfo = String(localStorage.getItem("supportingInfo"));
supportingInfo = supportingInfo.substring(1, supportingInfo.length-1);

var sharing = "placeholder"
sharing = String(localStorage.getItem("sharing"));
sharing = sharing.substring(1, sharing.length-1);



const MyPDF = () => {
 
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          //the title of the document
          <title>{name}'s Access Rider</title>

          {/* title of page */}
          <Text style={styles.title}> {name}'s access rider</Text>
          <Text style={styles.contactInfo}>{pronouns} {email} {phone}</Text>

          <Text style={styles.title}>Support Worker:</Text>
          <Text style={styles.contactInfo}>{supportName}</Text>
          <Text style={styles.contactInfo}>{supportPronouns} {supportPhone} {supportEmail}</Text>

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
          <Text style={styles.contactInfo}>{emergencyPronouns} {emergencyPhone} {emergencyEmail}</Text>

          <Text style={styles.heading}>Other Information</Text>
          <Text style={styles.text}>{otherInfo}</Text>

          <Text style={styles.heading}>Supporting Information</Text>
          <Text style={styles.text}>{supportingInfo}</Text>

          {/* footer */}
          <Text style={styles.subscript}>{userChoice}</Text>
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



