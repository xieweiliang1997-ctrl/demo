import {Col, Input, Row} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import LiveCard from "./components/LiveCard/LiveCard.tsx";

export interface ListType {
  id:string,
  startTime:string,
  endTime:string,
  name:string,
  location:string,
  user:string,
  mouseMove?:boolean,
  click?:boolean,
}

function App() {
  // 列表更多
  const onListMore = (data:ListType,index:number)=>{
    console.log(data,index)
  }
  // 列表删除
  const onListDelete = (data:ListType,index:number)=>{
    console.log(data,index)
  }

  return (
    <div className={"container mx-auto mt-10 "}>
      <Row justify={"space-between"}>
        <Col>
          <p className={"text-lg text-bold"}>我的座谈会(999)</p>
        </Col>
        <Col>
          <Input size="large" placeholder="请输入关键字" className={"rounded-none"} prefix={<SearchOutlined/>}/>
        </Col>
      </Row>
      <div>
        <div className={'text-lg mt-0 mb-4'}>进行中</div>
        <LiveCard
          studio="天美"
          game="王者荣耀"
          title="NGR流失访谈"
          subTitle='Product'
          creators={[{id: '1'}, {id: '2'}, {id: '3'}]}
          collaborators={[{id: '4'}, {id: '5'}, {id: '6'}]}
          startTime="2024-10-11 18:00:00"
          endTime="2024-10-11 19:00:00"
          location="端手游体验室(深圳-D1-0445)"
          onEnterLive={() => console.log('进入直播')}
          onMore={() => console.log('更多操作')}
          liveMode={"enter"}
        />
        <div className={'text-lg mt-7 mb-4'} >暂停中</div>
        <LiveCard
          studio="天美"
          game="王者荣耀"
          title="NGR流失访谈"
          subTitle='Product'
          creators={[{id: '1'}, {id: '2'}, {id: '3'}]}
          collaborators={[{id: '4'}, {id: '5'}, {id: '6'}]}
          startTime="2024-10-11 18:00:00"
          endTime="2024-10-11 19:00:00"
          location="端手游体验室(深圳-D1-0445)"
          onEnterLive={() => console.log('进入直播')}
          onMore={() => console.log('更多操作')}
          liveMode={"continue"}
        />
        <div className={'text-lg mt-7 mb-4'}>未开始</div>
        <LiveCard
          studio="天美"
          game="王者荣耀"
          title="NGR流失访谈"
          subTitle='Product'
          creators={[{id: '1'}, {id: '2'}, {id: '3'}]}
          collaborators={[{id: '4'}, {id: '5'}, {id: '6'}]}
          startTime="2024-10-11 18:00:00"
          endTime="2024-10-11 19:00:00"
          location="端手游体验室(深圳-D1-0445)"
          onEnterLive={() => console.log('进入直播')}
          onMore={() => console.log('更多操作')}
          liveMode={"start"}
        />
        <div className={'text-lg mt-7 mb-4'}>历史记录</div>
        <LiveCard
          studio="天美"
          game="王者荣耀"
          title="NGR流失访谈"
          subTitle='Product'
          creators={[{id: '1'}, {id: '2'}, {id: '3'}]}
          collaborators={[{id: '4'}, {id: '5'}, {id: '6'}]}
          startTime="2024-10-11 18:00:00"
          time={'2024-08-19 to 2024-08-17'}
          endTime="2024-10-11 19:00:00"
          location="端手游体验室(深圳-D1-0445)"
          onEnterLive={() => console.log('进入直播')}
          onMore={() => console.log('更多操作')}
          liveMode={"list"}
          onListMore={onListMore}
          onListDelete={onListDelete}
          list={[
            {id:'NGR流失访谈(1)',startTime:'2024-08-10 19:15:30',endTime:'2024-08-19 20:15:30',name:'1',location:'端手游体验室(深圳-D1-0445)',user:'luceyyang(杨琪丹)'},
            {id:'NGR流失访谈(2)',startTime:'2024-08-10 19:15:30',endTime:'2024-08-19 20:15:30',name:'2',location:'端手游体验室(深圳-D1-0445)',user:'luceyyang(杨琪丹)'},
            {id:'NGR流失访谈(3)',startTime:'2024-08-10 19:15:30',endTime:'2024-08-19 20:15:30',name:'3',location:'端手游体验室(深圳-D1-0445)',user:'luceyyang(杨琪丹)'}
          ]}
        />
      </div>
    </div>
  )
}

export default App
