import { Row, Col, Image, Card, Button } from 'antd'
import AyamGoreng from '../assets/ayamGoreng.svg'
function ContextPageThree() {
  return (
    <div
      style={{
        paddingTop: '7%',
        background:
          'linear-gradient(302deg, rgba(255,187,0,1) 0%, rgba(255,255,255,1) 66%)',
      }}
    >
      <Row
        style={{
          marginLeft: 25,
        }}
      >
        <Col
          span={12}
          style={{
            textAlign: 'start',
          }}
        >
          <p style={{ color: '#FFBB00' }}>B L O G</p>
          <p style={{ fontSize: 36, fontWeight: 'bold' }}>
            Cara menyimpan daging agar awet dan segar tanpa Freezer{' '}
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#5A5A5A',
            }}
          >
            Sudah banyak orang yang tahu jika menyimpan daging dalam freezer
            menjadi cara mudah menyimpan stok daging supaya awet dan tahan lama.
            Tapi bagaimana ya jika tidak memiliki kulkas atau freezer? Tenang!
            Ada kok caranya,{' '}
            <span
              style={{
                color: '#FFBB00',
              }}
            >
              yuk disimak!
            </span>
          </p>
          <Button
            style={{
              width: 212,
              height: 48,
              fontWeight: 500,
              fontSize: 18,
              marginTop: 10,
              color: '#FFFF',
              border: 'none',
              backgroundColor: '#FFBB00',
              boxShadow: '0px 20px 30px -15px #FFBB00',
              borderRadius: 100,
            }}
          >
            Baca Selengkapnya
          </Button>
        </Col>
        <Col span={12}>
          <Card
            style={{
              width: 565,
              height: 540,
              borderRadius: '1000px 0px 0px 1000px',
              border: 'none',
              marginLeft: 62,
              marginTop: -90,
              boxShadow: 'inset 5px 0px 20px rgba(0, 0, 0, 0.1)',
              background:
                'linear-gradient(270deg, rgba(223, 244, 255, 0) 0%, #FFBB00 100%)',
            }}
          >
            <Image
              src={AyamGoreng}
              preview={false}
              width={400}
              height={400}
              style={{
                filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.1))',
                marginTop: 40,
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ContextPageThree
