'use client'
import Link from 'next/link'
import { Button } from "@mantine/core";
import React, { useEffect } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import DisplayRider1 from './rider1display';
import PdfReactPdf from './rider1display';
import { createRoot } from 'react-dom/client';
import Grid from '../learn-more/grid';

export default function Examples() {
    useEffect ( () => {
        document.title = "Access Rider ┃ Examples";        
    }, []);
    return(
        <>
        <main id="main">
        <div className="p-8 py-10">
            <p>
                Access riders can come in many forms, both more detailed or more concise, whichever will best suit your needs and 
                communication preferences. Depending on the industry that you work in, you may need to include different parts or 
                have different key access needs you wish to communicate. 
                <br />
                Some example access riders can be found on this page. You can either read these on the website or download for 
                future reference. There are further links at the bottom of the page if you wish to do further research.
                <br />
            </p>
            <br />
            <p>
                The Unlimited website is a good starting point for research about the process of creating your access rider
                <br />
                The examples below are from their document linked here: 
            </p>
            <a 
                className='text-ul' 
                target="_blank"
                href="https://weareunlimited.org.uk/resource/creating-your-own-access-rider/"
            >
                <Button variant="filled" color="teal" size="sm">
                    Unlimited
                </Button>
            </a>
            <br />
            <br />
            {/* add padding and divs here */}
            <p>
                The first example is an access rider for a performance artist. It is shorter, just a page long and contains 
                fewer sections. It consicely details access needs, emergency contact information and provides a link for more
                information about Lupus, the individual's condition. 
            </p>
            <br />
                <iframe 
                    className="px-4"
                    src="/Access Rider Example 1.pdf" width="100%" height="700px" 
                />
            {/* <PdfReactPdf /> */}
            <br />
            <Grid>
                <a href="access-rider-docs/Access Rider Example 1.docx" download="Access Rider Example 1">
                    <Button>
                        Download Example 1.docx
                    </Button>
                </a>
                <br />
                <br />
                <a href="/Access Rider Example 1.pdf" download="Access Rider Example 1">
                    <Button>
                        Download Example 1.pdf 
                    </Button>
                </a>
            </Grid>
            <br />
            <br />
            <p>
                The second example is an access rider for a theatre and visual arts artist. This document is longer, five pages.
                It is comprehensive in the paragraphs writtern and includes more written in the personal section. It provides a visual 
                description and some links to eqiuipment that would be useful to have. 
            </p>
            <br />
            <iframe 
                className="px-4"
                src="/Access Rider Example 2.pdf" width="100%" height="700px"
            />
            <br />
            <Grid>
                <a href="/Access Rider Example 2.docx" download="Access Rider Example 2">
                    <Button>
                        Download Example 2.docx
                    </Button>
                </a>
                <br />
                <br />
                <a href="/Access Rider Example 2.pdf" download="Access Rider Example 2">
                    <Button>
                        Download Example 2.pdf
                    </Button>
                </a>
            </Grid>
        </div>
        <div className="p-8 py-10">
            <h2 className="text-3xl">
                Other Templates
            </h2>
            <p>
                This site is just one way of creating and structuring your access rider. If you want to use an alternative 
                layout or look at different formats for inspiration there are links below from reccomeneded sources for this. 
            </p>
            <a 
                className='text-ul' 
                target="_blank"
                href="https://assets-corporate.channel4.com/_flysystem/s3/documents/2021-12/Access%20Rider%20Template_November2021_0.pdf"
            >
                <Button variant="filled" color="teal" size="sm">
                    Channel 4
                </Button>
            </a>
            <p>
                A template from Channel 4 with example sections. (Downloads in .pdf format)
            </p>
            <a href="/Access-Rider-2026-Template.pdf" 
            download="template"
            >
                <Button>
                    Download MU Template
                </Button>
            </a>
            <p>
                A template from the Musicians Union (Downloads in editable .pdf format, with link 
                at bottom to download alternative formats)
            </p>
            <p>
                The following links are from disability arts and there is an article and download document.
            </p>
            <a 
                className='text-ul'
                target="_blank"
                href="https://disabilityarts.online/magazine/opinion/access-rider-open-template/"
            >
                <Button variant="filled" color="teal" size="sm">
                    Disability Arts Online Opinion Article
                </Button>
            </a>
            <a href="/Access-Rider-for-Creative-Freelance-Practitioners-Open-Template.docx" 
                download="Access-Rider-for-Creative-Freelance-Practitioners-Open-Template"
            >
                <Button>
                    Disability Arts Open Template
                </Button>
            </a>


            
        </div>
        </main>
        </>
    )
}

// this page needs:
// link to the unlimited website 
// documents embedded to download 
// text with example riders on it 
// a paragraph that says what is about to be on the page