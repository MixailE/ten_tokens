import { ThirdwebProvider } from '@thirdweb-dev/react'
import Main from 'components/Main'
import { Ethereum } from '@thirdweb-dev/chains'
import useCustomScrollbar from 'helpers/useCustomScrollbar'

function App() {
  const ref = useCustomScrollbar()

  return (
    <ThirdwebProvider supportedChains={[Ethereum]}>
      <div className="App min-h-screen max-h-screen" ref={ref}>
        <Main />
      </div>
    </ThirdwebProvider>
  )
}

export default App
