import React from 'react'
import { Indicator } from './indicator'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'
import ConfigProvider from '@/packages/configprovider'

interface T {
  ce5c5446: string
  c38a08ef: string
  c123sda1: string
  c38a08e4: string
}
const IndicatorDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义节点',
      c38a08e4: '自定义',
      c123sda1: '竖向展示',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定义节点',
      c38a08e4: '自定义',
      c123sda1: '豎向展示',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Custom Node',
      c38a08e4: 'Custom',
      c123sda1: 'Vertical display',
    },
  })

  const customTheme = {
    nutuiIndicatorColor: '#3768fa',
    nutuiIndicatorDotColor: '#ddd',
    nutuiIndicatorDotSize: '6px',
    nutuiIndicatorDotActiveSize: '24px',
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell>
          <Indicator total={3} current={0} />
        </Cell>
        <Cell>
          <Indicator total={3} current={1} />
        </Cell>
        <Cell>
          <Indicator total={3} current={2} />
        </Cell>

        <h2>{translated.c38a08ef}</h2>
        <Cell>
          <Indicator total={6} current={5}>
            <div
              style={{
                display: 'inline-block',
                width: '14px',
                height: '14px',
                lineHeight: '14px',
                textAlign: 'center',
                fontSize: 'var(--nutui-font-size-1)',
                color: 'var(--nutui-gray-1)',
                border: '1px solid var(--nutui-gray-1)',
                borderRadius: '50%',
                margin: 'var(--nutui-indicator-dot-margin)',
                background: `linear-gradient(135deg, 
                  var(--nutui-color-primary-stop-1) 0%,
                  var(--nutui-color-primary-stop-2) 100%)`,
              }}
            >
              <div
                style={{
                  height: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {5}
              </div>
            </div>
          </Indicator>
        </Cell>

        <h2>{translated.c38a08e4}</h2>
        <Cell>
          <ConfigProvider theme={customTheme}>
            <Indicator total={6} current={5} />
          </ConfigProvider>
        </Cell>

        <h2>{translated.c123sda1}</h2>
        <Cell>
          <div
            style={{
              height: '100px',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Indicator total={6} current={5} direction="vertical">
              <div
                style={{
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  fontSize: 'var(--nutui-font-size-1)',
                  color: 'var(--nutui-gray-1)',
                  border: '1px solid var(--nutui-gray-1)',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, 
                  var(--nutui-color-primary-stop-1) 0%,
                  var(--nutui-color-primary-stop-2) 100%)`,
                }}
              >
                <div
                  style={{
                    width: '13px',
                    height: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {5}
                </div>
              </div>
            </Indicator>
          </div>
          <div
            style={{
              height: '100px',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Indicator total={6} current={2} direction="vertical" />
          </div>
        </Cell>
      </div>
    </>
  )
}

export default IndicatorDemo
