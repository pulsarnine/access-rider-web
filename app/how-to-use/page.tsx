import Link from 'next/link'
import Button from "../components/button.tsx";

export default function Instructions() {
    return (
        <>
        <h1> This page is how to use the website </h1>
        <p> It will contain content in an easy read format, including images, on how to use the site </p>
        <h2>This Website</h2>
        <p>The pages on this website are:</p>
        <p>The 
        <Button><Link href="/examples">Examples</Link></Button> 
        page contains examples of Access Riders for you to look at and download. 
        You can see sections to consider when writing your own Access Rider.
        <br />
        The 
        <Button><Link href="/create">Create</Link></Button> 
        page is for writing and downloading your own document with your access needs and information detailed how you want to share it. 
        <br />
        The 
        <Button><Link href="/how-to-use">How To</Link></Button>
        page is this page. It teaches you how to use the website.
        <br /> 
         The 
        <Button><Link href="/what-is-an-access-rider">What Is an Access Rider</Link></Button>
        page is for people who are sent an access rider, or others who are learning, to find out more about the document and what to do 
        when they are sent one to look at.
        </p>

        </>
    )
}

// what all the pages do (title and desc)
// screenshots of the site with alt text 
// easy read images 
// 

