import Link from 'next/link'
import Button from "../components/button.tsx";

export default function Examples() {
    return(
        <>
        <h1> This page contains some examples of access riders</h1>
        <p>I will include some links to a website as well as some example riders that individuals can read, download and copy from
        <br />insert a link here ?</p>
        <Button variant="primary"><Link className='text-ul' 
        href="https://weareunlimited.org.uk/resource/creating-your-own-access-rider/">Unlimited Link</Link></Button>
        </>
    )
}

// this page needs:
// link to the unlimited website 
// documents embedded to download 
// text with example riders on it 
// a paragraph that says what is about to be on the page