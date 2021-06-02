import { Row, Image, Col } from 'antd'
import NameLogo from '../Header/Union.svg'

import AppStoreLogo from './app-store.png'
import AndroidStoreLogo from './google-play-1.png'

export default function Footer() {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 20,
        paddingLeft: 40,
        background:
          'linear-gradient(180deg, rgba(223, 244, 255, 0) 0%, #DFF4FF 100%)',
      }}
    >
      <Row justify="space-between">
        <Image src={NameLogo} />
      </Row>
      <Row
        style={{
          marginTop: 40,
        }}
      >
        <Col
          span={5}
          style={{
            textAlign: 'justify',
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            Ikuti kami
          </p>
          <p>Terms of Use</p>
          <p>Privacy</p>

          <p>Careers</p>
          <p>About</p>
          <p>CA Supply Chains Act</p>
          <p>Sustainability</p>
          <p>Affiliates</p>
          <p>Recall Info</p>
          <p>Inclusion and Diversity</p>
        </Col>
        <Col
          span={5}
          style={{
            textAlign: 'justify',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            Hubungi kami
          </p>
          <p>Alamat</p>
          <p
            style={{
              lineHeight: 1.5,
            }}
          >
            Jl. Prof. Herman Yohanes No.1212, Terban, Kec. Gondokusuman, Kota
            Yogyakarta, Daerah Istimewa Yogyakarta 55223
          </p>
          <p
            style={{
              marginTop: 40,
            }}
          >
            Jam Buka
          </p>
          <div>
            <p>Mon - Fri 6:00 am - 8:00 pm</p>
            <p
              style={{
                marginTop: -15,
              }}
            >
              Sun 9:30 am - 6:00 pm
            </p>
          </div>
        </Col>
        <Col span={14}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            Download DamoGO App
          </p>
          <Row justify="center">
            <Image
              preview={false}
              src={AndroidStoreLogo}
              width={161.26}
              height={48}
            />
            <Image
              style={{
                marginLeft: 30,
              }}
              preview={false}
              src={AppStoreLogo}
              width={159.03}
              height={48}
            />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
