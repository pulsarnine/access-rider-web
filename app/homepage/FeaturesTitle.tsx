'use client'

//import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesTitle.module.css';
import { defaultHead } from 'next/head';

const features = [
  {
    //icon: IconReceiptOff,
    title: 'Create',
    description: 'The Create page is for making the access rider, with suggested sections and the option to add your own, it is fully customisable and then gives you the ability to export your document for further editing and sharing.',
  },
  {
    //icon: IconFileCode,
    title: 'How To',
    description: 'The How To page contains detailed instructions for using the create page. These are in a range of formats including easy read. These instructions are also available on the create page in a simplified form.',
  },
  {
    //icon: IconCircleDotted,
    title: 'Learn More',
    description:
      'What is an access rider? On this page you can learn more about what an access rider is, and get any questions you have about the document answered with a small FAQ section. It is the best page to look for further reading or charity links.',
  },
  {
    //icon: IconFlame,
    title: 'Examples',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme objeThe examples page has a range of examples of Access Riders from various professions which you can read or download to inspire your own. It also has further reading links. ct',
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
        {/* <feature.icon size={26} stroke={1.5} /> */}
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gap={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            A fully featured React components library for your next project
          </Title>
          <Text c="dimmed">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
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