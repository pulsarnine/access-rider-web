"use client";

import { Anchor, Container, Group, Text } from "@mantine/core";
import classes from "./FooterSimple.module.css";
import Image from "next/image";

// const links = [
//   { link: '#', label: 'Contact' },
//   { link: '#', label: 'Privacy' },
//   { link: '#', label: 'Blog' },
//   { link: '#', label: 'Careers' },
// ];

export default function FooterSimple() {
  //   const items = links.map((link) => (
  //     <Anchor<'a'>
  //       c="dimmed"
  //       key={link.label}
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //       size="sm"
  //     >
  //       {link.label}
  //     </Anchor>
  //   ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          src="/favicon.ico"
          width={50}
          height={50}
          alt="Access-Rider-Dev logo"
        />
        <Text size="xs">
          Access-Rider-Web built with Mantine and next.js for DARCI 2026
        </Text>
        {/* <Group className={classes.links}>{items}</Group> */}
      </Container>
    </div>
  );
}
