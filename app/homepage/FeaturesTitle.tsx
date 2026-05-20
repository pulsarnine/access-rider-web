'use client'

import { Edit, BookOpen, FileText, HelpCircle } from "@deemlol/next-icons";
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesTitle.module.css';
import { defaultHead } from 'next/head';
import Link from "next/link";

const features = [
  {
    icon: Edit,
    title: 'Create',
    description: 'The Create page is for making the access rider, with suggested sections and the option to add your own, it is fully customisable and gives you the ability to export your document for further editing and sharing.',
    link: "/create"
  },
  {
    icon: BookOpen,
    title: 'How To',
    description: 'The How To page contains detailed instructions for using the create page. These are in a range of formats including easy read. These instructions are also available on the create page in a simplified form.',
  },
  {
    icon: HelpCircle ,
    title: 'Learn More',
    description:
      'What is an access rider? On this page you can learn more about what an access rider is, and get any questions you have about the document answered with a small FAQ section. It is the best page to look for further reading or charity links.',
  },
  {
    icon: FileText ,
    title: 'Examples',
    description:
      'The examples page has a range of examples of Access Riders from various professions which you can read or download to inspire your own. It also has further reading links.',
  },
];

export default function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
      {/* <Link href={feature.link}>
      </Link> */}
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gap={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          {/* <h1 className={classes.title} order={2}> */}
          <h1 className="text-5xl">
            Welcome to Access Rider Web!
          </h1>
          <Text c="dimmed">
            Have a look around the site and when you're ready head to the Create page to write your own access rider.
          </Text>

          <Link href="/create">
            <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
              size="lg"
              radius="md"
              mt="xl"
            >Create Page
            </Button>               
          </Link>

        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}