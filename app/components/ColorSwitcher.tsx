'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from "@deemlol/next-icons"


export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </ActionIcon>
  );
}

// https://laur.design/blog/mantineui-theme-switcher/

// import { Select, MantineProvider } from '@mantine/core';
// import { useState } from 'react';


// const customTheme = {
//   colorScheme: 'light',
//   colors: {
//     corporateBlue: [
//       '#e6f0ff', '#b3d1ff', '#80b3ff', '#4d94ff',
//       '#1a75ff', '#005ce6', '#0047b3', '#003280',
//       '#001c4d', '#00091a'
//     ],
//     highContrast: ['#000000', '#ffffff'], // 2-value contrast scheme
//   },
//   primaryColor: 'corporateBlue',
// };

// export default function ThemeSelector({ setTheme }) {
//   const [value, setValue] = useState('light');

//   return (
//     <Select
//       label="Choose theme"
//       placeholder="Pick one"
//       value={value}
//       onChange={(val) => {
//         setValue(val);
//         setTheme(val);
//       }}
//       data={['light', 'dark', 'corporateBlue', 'highContrast']}
//     />
//   );
// }