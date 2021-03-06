import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, Input, Row } from 'antd'
import RoleSelect from '../../../sections/role/RoleSelect'

const { Search } = Input

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

const Filter = ({
                  onAdd,
                  onFilterChange,
                  filter,
                  form: {
                    getFieldDecorator,
                    getFieldsValue,
                    setFieldsValue,
                  },
                }) => {

  const handleSubmit = () => {
    let fields = getFieldsValue()
    onFilterChange(fields)
  }

  const handleReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    handleSubmit()
  }

  const { keyword, role } = filter

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('role', { initialValue: role })(<RoleSelect allowClear
                                                                       placeholder="请选择角色"
                                                                       onChange={() => setTimeout(handleSubmit)}/>)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('keyword', { initialValue: keyword })(<Search placeholder="请输入关键字"
                                                                         onSearch={handleSubmit}/>)}
      </Col>
      <Col {...TwoColProps} xl={{ span: 16 }} md={{ span: 24 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          <div>
            <Button type="primary" className="margin-right" onClick={handleSubmit}>查询</Button>
            <Button onClick={handleReset}>重置</Button>
          </div>
          <div className="flex-vertical-center">
            <Button icon="plus" onClick={onAdd}>新建</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
