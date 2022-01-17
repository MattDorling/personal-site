import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ToggleButton } from './ToggleButton'

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  if (darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <ToggleButton
      offIcon={<FaSun />}
      onIcon={<FaMoon />}
      defaultChecked={false}
      onClick={() => setDarkMode(!darkMode)}
    />
  )
}
