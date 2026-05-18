// Source - https://stackoverflow.com/a/79456421
// Posted by Usukhbayar Batbayar
// Retrieved 2026-05-17, License - CC BY-SA 4.0

import { useLocalStorage } from 'usehooks-ts'
import { Button } from '@mantine/core'

export default function Component() {
  const [value, setValue, removeValue] = useLocalStorage('test-key', 0)

  return (
    <div>
      <p>Count: {value}</p>
      <Button
        onClick={() => {
          setValue((x: number) => x + 1)
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          setValue((x: number) => x - 1)
        }}
      >
        Decrement
      </Button>
      <Button
        onClick={() => {
          removeValue()
        }}
      >
        Reset
      </Button>
    </div>
  )
}
