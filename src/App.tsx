import './App.css'
import HeaderComponent from './Header/Header'
import ContextPageOne from './ContextPageOne/ContextPageOne'
import ContextPageTwo from './ContextPageTwo/ContextPageTwo'
import ContextPageThree from './ContextPageThree/ContextPageThree'
import ContextPageFour from './ContextPageFour/ContextPageFour'
import Footer from './Footer/Footer'
import WhatsappIcon from './assets/whatsapp'

import { Affix, Button, Card } from 'antd'
import ContextPageFive from './ContextPageFive/ContextPageFive'

function App() {
  return (
    <div
      style={{
        background:
          'linear-gradient(302deg, rgba(255,255,255,1) 58%, rgba(223,244,255,1) 84%)',
        overflowX: 'hidden',
      }}
    >
      <Affix offsetTop={580} style={{ marginLeft: '93%' }}>
        <Card
          style={{
            width: 64,
            height: 64,
            backgroundColor: '#3AE058',
            borderRadius: '50%',
          }}
        >
          <Button
            ghost
            type="text"
            size="large"
            icon={<WhatsappIcon />}
            style={{
              bottom: 15,
              right: 12,
              fontSize: 20,
            }}
          />
        </Card>
      </Affix>

      <HeaderComponent />
      <ContextPageOne />
      <ContextPageTwo />
      <ContextPageThree />
      <ContextPageFour />
      <ContextPageFive />
      <Footer />
    </div>
  )
}

export default App
