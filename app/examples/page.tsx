'use client'
import Link from 'next/link'
import { Button } from "@mantine/core";
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';
import { PDFViewer } from '@react-pdf/renderer';
import DisplayRider1 from './rider1display';
import PdfReactPdf from './rider1display';
import { createRoot } from 'react-dom/client';

export default function Examples() {
    useEffect ( () => {
        document.title = "Access Rider ┃ Examples";        
    }, []);
    return(
        <>
        <div className="p-8">
            <p>
                Access riders can come in many forms, both more detailed or concise, whichever will best suit your needs and 
                communication preferences. Depending on the industry that you work in, you may need to include different parts or 
                have different key access needs you wish to communicate. 
                <br />
                Some example access riders can be found on this page. You can either read these on the website or download for 
                future reference. There are further links at the bottom of the page if you wish to do further research.
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
                The Unlimited website is a good starting point for research about the process of creating your access rider
                <br />
                The examples below are from their document linked above. 
            </p>
            {/* <PdfReactPdf /> */}
            <Button>
                <a href="/Access Rider Example 1.docx" download="Access Rider Example 1">Download Example 1.docx</a>
            </Button>
            <br />
            <br />
            <Button>
                <a href="/Access Rider Example 1.pdf" download="Access Rider Example 1">Download Example 1.pdf</a>
            </Button>
            <br />
            <br />
            <br />
            <Button>
                <a href="/Access Rider Example 2.docx" download="Access Rider Example 2">Download Example 2.docx</a>
            </Button>
            <br />
            <br />
            <Button>
                <a href="/Access Rider Example 2.pdf" download="Access Rider Example 2">Download Example 2.pdf</a>
            </Button>


            
            <h2 className="text-3xl">
                Other Templates
            </h2>
            <p>
                This site is just one way of creating and structuring your access rider. If you want to use an alternative 
                layout or look at different formats for inspiration there are links below from reccomeneded sources for this. 
            </p>
            <a className='text-ul' 
                href="https://assets-corporate.channel4.com/_flysystem/s3/documents/2021-12/Access%20Rider%20Template_November2021_0.pdf"
            >
                <Button variant="filled" color="teal" size="sm">
                    Channel 4
                </Button>
            </a>
            
            <Button>
                <a href="/Access-Rider-2026-Template.pdf" 
                download="template"
                >
                    Download Template
                </a>
            </Button>

            <a className='text-ul'
                href="https://disabilityarts.online/magazine/opinion/access-rider-open-template/"
            >
                <Button variant="filled" color="teal" size="sm">
                    Disability Arts Online Opinion Article
                </Button>
            </a>

            <Button>
                <a href="/Access-Rider-for-Creative-Freelance-Practitioners-Open-Template.docx" 
                download="Access-Rider-for-Creative-Freelance-Practitioners-Open-Template"
                >
                    Disability Arts Open Template
                </a>
            </Button>


            
        </div>
        </>
    )
}

// this page needs:
// link to the unlimited website 
// documents embedded to download 
// text with example riders on it 
// a paragraph that says what is about to be on the page