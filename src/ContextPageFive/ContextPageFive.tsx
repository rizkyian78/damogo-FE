import { Row, Image, Col, Button, Card } from 'antd'
import Phone1Logo from '../assets/phone1.svg'
import Phone2Logo from '../assets/phone2.svg'

import './ContextPageFive.css'
function ContextPageFive() {
  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <div id="background">
        <Row
          style={{
            paddingTop: 40,
            marginBottom: 30,
          }}
        >
          <Col
            span={12}
            style={{
              paddingTop: 30,
            }}
          >
            <Card
              style={{
                marginLeft: 35,
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                width: 435,
                height: 435,
                backgroundColor: '#005179',
                border: 'none',
              }}
            >
              <Image
                preview={false}
                src={Phone1Logo}
                style={{ marginTop: 30 }}
              />
            </Card>
          </Col>
          <Col
            span={12}
            style={{
              marginLeft: -100,
              textAlign: 'start',
            }}
          >
            <p
              style={{
                marginTop: 80,
                fontWeight: 500,
                fontSize: 18,
                color: 'white',
              }}
            >
              D A M O G O
            </p>
            <p
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Untuk Restoran
            </p>
            <p
              style={{
                fontSize: 24,
                color: '#FFF',
                textAlign: 'justify',
              }}
            >
              Aplikasi gratis kami adalah cara paling efisien untuk memesan dari
              semua pemasok Anda. Selesaikan pesanan lebih cepat, tidur lebih
              awal.
            </p>
            <br />
            <Button
              style={{
                backgroundColor: '#005179',
                borderRadius: 100,
                boxShadow: '0px 20px 30px -15px #005179',
                fontSize: 18,
                fontWeight: 500,
                color: '#FFF',
                border: 'none',
                width: 232,
                height: 48,
              }}
            >
              Pelajari Selengkapnya
            </Button>
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: '#009673',
          marginTop: -30,
          overflow: 'hidden',
        }}
      >
        <Row>
          <Col
            span={12}
            style={{
              marginLeft: 100,
              textAlign: 'start',
            }}
          >
            <p
              style={{
                marginTop: 80,
                fontWeight: 500,
                fontSize: 18,
                color: 'white',
              }}
            >
              D A M O G O
            </p>
            <p
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Untuk Supplier
            </p>
            <p
              style={{
                fontSize: 24,
                color: '#FFF',
                textAlign: 'justify',
              }}
            >
              Baik Anda adalah pertanian milik keluarga atau distributor
              nasional, platform khusus kami akan mengubah cara Anda berbisnis.
              Hemat waktu untuk tugas manual, kurangi kesalahan pesanan, dan
              jual lebih banyak produk.
            </p>
            <br />
            <Button
              style={{
                backgroundColor: '#005844',
                borderRadius: 100,
                boxShadow: '0px 20px 30px -15px #005179',
                fontSize: 18,
                fontWeight: 500,
                color: '#FFF',
                border: 'none',
                width: 232,
                height: 48,
              }}
            >
              Pelajari Selengkapnya
            </Button>
          </Col>
          <Col
            style={{
              paddingTop: 30,
            }}
          >
            <Card
              style={{
                marginLeft: 35,
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                width: 435,
                height: 435,
                backgroundColor: '#005844',
                border: 'none',
              }}
            >
              <Image
                preview={false}
                src={Phone2Logo}
                style={{ marginTop: 30 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContextPageFive
