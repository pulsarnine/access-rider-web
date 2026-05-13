'use client'
import Link from 'next/link'
import { Button } from "@mantine/core";
import Head from "next/head";
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';

export default function Instructions() {
    useEffect ( () => {
        document.title = "Access Rider ┃ How To Use";
    }, []);
    return (
        <>
            <HeaderSimple />
            <div>
                <h1> This page is how to use the website </h1>
                <p> It will contain content in an easy read format, including images, on how to use the site </p>
                <h2>This Website</h2>
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
                <Link href="/what-is-an-access-rider">
                    <Button variant="filled" color="teal" size="sm">
                    What Is an Access Rider
                    </Button>
                </Link>
                page is for people who are sent an access rider, or others who are learning, to find out more about the document and what to do 
                when they are sent one to look at.
                </p>
            </div>
        </>
    )
}

// what all the pages do (title and desc)
// screenshots of the site with alt text 
// easy read images 
// 

