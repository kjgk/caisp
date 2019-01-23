import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Modal, Table } from 'antd'
import { DropOption, Formatter } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

const List = ({ onDeleteItem, onEditItem, onAssignMenu, location, ...tableProps }) => {
  location.query = queryString.parse(location.search)

  const handleEdit = (record) => {
    onEditItem(record)
  }

  const handleDelete = (record) => {
    Modal.confirm({
      title: '确定要删除该数据吗?',
      okType: 'danger',
      onOk () {
        onDeleteItem(record.objectId)
      },
    })
  }

  const handleMenu = (record) => {
    onAssignMenu(record)
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '标识',
      dataIndex: 'tag',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '创建时间',
      dataIndex: 'createdDate',
      width: 180,
      render: (value) => <Formatter.Date value={value}/>,
    },
    {
      title: '操作',
      width: 200,
      render: (text, record) => {
        return <div>
          <a onClick={() => {
            handleMenu(record)
          }}>分配菜单</a>
          <Divider type="vertical"/>
          <a onClick={() => {
            handleEdit(record)
          }}>编辑</a>
          <Divider type="vertical"/>
          <a onClick={() => {
            handleDelete(record)
          }}>删除</a>
        </div>
      },
    },
  ]

  return (
    <Table
      {...tableProps}
      bordered
      scroll={{ x: 800 }}
      columns={columns}
      rowKey='objectId'
    />
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
