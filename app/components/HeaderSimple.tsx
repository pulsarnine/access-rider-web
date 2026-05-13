
// this page needs:
// title of site and logo 
// logo and text of the home, create, examples, how to, what is pages 
// needs to be useable from a keyboard only - tab through 
// see this page in easy read button
// change font, colour etc. of page button

'use client'

//mantine Simpleheader
import React, { useState } from 'react';
import { Burger, Container, Divider, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
//import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';
import Link from 'next/link';

const links = [
  { link: '/create', label: 'Create' },
  { link: '/examples', label: 'Examples' },
  { link: '/how-to-use', label: 'How To' },
  { link: '/what-is-an-access-rider', label: 'Learn More' },
];

export default function HeaderSimple() {
  console.log(classes);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
      //   event.preventDefault();
         setActive(link.link);
       }} //This captures the input so it just changes the 'active' section, ie. selecting the button
      //    it doesn't _actually_ direct the page, this is good for more 'dynamic' pages where you don't route to a new page
      //    but instead just change the content of the current page
      //    This isn't what you're currently doing
      //    If you want to see the difference look up SPAs (single page applications) "spas near me"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
          aria-label="Toggle navigation"
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="xs"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {items}
        </ScrollArea>
      </Drawer>
    </header>
  );
}

/* yk how Holly wants to change the names of the TechSoc exec roles to 'CXO'
We decided that E&HM would be 'CTOO', no mistake, as Chief Technical Operations Officer */
/* So, officially I am a behringer microphone */
//Fuck u 
// website.tsx.ystv.yippee.joyandwhimsy.org <- expensive aahhh domain name
// @johnny whyd you suggest this 
// Who are you