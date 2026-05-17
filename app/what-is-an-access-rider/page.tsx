'use client'
import Link from 'next/link'
import { Button, List } from '@mantine/core'
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';
import FAQSimple from './FAQSimple';
import Head from 'next/head';


export default function Explanation() {
    useEffect ( () => {
        document.title = "Access Rider ┃ What is an Access Rider?";    
    }, []);
    return (
        <>
        <FAQSimple />
        <div className="p-8">
            <h2>
                In an Emergency
            </h2>
            <p>
                Source: 
                { " " }
                <a target="_blank" href="https://www.nhs.uk/tests-and-treatments/first-aid/">
                    nhs.uk
                </a>
            </p>
            <List type="ordered" listStyleType="disc" start={1}>
                <List.Item>
                    Check there is no further danger to yourself or the individual.
                </List.Item>
                <List withPadding listStyleType="disc">
                    <List.Item>If someone is unconscious but breathing you should put them in the recovery position.</List.Item>
                    <List.Item>If someone is unconscious and not breathing you should start CPR immediately and phone 999.</List.Item>
                </List>
                <List.Item>If necessary, dial 999 for an ambulance.</List.Item>
                <List withPadding listStyleType="disc">
                    <List.Item>
                        You will be asked your telephone number, your location, a brief description of the individual and their state 
                        (eg bleeding, unconscious, not breathing)
                    </List.Item>
                </List>
                <List.Item>Carry out basic first aid where required</List.Item>
                <List.Item>Once the situation is stable, or when you can ask someone else to, you should contact the individual’s 
                    emergency contacts. 
                </List.Item>
            </List>  
            
            <p>
            It is also worth noting down some of these charities who may be able to provide further support or reading for 
            specific access requirements.
            </p>
            //insert charities
            <h2>Further Reading</h2>
            
            <Link className='text-ul' href="https://historicengland.org.uk/advice/inclusion/make-heritage-accessible/access-rider/">
                <Button variant="filled" color="teal" size="sm">
                    Historic England
                </Button>
            </Link>
            <br />
            <Link className='text-ul' href="https://www.shapearts.org.uk/News/access-docs-for-artists-resource/">
                <Button variant="filled" color="teal" size="sm">
                    Shapearts
                </Button>
            </Link>
            {/* would be cool to make this so that you can search links */}
            <p>
                Links for many different charities can be found below
            </p>
        </div>
        </>
    )
}   

// easy read if time?
//some links to other sites on buttons
