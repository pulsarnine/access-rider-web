import Link from "next/link";
import Image from "next/image";
import classes from "./charityLinks.module.css";
import React from "react";
import Grid from "./grid";

export default function CharityLinks() {
    
    return (
        <>
        <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
            
            <Link 
                target="_blank"
                href="https://www.autism.org.uk/">
                <Image src="/NAS-Logo.jpg"
                alt = "National Autistic Society Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.addiss.co.uk/">
                <Image src="/addiss-logo.jpg"
                alt = "The National Attention Deficit Disorder Information and Support Service Logo and Link"
                width = {160}
                height = {80} 
                />
            </Link>
            <Link 
                target="_blank"
                href="https://adhduk.co.uk/">
                <Image src="/ADHD-UK.jpg"
                alt = "ADHD UK Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.ukaan.org/">
                <Image src="/ukaan-logo.svg"
                alt = "UK Adult ADHD Network Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.bdadyslexia.org.uk/">
                <Image src="/bda-logo.jpg"
                alt = "British Dyslexia Association Logo and Link"
                width = {160}
                height = {80} 
                />
            </Link>
            <Link 
                target="_blank"
                href="https://ocdaction.org.uk/">
                <Image src="/ocd-action-logo.jpg"
                alt = "OCD Action Logo and Link"
                width = {160}
                height = {80} 
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.ocduk.org/">
                <Image src="/ocd-uk-logo.jpg"
                alt = "OCD UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.bipolaruk.org/">
                <Image src="/bipolar-logo.jpg"
                alt = "Bipolar UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.ptsduk.org/">
                <Image src="/ptsd-logo.jpg"
                alt = "PTSD UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.meassociation.org.uk/">
                <Image src="/ME-logo.jpg"
                alt = "ME/CFS Association Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.hypermobility.org/">
                <Image src="/hyper-logo.png"
                alt = "Hypermobility Syndromes Association Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.ehlers-danlos.org/">
                <Image src="/EDS-logo.png"
                alt = "Ehlers-Danlos Support UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.arthritis-uk.org/">
                <Image src="/arthritis-logo.jpg"
                alt = "Arthritis UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://www.potsuk.org/">
                <Image src="/pots-logo.jpg"
                alt = "PoTS UK Logo and Link"
                width ={160}
                height = {80}
                />
            </Link>
            <Link 
                target="_blank"
                href="https://epilepsysociety.org.uk/">
                <Image src="/epilepsySociety.jpg"
                alt = "Epilepsy Society Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link 
                target="_blank"
                href="https://bhf.org.uk/">
                <Image src="/bhf-logo.png"
                alt = "British Heart Foundation Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link 
                target="_blank"
                href="https://rnid.org.uk/">
                <Image src="/rnid-logo.png"
                alt = "Royal National Institute for Deaf People (RNID) Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>
            <Link
                target="_blank"
                href="https://rnib.org.uk/">
                <Image src="/rnib-logo.jpg"
                alt = "Royal National Institute of Blind People Logo and Link"
                width = {160}
                height = {80}  
                />
            </Link>

        </Grid>

        </>
    )
}