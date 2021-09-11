import { Layout, Menu, Breadcrumb } from 'antd';
import {withRouter} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function Frame(props){

    return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#15473E'}}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: '#15473E'}}>
        <Menu.Item key="1" style={{backgroundColor : '#729378'}}>Publish activites</Menu.Item>
        <Menu.Item key="2" style={{backgroundColor : '#37644F'}}>Around you</Menu.Item>
        <Menu.Item key="3" style={{backgroundColor : '#8E9665'}}>Friend list</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380}}>
        Content
      </div>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
}


export default withRouter(Frame)