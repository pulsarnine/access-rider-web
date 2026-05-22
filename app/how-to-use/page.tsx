"use client";
import Link from "next/link";
import { Button, List } from "@mantine/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import HeaderSimple from "../components/HeaderSimple";
import Image from "next/image";
import Grid from "../learn-more/grid";
import { ArrowDownRight } from "@deemlol/next-icons";

export default function Instructions() {
  useEffect(() => {
    document.title = "Access Rider ┃ How To Use";
  }, []);
  const [size, setSize] = useState(26);

  if (size < 16) {
    setSize(16);
  }
  if (size > 72) {
    setSize(72);
  }

  return (
    <>
      <main id="main">
        {/* size change buttons */}
        <p className="flex items-center justify-center">Change Fontsize:</p>
        <ul className="flex items-center justify-center gap-4 mt-10">
          <li>
            <button
              onClick={() => setSize(size - 4)}
              className="py-2 px-6 rounded shadow bg-[#333333] 
                text-white hover:bg-[#222222]"
            >
              Decrease
            </button>
          </li>
          <li>
            <button
              onClick={() => setSize(size + 4)}
              className="py-2 px-6 rounded shadow bg-[#333333] 
                text-white hover:bg-[#222222]"
            >
              Increase
            </button>
          </li>
        </ul>

        {/* Page intro */}
        <div className="p-8">
          <p
            style={{
              fontSize: size + 4,
            }}
          >
            This Website
          </p>
          <p
            style={{
              fontSize: size - 8,
            }}
          >
            The pages on this website are:
          </p>
          <p
            style={{
              fontSize: size - 8,
            }}
          >
            The{" "}
            <Link href="/examples">
              <strong>Examples</strong>
            </Link>{" "}
            page contains examples of Access Riders for you to look at and
            download. You can see sections to consider when writing your own
            Access Rider.
            <br />
            The{" "}
            <Link href="/create">
              <strong>Create</strong>
            </Link>{" "}
            page is for writing and downloading your own document with your
            access needs and information detailed how you want to share it.
            <br />
            The{" "}
            <Link href="/how-to-use">
              <strong>How To</strong>
            </Link>{" "}
            page is this page. It teaches you how to use the website.
            <br />
            The{" "}
            <Link href="/learn-more">
              <strong>Learn More</strong>
            </Link>{" "}
            page is for people who are sent an access rider, or others who are
            learning, to find out more about the document and what to do when
            they are sent one to look at.
          </p>
        </div>

        {/* Easy read how to instructions */}
        <div className="p-8">
          <p
            style={{
              fontSize: size + 12,
            }}
          >
            How to use this website
          </p>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-examples.png"
              alt="icon of blue pages with text lines and e.g"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              You should start on the examples page.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-template.jpg"
              alt="icon of empty boxes and text lines on a document"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              You can see templates to make an access rider there.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-question.png"
              alt="Confused face with thought bubble with question mark inside"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              If you have questions look at the Learn More page.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-faq.jpg"
              alt="icon of two speech bubbles, one with question mark"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              It has Frequently Asked Questions (FAQs) and more links.
            </p>
          </Grid>

          <br />
          <br />
          <p
            style={{
              fontSize: size + 4,
            }}
          >
            The Create Page
          </p>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-form.png"
              alt="Piece of paper with varying sizes of empty boxes on right hand side"
              width={160}
              height={80}
            />
            <Image
              src="/ER-typing.png"
              alt="hands on computer keyboard icon"
              width={160}
              height={80}
            />
            <p
              style={{
                fontSize: size,
              }}
            >
              Enter your information in the form.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-personal3.png"
              alt="Icon of blue form with person outline in top left corner and text lines on right side"
              width={160}
              height={80}
            />
            <Image
              src="/ER-typing.png"
              alt="hands on computer keyboard icon"
              width={160}
              height={80}
            />
            <p
              style={{
                fontSize: size,
              }}
            >
              Enter your personal details.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-accessibility.png"
              alt="stick person in circle with arms out, the accessibility symbol"
              width={160}
              height={80}
            />
            <Image
              src="/ER-typing.png"
              alt="hands on computer keyboard icon"
              width={160}
              height={80}
            />
            <p
              style={{
                fontSize: size,
              }}
            >
              Enter information about your access needs.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-edit.jpg"
              alt="Icon of pen in a box to symbolise editing"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              You can edit this later because it is saved on your device.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-done.svg"
              alt="Green box with tick"
              width={160}
              height={80}
            />
            <Image
              src="/ER-click.jpg"
              alt="icon of mouse click in box"
              width={160}
              height={80}
            />
            <p
              style={{
                fontSize: size,
              }}
            >
              When you have finished click the "Download" button.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-download.png"
              alt="Download document icon"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              This downloads your access rider.
            </p>
          </Grid>
          <br />

          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            <Image
              src="/ER-downloadpdf.png"
              alt="PDF document icon"
              width={160}
              height={80}
            />
            <p></p>
            <p
              style={{
                fontSize: size,
              }}
            >
              It downloads as a <strong>PDF</strong>. {/* make pdf bold */}
              <br />
              <br />
              <strong>PDF</strong>: A PDF is a digital document format with
              standard text and image formatting.
            </p>
          </Grid>

          {/* (Bear in mind that a PDF can be difficult to work with screen readers so often 
                    the OpenDoc choice is the most accessible format.)  */}
        </div>
      </main>
    </>
  );
}

// what all the pages do (title and desc)
// screenshots of the site with alt text
// easy read images
//
