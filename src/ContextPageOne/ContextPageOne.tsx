import FruitLogo from './damogo 1.png'
import IconPadi from '../assets/padi'
import IconToko from '../assets/toko'
import IconGo from '../assets/go'

import { Row, Typography, Image, Col, Space, Button, Card } from 'antd'

const { Paragraph } = Typography

function ContextPageOne() {
  return (
    <div style={{ padding: 20 }}>
      <Row justify="space-between">
        <Col span={12}>
          <p style={{ textAlign: 'start' }}>
            <Typography.Text
              strong
              style={{ fontSize: 72, fontWeight: 'bold', color: '#000000' }}
            >
              Create taste,
              <br />
              not{' '}
              <span style={{ color: '#009673', wordBreak: 'break-word' }}>
                waste
              </span>
            </Typography.Text>

            <Paragraph style={{ color: '#5A5A5A', fontSize: 18 }}>
              Selamatkan makanan lezat, makanan tidak terjual dari restaurant
              favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta
              dapatkan harga hemat hingga 90% dari harga reguler!
            </Paragraph>
          </p>
        </Col>
        <Col style={{ marginTop: 100 }} span={11}>
          <Card
            style={{
              width: 666,
              height: 391,
              marginTop: 20,
              borderTopLeftRadius: 100,
              backgroundColor: '#DFF4FF',
            }}
          >
            <Card
              style={{
                borderRadius: '50%',
                backgroundColor: '#00A3F4',
                marginTop: -100,
                marginLeft: 80,
                width: 434,
                height: 434,
              }}
            >
              <Card
                style={{
                  width: 77,
                  height: 77,
                  borderRadius: 100,
                  position: 'absolute',
                  marginTop: -50,
                  marginLeft: -30,
                  background: 'rgba(0, 163, 244, 0.2)',
                  zIndex: 30,
                  left: '50%',
                  boxShadow: 'inset 0px 0px 4px #FFFFFF',
                }}
              >
                <Button
                  ghost
                  type="text"
                  size="small"
                  icon={<IconPadi />}
                  style={{
                    marginTop: -10,
                    marginLeft: -10,
                    zIndex: 30,
                  }}
                />
              </Card>
              <Card
                style={{
                  width: 77,
                  height: 77,
                  borderRadius: 100,
                  position: 'absolute',
                  background: 'rgba(0, 163, 244, 0.2)',
                  zIndex: 30,
                  boxShadow: 'inset 0px 0px 4px #FFFFFF',
                  bottom: '40%',
                }}
              >
                <Button
                  ghost
                  type="text"
                  size="large"
                  icon={<IconToko />}
                  style={{
                    marginTop: -10,
                    marginLeft: -10,
                    zIndex: 30,
                  }}
                />
              </Card>
              <Card
                style={{
                  width: 122,
                  height: 122,
                  borderRadius: 24,
                  position: 'absolute',
                  background: 'rgba(0, 163, 244, 0.2)',
                  zIndex: 30,
                  boxShadow: 'inset 0px 0px 4px #FFFFFF',
                  bottom: '10%',
                  left: '80%',
                }}
              >
                <Button
                  ghost
                  type="text"
                  size="large"
                  icon={<IconGo />}
                  style={{
                    zIndex: 30,
                    alignItems: 'center',
                    marginTop: 5,
                    marginLeft: -5,
                  }}
                />
              </Card>
              <Card
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#FFBB00',
                  position: 'absolute',
                  marginTop: 5,
                  marginLeft: 8,
                  width: 369,
                  height: 369,
                }}
              >
                <Card
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#009673',
                    marginLeft: 10,
                    marginTop: 10,
                    width: 301,
                    backdropFilter: 'blur(5px)',
                    height: 301,
                  }}
                >
                  <Image
                    preview={false}
                    src={FruitLogo}
                    width={484}
                    height={326}
                    style={{
                      margin: -90,
                      filter: 'drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.5))',
                    }}
                  />
                </Card>
              </Card>
            </Card>
          </Card>
        </Col>
        <Space
          align="start"
          style={{
            marginLeft: 100,

            marginTop: '-10%',
          }}
        >
          <Button
            type="ghost"
            size="large"
            style={{
              backgroundColor: '#00A3F4',
              borderRadius: 100,
              fontWeight: 500,
              boxSizing: 'border-box',
              fontSize: 18,
              width: 192,
              color: '#FFFFFF',
            }}
          >
            Buat janji temu!
          </Button>
          <Button
            type="ghost"
            size="large"
            style={{
              borderRadius: 100,
              fontWeight: 500,
              fontSize: 18,
              width: 192,
              color: '#00A3F4',
              boxSizing: 'border-box',
              border: '1px solid #00A3F4',
            }}
          >
            Bertemu tim kami
          </Button>
        </Space>
      </Row>
    </div>
  )
}

export default ContextPageOne
