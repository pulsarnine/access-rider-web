import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { useLocalStorage } from 'usehooks-ts'



export default function MyInput() {
  const [text, setText] = useLocalStorage('textInputStore','hello');
  // first variable is the name and second is the default that it starts with

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <Button 
        onClick={() => setText('hello')}
      >
        Reset
      </Button>
    </>
  );
}
