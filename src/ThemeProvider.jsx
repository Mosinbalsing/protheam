// src/ThemeProvider.jsx
import { ThemeProvider } from 'next-themes'

export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      {children}
    </ThemeProvider>
  )
}
