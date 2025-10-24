import {Col, Row} from "antd";
import {ClockCircleOutlined, DeleteOutlined, MoreOutlined} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import styles from "./index.module.css"
import type {ListType} from "../../App.tsx";
import {useEffect, useState} from "react";

interface ListTableProps {
  list: ListType[]
  onListMore?: (data: ListType, idx: number) => void;
  onListDelete?: (data: ListType, idx: number) => void;
}

const ListTable = ({
                     list, onListMore,
                     onListDelete
                   }: ListTableProps) => {

  const [rowList, setRowList] = useState<ListType[]>([])
  useEffect(() => {
    const tempList = list.map(item => {
      item.click = false;
      item.mouseMove = false;
      return item;
    })

    setRowList(tempList)
  }, [list])

  const handleMouse = (index: number): void => {

    const tempList = rowList.map((item, i: number): ListType => {

      item.mouseMove = i === index
      return item;
    })

    setRowList(tempList)

  }

  const handleRowClick = (index: number): void => {
    const tempList = rowList.map((item, i: number): ListType => {
      item.click = i === index
      return item;
    })
    setRowList(tempList)
  }

  const handleClick = (data: ListType, index: number): void => {

    onListDelete?.(data, index)
  }

  const handleMore = (data: ListType, index: number): void => {
    onListMore?.(data, index)
  }

  return <ul style={{marginTop: 30}}>
    {
      rowList.map((item, index) => {
        return <li className={"container "} key={item.id}>
          <Row onClick={() => handleRowClick(index)} onMouseEnter={() => handleMouse(index)}
               className={`${styles.row} h-12 text-center w-11/12  leading-12 mx-auto`}
               style={{borderTop: "1px solid #ccc"}}>
            <Col span={5}><Link><span className={"text-base"}>{item.name}</span></Link></Col>
            <Col span={7}><span
              className={"text-sm"}>时间:<ClockCircleOutlined/>{item.startTime}-<ClockCircleOutlined/>{item.endTime}</span></Col>
            <Col span={5}><span className={"text-base"}>{item.location}</span></Col>
            <Col span={5}><span className={"text-base"}>{item.user}</span></Col>
            <Col span={1}>
              {item.mouseMove === true && item.click !== true &&
                  <MoreOutlined onClick={() => handleMore(item, index)}/>}
              {item.click === true && <DeleteOutlined onClick={() => handleClick(item, index)}/>}
            </Col>
          </Row>
        </li>
      })
    }

  </ul>
}

export default ListTable;
