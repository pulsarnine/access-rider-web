'use client'
import Link from 'next/link'
import { Button } from "@mantine/core";
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';


export default function Examples() {
    useEffect ( () => {
        document.title = "Access Rider ┃ Examples";        
    }, []);
    return(
        <>
        <HeaderSimple />
        <div className="p-8">
            <h1> This page contains some examples of access riders</h1>
            <p>
                Access riders can come in many forms, both more detailed and more concise, whichever will best suit your needs and 
                communication preferences. Depending on the industry that you work in, you may need to include different parts or 
                have different key access needs you wish to communicate. Some example access riders can be found on this page, 
                with a brief synopsis of the industry and access needs of the author. You can either read these on the website or 
                download for future reference. There are further links at the bottom of the page if you wish to do further research.
                <br />
            </p>
            
            <a className='text-ul' 
                href="https://weareunlimited.org.uk/resource/creating-your-own-access-rider/"
            >
                <Button variant="filled" color="teal" size="sm">
                    Unlimited
                </Button>
            </a>
            <p>
                A good start point for research about the process of creating your access rider
            </p>
            <Button>
                <a href="/Access-Rider-2026-Template.pdf" download="template">Download Template</a>
            </Button>
            
            <h2 className="text-3xl">
                Other Templates
            </h2>
            <a className='text-ul' 
                href="https://assets-corporate.channel4.com"
            >
                <Button variant="filled" color="teal" size="sm">
                    Channel 4
                </Button>
            </a>

            <a className='text-ul' 
                href="https://disabilityarts.online"
            >
                <Button variant="filled" color="teal" size="sm">
                    Disability Arts Online
                </Button>
            </a>
            <h2>
                For Employers    
            </h2>     
            <p>
                UK Government Reasonable Adjustments Information
                <br />
                Your employer, by law, is required to make “reasonable adjustments” to ensure workers with disabilities 
                or physical or mental health conditions are not substantially disadvantaged when doing their jobs. 
            </p>
            <a className='text-ul' 
                href="https://gov.uk"
            >
                <Button variant="filled" color="teal" size="sm">
                    gov.uk
                </Button>
            </a>
        </div>
        </>
    )
}

// this page needs:
// link to the unlimited website 
// documents embedded to download 
// text with example riders on it 
// a paragraph that says what is about to be on the page