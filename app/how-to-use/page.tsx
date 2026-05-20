'use client'
import Link from 'next/link'
import { Button, List } from "@mantine/core";
import Head from "next/head";
import React, { useEffect } from "react";
import HeaderSimple from '../components/HeaderSimple';
import Image from 'next/image';
import Grid from '../learn-more/grid';

export default function Instructions() {
    useEffect ( () => {
        document.title = "Access Rider ┃ How To Use";
    }, []);
    return (
        <>
            <div className="p-8">
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
                {/* Easy read how to instructions */}
                <h2 className="text-5xl">How to use this website</h2>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-examples.png"
                            alt = "icon of blue pages with text lines and e.g"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        You should start on the examples page. 
                    </p>
                </Grid>
                <br />


                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-template.jpg"
                            alt = "icon of empty boxes and text lines on a document"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        You can see templates to make an access rider there. 
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-question.png"
                            alt = "Confused face with thought bubble with question mark inside"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        If you have questions look at the Learn More page. 
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-faq.jpg"
                            alt = "icon of two speech bubbles, one with question mark"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        It has Frequently Asked Questions (FAQs) and more links.
                    </p>
                </Grid>
                
                <br />
                <br />            
                <h3 className="text-3xl">The Create Page</h3>
                <br />
                
                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-form.png"
                            alt = "Piece of paper with varying sizes of empty boxes on right hand side"
                                    width = {160}
                                    height = {80}
                    />
                    <Image src="/ER-typing.png"
                            alt = "hands on computer keyboard icon"
                                    width = {160}
                                    height = {80}
                    />
                    <p className="text-3xl">
                        Enter your information in the form.
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-personal3.png"
                            alt = "Icon of blue form with person outline in top left corner and text lines on right side"
                                    width = {160}
                                    height = {80}
                    />
                    <Image src="/ER-typing.png"
                            alt = "hands on computer keyboard icon"
                                    width = {160}
                                    height = {80}
                    />
                    <p className="text-3xl">
                        Enter your personal details.
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-accessibility.png"
                            alt = "stick person in circle with arms out, the accessibility symbol"
                                    width = {160}
                                    height = {80}
                    />
                    <Image src="/ER-typing.png"
                            alt = "hands on computer keyboard icon"
                                    width = {160}
                                    height = {80}
                    />
                    <p className="text-3xl">
                        Enter information about your access needs.
                    </p>
                </Grid>
                <br />
                
                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-edit.jpg"
                            alt = "Icon of pen in a box to symbolise editing"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        You can edit this later because it is saved on your device.
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-done.svg"
                            alt = "Green box with tick"
                                    width = {160}
                                    height = {80}
                    />
                    <Image src="/ER-click.jpg"
                            alt = "icon of mouse click in box"
                                    width = {160}
                                    height = {80}
                    />
                    <p className="text-3xl">
                        When you have finished click the "reload page" button.
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-click.jpg"
                            alt = "icon of mouse click in box"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        After this click the "download now" button. 
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-download.png"
                            alt = "Download document icon"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        This downloads your access rider. 
                    </p>
                </Grid>
                <br />

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-downloadpdf.png"
                            alt = "PDF document icon"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        It downloads as a <strong>PDF</strong>. {/* make pdf bold */}
                    </p>
                </Grid>

                <br />
                    <p className="text-3xl">
                        <strong>PDF</strong>: A PDF is a digital document format with standard text and image formatting.
                    </p>
                <br />
                

                <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <Image src="/ER-filetype.jpg"
                            alt = "icon of three documents stacked on each other"
                                    width = {160}
                                    height = {80}
                    />
                    <p></p>
                    <p className="text-3xl">
                        You can choose another file type if you like.
                    </p>
                </Grid>

                
                {/* (Bear in mind that a PDF can be difficult to work with screen readers so often 
                    the OpenDoc choice is the most accessible format.)  */}
            </div>
        </>
    )
}

// what all the pages do (title and desc)
// screenshots of the site with alt text 
// easy read images 
// 

