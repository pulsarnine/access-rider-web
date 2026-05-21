'use client'

//import React, { useState } from 'react';
import { Button, Select, TextInput, ComboboxItem } from '@mantine/core';
import { useLocalStorage } from 'usehooks-ts'

export default function UserInput() {
  const [text, setText] = useLocalStorage('textInputStore','hello');
  // first variable is the name and second is the default that it starts with

  //so many variables  
  const [name, setName] = useLocalStorage('name','')
  const [pronouns, setPronouns] =  useLocalStorage('pronouns','')
  const [phone, setPhone] = useLocalStorage('phone','')
  const [email, setEmail] = useLocalStorage('email','')
  const [supportName, setSupportName] = useLocalStorage('supportName','')
  const [supportPronouns, setSupportPronouns] = useLocalStorage('supportPronouns','')
  const [supportPhone, setSupportPhone] = useLocalStorage('supportPhone','')
  const [supportEmail, setSupportEmail] = useLocalStorage('supportEmail','')
  const [shortIntro, setShortIntro] = useLocalStorage('shortIntro','') 
  const [dayToDay, setDayToDay] = useLocalStorage('dayToDay','')
  const [travel, setTravel] = useLocalStorage('travel','')
  const [workingHours, setWorkingHours] = useLocalStorage('workingHours','')
  const [location, setLocation] = useLocalStorage('location','')
  const [comms, setComms] = useLocalStorage('comms','')
  const [flare, setFlare] = useLocalStorage('flare','enter your name')
  const [emergencyName, setEmergencyName] = useLocalStorage('emergencyName','')
  const [emergencyPronouns, setEmergencyPronouns] = useLocalStorage('emergencyPronouns','')
  const [emergencyPhone, setEmergencyPhone] = useLocalStorage('emergencyPhone','')
  const [emergencyEmail, setEmergencyEmail] = useLocalStorage('emergencyEmail','')
  const [otherInfo, setOtherInfo] = useLocalStorage('otherInfo','')
  const [supportingInfo, setSupportingInfo] = useLocalStorage('supportingInfo','')
  const [sharing, setSharing] = useLocalStorage("sharing",'')

  return (
    <>
    {/* all of the input dropdowns */}

    {/* name */}
    <h1 className="text-4xl">Your Details</h1>
    <br />
      <TextInput
      size = "lg"
      value={name}
      onChange={(event) => setName(event.currentTarget.value)}
      label="Name"
      //needs label to be set or defined with aria-label
      description="Enter your name"
      placeholder="John Smith"
      />
      <TextInput
      size = "lg"
      value={pronouns}
      onChange={(event) => setPronouns(event.currentTarget.value)}
      label="Pronouns"
      description="Enter your pronouns"
      placeholder="they/them"
      />
      <TextInput
      size = "lg"
      value={phone}
      onChange={(event) => setPhone(event.currentTarget.value)}
      label="Mobile Number"
      description="Enter your mobile number"
      placeholder="07700 900843"
      />
      <TextInput
      size = "lg"
      value={email}
      onChange={(event) => setEmail(event.currentTarget.value)}
      label="Email"
      description="Enter your email"
      placeholder="your.name@gmail.com"
      />

      {/* support name */}
    <br />
    <br />
    <h1 className="text-4xl">Your Support Worker's Details</h1>
    <br />
      <TextInput
      size = "lg"
      value={supportName}
      onChange={(event) => setSupportName(event.currentTarget.value)}
      label="Support Worker's Name"
      description="Enter your support worker's name"
      placeholder="Jane Doe"
      />
      <TextInput
      size = "lg"
      value={supportPronouns}
      onChange={(event) => setSupportPronouns(event.currentTarget.value)}
      label="Support Worker's Pronouns"
      description="Enter your support worker's pronouns"
      placeholder="they/them"
      />
      <TextInput
      size = "lg"
      value={supportPhone}
      onChange={(event) => setSupportPhone(event.currentTarget.value)}
      label="Support Worker's Mobile Number"
      description="Enter your Support Worker's mobile number"
      placeholder="07700 900243"
      />
      <TextInput
      size = "lg"
      value={supportEmail}
      onChange={(event) => setSupportEmail(event.currentTarget.value)}
      label="Support Worker's Email"
      description="Enter your support worker's email"
      placeholder="your.name@gmail.com"
      />

    <br />
    <br />
    <h1 className="text-4xl">Main Content</h1>  
    <br />
      {/* personal intro */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={shortIntro}
      onChange={(event) => setShortIntro(event.currentTarget.value)}
      label="Short Personal Intro"
      description="A small introduction about yourself."
      placeholder="I work in the dance industry, my conditions include the following... I am a tall woman with long blonde hair often wearing the colour blue."
      />
      <p>
        You could write a small introduction, who you are and your profession/practice. 
      <br />
        If you wish include a disclosure about your condition(s) and essential things to know about working with you. 
      <br />
        You could include a visual description of yourself.
      </p>
      <br />

      {/* day to day */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={dayToDay}
      onChange={(event) => setDayToDay(event.currentTarget.value)}
      label="Day To Day"
      description="Daily accommodations you may need, dietary requirements."
      placeholder="I frequently benefit from more time to myself. I cannot have any cross contamination with gluten."
      />

      {/* travel  */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={travel}
      onChange={(event) => setTravel(event.currentTarget.value)}
      label="Travel"
      description="Including regular workplace, travelling for work, potential accomodation requirements"
      placeholder="I work in the dance industry, my conditions include the following... I am a tall woman with long blonde hair often wearing the colour blue."
      />
      <p>
        Getting to your regular place of work, trips, needing a close/accessible parking space. 
        <br />
        Travel away including: beaks after travel away, international travel and accommodation – whether you need a support worker, access requirements for accommodation.
      </p>
      <br />

      {/* working hours */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={workingHours}
      onChange={(event) => setWorkingHours(event.currentTarget.value)}
      label="Working Hours"
      description="Consider day length, breaks, schedules"
      placeholder="I need a 4 day working week, a full lunch hour and communication about schedules a week prior."
      />
      
      {/* location */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={location}
      onChange={(event) => setLocation(event.currentTarget.value)}
      label="Location and Working Environment"
      description="Working from home, office desk space, noise requirements.  "
      placeholder="I need a quiet room availble, adjustable height desk, and a ground floor level office."
      />

      {/* communications */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={comms}
      onChange={(event) => setComms(event.currentTarget.value)}
      label="Communication Requirements"
      description="A BSL interpreter, use of a screen reader, Augmentative and Alternative Communication requirements."
      placeholder="I need written documents to be read aloud to me, I would prefer to be contacted over WhatsApp. I need communications in writing a week in advance."
      />

      {/* flare ups */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={flare}
      onChange={(event) => setFlare(event.currentTarget.value)}
      label="A Flare Up/Episode For Me"
      description="What this might look like for you"
      placeholder="I know when an episode is coming and can anticipate it. I get more flare ups towards the end of the day so need more support then."
      />
    <br />
    <br />
    <h1 className="text-3xl">Your Emergency Contact's Details</h1>
    <br />
      {/* emergency contact */}
      <TextInput
      size = "lg"
      value={emergencyName}
      onChange={(event) => setEmergencyName(event.currentTarget.value)}
      label="Emergency Contact's Name"
      description="Enter your emergency contact's name"
      placeholder="Chris Finch"
      />
      <TextInput
      size = "lg"
      value={emergencyPronouns}
      onChange={(event) => setEmergencyPronouns(event.currentTarget.value)}
      label="Emergency Contact's Pronouns"
      description="Enter your emergency contact's pronouns"
      placeholder="they/them"
      />
      <TextInput
      size = "lg"
      value={emergencyPhone}
      onChange={(event) => setEmergencyPhone(event.currentTarget.value)}
      label="Emergency Contact's Mobile Number"
      description="Enter your emergency contact's mobile number"
      placeholder="07700 900985"
      />
      <TextInput
      size = "lg"
      value={emergencyEmail}
      onChange={(event) => setEmergencyEmail(event.currentTarget.value)}
      label="Emergency Contact's Email"
      description="Enter your emergency contact's email"
      placeholder="your.name@gmail.com"
      />
    <br />
    <br />
    <h1 className="text-3xl">Additional Information</h1>
    <br />
      {/* other information */}
      <TextInput
      size = "lg"
      component="textarea" multiline 
      value={otherInfo}
      onChange={(event) => setOtherInfo(event.currentTarget.value)}
      label="Other Information"
      description="Include anything you want to add that doesn’t fit into one of the other sections here."
      placeholder="Extra details or information that you want to include"
      />

      {/* supporting information */}
      <TextInput
      size = "lg"
      component="textarea" multiline
      value={supportingInfo}
      onChange={(event) => setSupportingInfo(event.currentTarget.value)}
      label="Supporting Information"
      description="Include supporting information such as links to charities"
      placeholder="You may want to link additional resources"
      />
    <br />
    <br />
    <h1 className="text-3xl">Sharing Notice</h1>
    <br />
      {/* selection for two types of sharing info  */}
      {/* doesnt work */}
      {/* <Select 

      label="Sharing Notice"
      placeholder="Choose Option"
      data={["Allow Sharing","No Sharing"]}
    /> */}

    <TextInput
      size = "lg"
      value={sharing}
      onChange={(event) => setSharing(event.currentTarget.value)}
      label="Sharing Notice"
      description="Adds a sharing comment on the access rider type 'y' to allow sharing or 'n' to disallow it"
      placeholder="n"
      />

    </>,

  );
} 