import { Row, Image } from 'antd'
import AlfaMidiLogo from '../assets/alfamidi.svg'
import MasKobisLogo from '../assets/kobis.svg'
import HakataLogo from '../assets/hakata.svg'
import AmbarukmoLogo from '../assets/ambarukmo.png'

import './ContextPageFour.css'

function ContextPageFour() {
  return (
    <div
      style={{
        background:
          'linear-gradient(302deg, rgba(223,244,255,1) 0%, rgba(255,255,255,1) 58%)',
        overflowX: 'hidden',
        paddingTop: '7%',
        height: 450,
      }}
    >
      <p
        style={{
          fontWeight: 500,
          color: '#00A3F4',

          textAlign: 'center',
        }}
      >
        D A M O G O
      </p>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: 36,
          textAlign: 'center',
        }}
      >
        Kerjasama
      </p>
      <Row
        justify="space-around"
        style={{
          marginTop: 30,
        }}
      >
        <Image
          id="imageHover"
          preview={false}
          src={AlfaMidiLogo}
          width={142.77}
          height={142.77}
        />
        <Image
          id="imageHover"
          preview={false}
          src={MasKobisLogo}
          width={127.31}
          height={126.4}
        />
        <Image
          id="imageHover"
          preview={false}
          src={HakataLogo}
          width={142.77}
          height={142.77}
        />
        <Image
          id="imageHover"
          preview={false}
          src={AmbarukmoLogo}
          width={199.15}
          height={99.12}
        />
      </Row>
    </div>
  )
}

export default ContextPageFour
