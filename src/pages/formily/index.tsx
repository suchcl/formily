import React, { useMemo } from 'react';
import { createForm } from '@formily/core';
import 'antd/dist/antd.css';
import { message, Modal } from 'antd';
import { NewMixinParser, Form } from 'model-parser'; //需按包
import './index.less';

const components = {};
const schema = {
  form: { labelCol: 6, wrapperCol: 12 },
  schema: {
    type: 'object',
    properties: {
      n672o6hxoxp: {
        type: 'void',
        'x-component': 'FormGrid',
        'x-validator': [],
        'x-component-props': {},
        'x-designable-id': 'n672o6hxoxp',
        properties: {
          kznkt91o3ap: {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': {},
            'x-designable-id': 'kznkt91o3ap',
            properties: {
              '4bpk2z04f9i': {
                type: 'void',
                'x-component': 'Card',
                'x-component-props': {
                  title: 'Title',
                  style: { borderStyle: 'none' },
                  bordered: false,
                },
                'x-reactions': {
                  dependencies: [{ property: 'value', type: 'any' }],
                  fulfill: {
                    state: { componentProps: '{{{\n  title: ""\n}}}' },
                  },
                },
                'x-designable-id': '4bpk2z04f9i',
                properties: {
                  '3eq0e64es18': {
                    type: 'void',
                    'x-component': 'FormGrid',
                    'x-validator': [],
                    'x-component-props': {},
                    'x-designable-id': '3eq0e64es18',
                    properties: {
                      mutvsxlb6s9: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                        'x-designable-id': 'mutvsxlb6s9',
                        'x-index': 0,
                      },
                      kgg1t7h5m0p: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                        'x-designable-id': 'kgg1t7h5m0p',
                        'x-index': 1,
                      },
                      taaqejnu3dr: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                        'x-validator': [],
                        'x-component-props': {},
                        'x-designable-id': 'taaqejnu3dr',
                        properties: {
                          company: {
                            title: '',
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-validator': [],
                            'x-component-props': {},
                            'x-decorator-props': {
                              wrapperAlign: 'right',
                              labelAlign: 'left',
                              feedbackLayout: 'loose',
                              fullness: true,
                              style: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                              },
                            },
                            enum: [
                              { children: [], label: '北京公司', value: '1' },
                              { children: [], label: '南京公司', value: '2' },
                            ],
                            name: 'company',
                            'x-designable-id': 'kk6qdl9b79f',
                            'x-index': 0,
                          },
                        },
                        'x-index': 2,
                      },
                    },
                    'x-index': 0,
                  },
                },
                'x-index': 0,
              },
            },
            'x-index': 0,
          },
        },
        'x-index': 0,
      },
      geci9nx45tg: {
        type: 'void',
        'x-component': 'FormGrid',
        'x-validator': [],
        'x-component-props': { columnGap: 0 },
        'x-designable-id': 'geci9nx45tg',
        'x-index': 1,
        properties: {
          '8x13pmrg6qn': {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': { gridSpan: 1 },
            'x-reactions': {
              dependencies: [{ property: 'value', type: 'any' }],
              fulfill: {
                state: { componentProps: "{{{\n  className:'col1'\n}}}" },
              },
            },
            'x-designable-id': '8x13pmrg6qn',
            'x-index': 0,
            properties: {
              xpybfgyzn9g: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': { text: '第一列', type: 'primary' },
                'x-designable-id': 'xpybfgyzn9g',
                'x-index': 0,
              },
            },
          },
          somo3aq3k6a: {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': { style: { width: '330px' } },
            'x-reactions': {
              dependencies: [{ property: 'value', type: 'any' }],
              fulfill: {
                state: { componentProps: "{{{\n  className: 'col2'\n}}}" },
              },
            },
            'x-designable-id': 'somo3aq3k6a',
            'x-index': 1,
            properties: {
              bv5nuk1d3jx: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': { text: '右侧列', type: 'primary' },
                'x-designable-id': 'bv5nuk1d3jx',
                'x-index': 0,
              },
            },
          },
        },
      },
    },
    designableType: 'form-root',
    'x-designable-id': 'q0qp4c9us7z',
  },
};

export default () => {
  const form = useMemo(() => createForm(), []);

  return (
    <Form form={form} {...schema.form}>
      <NewMixinParser
        treeSchema={schema}
        components={components}
        scope={{ message, Modal }}
      ></NewMixinParser>
    </Form>
  );
};
