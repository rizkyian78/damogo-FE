import { Typography, Row, Image, Col, Button, Card } from 'antd'
import PhoneLogo from '../assets/damogoPhone.svg'
import PolygonIcon from '../assets/polygon'

const { Paragraph } = Typography

function ContextPageTwo() {
  return (
    <div
      style={{
        background:
          'linear-gradient(302deg, rgba(223,244,255,1) 0%, rgba(255,255,255,1) 58%)',
        overflowX: 'hidden',
        paddingTop: '7%',
      }}
    >
      <p style={{ fontWeight: 500, color: '#00A3F4' }}>D A M O G O</p>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: 36,
        }}
      >
        Demo Aplikasi
      </p>
      <Row
        style={{
          overflow: 'hidden',
        }}
      >
        <Col span={10}>
          <Card
            style={{
              borderRadius: '50%',
              backgroundColor: 'transparent',
              marginLeft: 30,
              marginTop: 50,
              border: '2px solid #9BDDFF',
              width: 448,
              height: 448,
            }}
          >
            <Card
              style={{
                borderRadius: '50%',
                backgroundColor: 'transparent',
                width: 406,
                height: 406,
                border: '2px solid #DFF4FF',
                marginLeft: -5,
                marginBottom: 5,
              }}
            >
              <Card
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#DFF4FF',
                  width: 364,
                  height: 364,
                }}
              >
                <Image
                  preview={false}
                  src={PhoneLogo}
                  width={263}
                  height={525}
                  style={{
                    marginTop: -120,
                  }}
                />
              </Card>
            </Card>
          </Card>
        </Col>
        <Col
          span={12}
          style={{
            textAlign: 'start',
            marginTop: 200,
            fontSize: 24,
          }}
        >
          <Paragraph>
            <span
              style={{
                color: '#00A3F4',
                fontWeight: 'bold',
              }}
            >
              DamoGo
            </span>{' '}
            adalah sistem yang membantu proses pengadaan bahan makanan lebih
            mudah dan efisien!
          </Paragraph>
          <Paragraph>
            Atur semua pesanan dari supplier maupun bahan dari kamu ke franchise
            secara online.
          </Paragraph>

          <Button
            type="primary"
            size="large"
            style={{
              width: 192,
              height: 48,
              borderRadius: 100,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Lihat Demo <span> </span>
            <Button
              ghost
              style={{ border: '1px solid white', borderRadius: '50%' }}
              icon={<PolygonIcon />}
            />
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default ContextPageTwo
