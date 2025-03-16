import flagsmith from 'flagsmith'
import { FlagsmithProvider } from 'flagsmith/react'
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <FlagsmithProvider options={{
        environmentID: import.meta.env.VITE_FLAGSMITH_KEY,
      }} flagsmith={flagsmith}>
        <AppRouter/>
      </FlagsmithProvider>
    </>
  )
}

export default App
