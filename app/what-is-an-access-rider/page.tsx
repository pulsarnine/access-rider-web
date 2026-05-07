import Link from 'next/link'
import Button from '../components/button.tsx'

export default function Explanation() {
    return (
        <>
        <h1>This page contains information about what an access rider is for those receiving one</h1>
        <h2>What is an access rider?</h2>
        <p>An access rider is a document which disabled people can create and share to provide information about 
        their access needs. It will provide all the necessary information to ensure the receiving party can take the actions 
        required.</p>
        <h2>What action does the recipient need to take?</h2>
        <p>So, you just received an access rider, what now? 
        <br /> The first thing to do is read through the document, you should make sure that you understand 
        what all of the individuals requirements are. If there are any parts which you're confused about, it is
        worth asking the person who sent the rider to you for clarification.</p>
        <h2>Emergency Information</h2>
        <p>It may also include information about the indivudals emergency contacts and what to do in an emergency.
        <br /> 
        It is also worth noting down some of these charities who may be able to provide further support or reading for 
        specific access requirements.
        </p>
        //insert charities
        <h2>Further Reading</h2>
        <Button><Link className='text-ul' href="https://historicengland.org.uk/advice/inclusion/make-heritage-accessible/access-rider/">Historic England</Link></Button>
        <p>Text break</p>
        <Button><Link className='text-ul' href="https://www.shapearts.org.uk/News/access-docs-for-artists-resource/">Shapearts</Link></Button>
        </>
    )
}   

// information for someone receiving about what the doc is 
// easy read if time?
//some links to other sites on buttons
