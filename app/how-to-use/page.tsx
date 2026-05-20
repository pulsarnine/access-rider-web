'use client'
import Link from 'next/link'
import { Button, List } from "@mantine/core";
import Head from "next/head";
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';

export default function Instructions() {
    useEffect ( () => {
        document.title = "Access Rider ┃ How To Use";
    }, []);
    return (
        <>
            <div className="p-8">
                <h1 className="text-5xl"> This page is how to use the website </h1>
                <p> It will contain content in an easy read format, including images, on how to use the site </p>
                <h2 className="text-3xl">This Website</h2>
                <p>The pages on this website are:</p>
                <p>The 
                <Link href="/examples">
                    <Button variant="filled" color="teal" size="sm">
                    Examples
                    </Button>                
                </Link>
                page contains examples of Access Riders for you to look at and download. 
                You can see sections to consider when writing your own Access Rider.
                <br />
                The 
                <Link href="/create">
                    <Button variant="filled" color="teal" size="sm">
                    Create
                    </Button> 
                </Link>
                page is for writing and downloading your own document with your access needs and information detailed how you want to share it. 
                <br />
                The 
                <Link href="/how-to-use">
                    <Button variant="filled" color="teal" size="sm">
                    How To
                    </Button>
                </Link>
                page is this page. It teaches you how to use the website.
                <br /> 
                The 
                <Link href="/learn-more">
                    <Button variant="filled" color="teal" size="sm">
                    Learn More
                    </Button>
                </Link>
                page is for people who are sent an access rider, or others who are learning, to find out more about the document and what to do 
                when they are sent one to look at.
                </p>
            </div>
            <div className="p-8">
                <h2 className="text-3xl">How to use this website</h2>
                <p>
                    It is recommended that you start on the examples page to consider some sections you may want to include 
                    and the different options for structuring the document. If you have any questions do look at the Learn More 
                    Page for some FAQs or other links. 
                </p>
                <h3>Using the create page</h3>
                <List type="ordered">
                    <List.Item>
                        Choose a section from the suggested drop downs, or create your own – add custom sections as you like 
                        and you can remove others. 
                    </List.Item>
                    <List.Item>
                        Fill in your information for that section, you can come back and edit this later. You could also do 
                        this in bullet points if you wish.
                    </List.Item>
                    <List.Item>
                        The input you give saves to your device automatically and means you can access it later. 
                    </List.Item>
                    <List.Item>
                        Once you are happy you have included all the sections you want, press the final download 
                        button to export your document in a selected format. The default is an PDF but you can change this 
                        to be Word or others. 
                        {/* (Bear in mind that a PDF can be difficult to work with screen readers so often 
                        the OpenDoc choice is the most accessible format.)  */}
                    </List.Item>
                </List>
            </div>
        </>
    )
}

// what all the pages do (title and desc)
// screenshots of the site with alt text 
// easy read images 
// 

