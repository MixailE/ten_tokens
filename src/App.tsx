import { ThirdwebProvider } from '@thirdweb-dev/react'
import Main from 'components/Main'
import { Ethereum } from '@thirdweb-dev/chains'

function App() {
  return (
    <ThirdwebProvider supportedChains={[Ethereum]}>
      <div className="App min-h-screen max-h-screen">
        <Main />
      </div>
    </ThirdwebProvider>
  )
}

export default App
