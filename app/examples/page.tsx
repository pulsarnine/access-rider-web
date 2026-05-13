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
        <h1> This page contains some examples of access riders</h1>
        <p>I will include some links to a website as well as some example riders that individuals can read, download and copy from
        <br />insert a link here ?</p>
        
        <Link className='text-ul' 
            href="https://weareunlimited.org.uk/resource/creating-your-own-access-rider/">
            <Button variant="filled" color="teal" size="sm">
                Unlimited Link
            </Button>
        </Link>
        </>
    )
}

// this page needs:
// link to the unlimited website 
// documents embedded to download 
// text with example riders on it 
// a paragraph that says what is about to be on the page