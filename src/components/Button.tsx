import React from 'react'

import { Row, Typography, Image, Col, Space, Button, Card } from 'antd'

function ButtonComponent(props: any) {
  return (
    <div>
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
        {props.children}
      </Button>
    </div>
  )
}

export default ButtonComponent
