'use client'

import { Select, TextInput } from '@mantine/core';
import classes from './ContainedInput.module.css';

export default function ContainedInputs() {
  return (
    <>
      <TextInput label="Description" placeholder="I have been working as ... for three years." classNames={classes} />

      <Select
        mt="md"
        comboboxProps={{ withinPortal: true }}
        data={['React']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />
    </>
  );
}