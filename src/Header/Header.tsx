import NameLogo from './Union.svg'

import { Image, Row, Typography } from 'antd'

import 'antd/dist/antd.css'

export default function HeaderComponent() {
  return (
    <>
      <div
        style={{
          marginTop: -30,
          padding: 20,
        }}
      >
        <Row justify="space-between">
          <Image src={NameLogo} />
          <Row style={{ width: 300, fontSize: '18px' }} justify="space-between">
            <Typography.Text strong>Beranda</Typography.Text>
            <Typography.Text strong>Restoran</Typography.Text>
            <Typography.Text strong>Supplier</Typography.Text>
          </Row>
        </Row>
      </div>
    </>
  )
}
