import React, { useMemo } from 'react';
import { createForm } from '@formily/core';
import 'antd/dist/antd.css';
import { message, Modal } from 'antd';
import { NewMixinParser, Form } from 'model-parser'; //需按包

const components = {};
const schema = {
  form: {
    labelCol: 6,
    wrapperCol: 12,
    selectEffects: [
      'wfku4nfegcf.y2flsqm782j.time',
      'wfku4nfegcf.7woqjms6la5.loanMark',
    ],
  },
  schema: {
    type: 'object',
    properties: {
      wfku4nfegcf: {
        type: 'void',
        'x-component': 'FormGrid',
        'x-validator': [],
        'x-component-props': {},
        'x-designable-id': 'wfku4nfegcf',
        'x-index': 0,
        properties: {
          y2flsqm782j: {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': {},
            'x-designable-id': 'y2flsqm782j',
            'x-index': 0,
            properties: {
              time: {
                type: 'string[]',
                title: '交易日期',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker.RangePicker',
                'x-validator': [],
                'x-component-props': {},
                'x-decorator-props': {
                  labelCol: 4,
                  wrapperCol: 16,
                  labelAlign: 'right',
                  addonBefore: '',
                },
                name: 'time',
                'x-designable-id': '7fast772ovo',
                'x-index': 0,
              },
            },
          },
          '7woqjms6la5': {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': {},
            'x-designable-id': '7woqjms6la5',
            'x-index': 1,
            properties: {
              loanMark: {
                title: '借贷标识',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-validator': [],
                'x-component-props': {
                  allowClear: true,
                  notFoundContent: '暂无数据',
                  placeholder: '请选择数据',
                },
                'x-decorator-props': { labelCol: 4, wrapperCol: 16 },
                name: 'loanMark',
                enum: [
                  { children: [], label: '借-出金', value: '1' },
                  { children: [], label: '贷-入金', value: '2' },
                ],
                'x-designable-id': 'clt3fp2ye34',
                'x-index': 0,
              },
            },
          },
        },
      },
      ba21ogalmqk: {
        type: 'void',
        'x-component': 'FormGrid',
        'x-validator': [],
        'x-component-props': {},
        'x-designable-id': 'ba21ogalmqk',
        'x-index': 1,
        properties: {
          e2uftqid1m1: {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-designable-id': 'e2uftqid1m1',
            'x-index': 0,
          },
          '7mti6cbm7h0': {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-validator': [],
            'x-component-props': {},
            'x-designable-id': '7mti6cbm7h0',
            'x-index': 1,
            properties: {
              ljl4bm0bcur: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  text: '查询',
                  type: 'primary',
                  onClick:
                    '{{() => {\n  $form.submit().then((values) => {\n    const {time,loadMark} = values;\n    const queryData = {};\n    if(time){\n      queryData.startTime = `${moment(time[0]).format("YYYY-MMM-DD hh:mm:ss")}`;\n      queryData.endTime = `${moment(time[1]).format("YYYY-MM-DD hh:mm:ss")}`;\n    }\n    console.log(queryData);\n  })\n}}}',
                },
                'x-designable-id': 'ljl4bm0bcur',
                'x-index': 0,
              },
              ru4q0h8ptaq: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  text: '重置',
                  onClick:
                    '{{() => {\n  $form.setValues({\n    time: undefined,\n    loanMark: undefined\n  });\n}}}',
                },
                'x-designable-id': 'ru4q0h8ptaq',
                'x-index': 1,
              },
            },
          },
          w4876r7oj9l: {
            type: 'void',
            'x-component': 'FormGrid.GridColumn',
            'x-designable-id': 'w4876r7oj9l',
            'x-index': 2,
            'x-validator': [],
            'x-component-props': {},
          },
        },
      },
    },
    designableType: 'form-root',
    'x-designable-id': 'uhr0gsrnv62',
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
