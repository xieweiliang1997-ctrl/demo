import React, {useState} from 'react';
import {Avatar, Button, Col, Divider, Row, Space, Tooltip} from "antd";
import styles from "./index.module.css"
import {DoubleRightOutlined, DownOutlined, MoreOutlined, RightOutlined} from "@ant-design/icons";
import ListTable from "../ListTable";
import type {ListType} from "../../App.tsx";

type AvatarList =Array<{ id: string; name?: string }>

// 定义直播卡片数据类型
interface LiveCardProps {
  studio: string; // 工作室
  game: string; // 游戏名称
  title: string; // 直播标题
  subTitle: string;
  creators: AvatarList; // 创建者列表
  collaborators: AvatarList; // 协作者列表
  startTime?: string; // 开始时间
  endTime?: string; // 结束时间
  time?: string;
  location: string; // 地点
  onEnterLive?: () => void; // 进入直播回调
  onContinueLive?: () => void; // 继续直播
  onMore?: () => void; // 更多按钮
  onStartLive?: () => void;//开始直播
  onListMore?: (data:ListType,idx:number) => void;//列表更多
  onListDelete?: (data:ListType,idx:number) => void;// 列表删除
  liveMode: 'start' | 'enter' | 'continue' | 'list'// 模式
  list?:ListType[]// 列表
}

const renderAvatars = (users: Array<{ id: string; name?: string }>) => {
  return (
    <Avatar.Group
      size="small"
      max={{
        count: 2,
        style: {color: '#f56a00', backgroundColor: '#fde3cf'},
      }}
    >
      {
        users.map((item, index) => {
          if (index > 2 - 1) {
            return <Tooltip key={item.id} title="Ant User" placement="top">
              <Avatar>{item.name ? item.name : item.id}</Avatar>
            </Tooltip>
          } else {
            return <Avatar key={item.id}>{item.name}</Avatar>
          }

        })
      }


    </Avatar.Group>

  )

};

const LiveCard: React.FC<LiveCardProps> = ({
                                             studio,
                                             game,
                                             subTitle,
                                             title,
                                             creators,
                                             collaborators,
                                             startTime,
                                             endTime,
                                             location,
                                             onEnterLive,
                                             onMore,
                                             onContinueLive,
                                             onStartLive,
                                             liveMode,
                                             time,
                                             list,
                                             onListMore,
                                             onListDelete
                                           }: LiveCardProps) => {

  const [flag,setFlag] = useState<boolean>(false);

  const handleMore = () => {
    onMore?.()
  }


  const handleEnterLive = () => {
    onEnterLive?.()
  }

  const handleContinueLive = () => {
    onContinueLive?.()
  }
  const handleStartLive = () => {
    onStartLive?.()
  }

  const handleHide = ()=>{
    setFlag(true)
  }

  const handleShow = ()=>{
    setFlag(false)
  }

  return (
    <div
      className={`
      ${liveMode === 'start' && styles.start} 
       ${liveMode === 'list' && styles.list} 
        ${liveMode === 'continue' && styles.continue} 
         ${liveMode === "enter" && styles.enter} 
      py-4 pl-8 pr-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md`}>
      <Row>
        {liveMode === "list" && <Col span={1} style={{display: 'flex', alignItems: 'center'}}>
            <Button shape="round" size={"small"} style={{textAlign:"center"}}>
              {flag?<DownOutlined onClick={()=>handleShow()}/>:<RightOutlined onClick={()=>handleHide()}/>}
            </Button>
        </Col>}
        <Col span={6} className={styles.boxRight}>
          <div className={"flex"}>
            <div className={"p-1 text-xs rounded"}
                 style={{background: '#CFD3E7', color: '#2B4096', marginRight: '5px'}}>{studio}
            </div>
            <div className={"p-1 text-xs rounded-full"} style={{background: '#F4D7C3', color: '#A85212'}}>{game}</div>
          </div>
          <div className={"flex items-center my-5"}>
            <span className={"text-lg font-bold"}>{title}</span> &nbsp;
            <DoubleRightOutlined/>
            &nbsp;
            <span className={"text-lg font-semibold"} style={{color: '#2B4096'}}>{subTitle}</span>
          </div>
          <Row>
            <Col span={12} style={{display: 'flex', alignItems: 'center'}}>
              <span style={{color: '#919191'}}>创建者</span>
              {renderAvatars(creators)}
            </Col>
            <Col span={12} style={{display: 'flex', alignItems: 'center'}}>
              <span style={{color: '#919191'}}>协作者</span>
              {renderAvatars(collaborators)}
            </Col>
          </Row>
        </Col>
        <Col span={liveMode === "list" ? 8 : 6} className={styles.boxRight}
             style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center"}}>
          {
            liveMode === "list" ? <span className={'text-lg'}>{time}</span> : (
              <>
                <span className={'text-lg'}>{startTime}</span>
                <Divider type="vertical" className="h-20"/>
                <span className={'text-lg'}>{endTime}</span>
              </>
            )
          }

        </Col>

        <Col span={liveMode === "list" ? 8 : 6} className={styles.boxRight}
             style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>
          <span className={'text-lg'}>{location}</span>
        </Col>
        <Col span={liveMode === "list" ? 1 : 6}
             style={{display: 'flex', alignItems: 'center', justifyContent: liveMode === "list" ? "center" : "end"}}>
          <Space>
            {
              liveMode === "enter" && <Button onClick={() => handleEnterLive()}
                                              style={{background: '#2B4096', borderColor: '#2B4096', color: '#fff'}}>
                    进入直播
                </Button>
            }
            {
              liveMode === "continue" &&
                <Button onClick={() => handleContinueLive()} style={{borderColor: '#2B4096', color: '#2B4096'}}
                        variant="outlined">
                    继续直播
                </Button>
            }
            {liveMode === "start" &&
                <Button onClick={() => handleStartLive()} style={{borderColor: '#2B4096', color: '#2B4096'}}
                        variant="outlined">开始直播</Button>}
            <Button onClick={() => handleMore()} shape="circle" style={{background: '#E6E8F0', color: '#2B4096'}}
                    icon={<MoreOutlined/>}/>
          </Space>
        </Col>
      </Row>
      { (liveMode === "list" && flag) && <ListTable onListMore={onListMore}
                                                    onListDelete={onListDelete} list={list?list:[]}/>}
    </div>
  );
};

// 默认导出时提供默认属性
export default LiveCard;