import { Accordion, Container, Title } from '@mantine/core';
import classes from './FAQSimple.module.css';

const ans1 =
  'Anyone can write or provide an access rider to their employer or co-workers, but they are frequently written and shared by disabled, D/deaf or neurodivergent people.';
const ans2 = 
  'They can be shared at any time. Some people choose to send them when initially applying for a job but others may send after having been hired or simply when they find out about access riders. You can also send one or an updated version when and if your access requirements change.'
const ans3 = 
  'They are a clear way to formally lay out access needs without the individual having to repetitively communicate them to people. It can serve as a complete document or reference and sets out the best ways to support someone you are working with.'
const ans5 = 
  'It’s up to you! You are allowed to create and share as long or short of a document as you want, and therefore if you have any access needs at all you can ask for them.'   
const ans6 = 
  'As an employer you can create and share a template if you wish, though you should also accept access riders in other formats, to most easily allow the individual to communicate their needs.'

  export default function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper}>
      {/* <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title> */}

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="who">
          <Accordion.Control>Who might write or provide an access rider?</Accordion.Control>
          <Accordion.Panel>{ans1}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="when">
          <Accordion.Control>When might an access rider be sent or provided?</Accordion.Control>
          <Accordion.Panel>{ans2}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="why">
          <Accordion.Control>Why do access riders exist?</Accordion.Control>
          <Accordion.Panel>{ans3}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="what-receive">
          <Accordion.Control>What to do if you receive an access rider?</Accordion.Control>
          <Accordion.Panel>
            It is good practice to begin the conversation as an employer, if you are asking all your employees 
            for their access needs it removes the stigma when some want to share. It will also create a more 
            welcoming and likely more productive workspace for everyone!
            <br />
            <br />
            When you receive the rider you should read it thoroughly and make sure that you fully understand 
            all the needs listed by the individual. If you have any questions it is good to reach out to the 
            individual or their support worker, preferred contact details will likely be listed on the document 
            itself. Similarly you can do further research by looking at recognised charities or the gov.uk website 
            for more information about your responsibilities and the best ways to support someone.
          </Accordion.Panel> 
        </Accordion.Item>
{/* need to add a paragraph break for answer4 */}

        <Accordion.Item className={classes.item} value="how">
          <Accordion.Control>How do I know if I need an Access Rider?</Accordion.Control>
          <Accordion.Panel>{ans5}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="template">
          <Accordion.Control>As an employer, should I send a template?</Accordion.Control>
          <Accordion.Panel>{ans6}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}