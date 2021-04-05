import react, { Component } from 'react';
import { Button, ConfigProvider, Row, Col, Layout } from 'antd';
import { CarouseComponent, LoginComponent } from './StoreManager/componentManager'
import background from './Resource/background.png'
import Title from 'antd/lib/skeleton/Title';
const { Header, Footer, Sider, Content } = Layout;
const mainHeight = window.innerHeight;

const LoginStyle = {

    marginLeft: '70%',
    marginTop: '10%'
}
const ContentStyle = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + background + ')',
}

const TitleStyle = {
    color: '#FFFFFF'
}
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "请登录,杨菊!"
        }
    }

    componentDidMount(){
        let t = this.props.history;
    }
    render() {
        return (
            <div className='Main-component' >

                <Layout>
                    <Header>
                        <h1 style={TitleStyle} align='center'>智能一体化学习平台</h1>
                    </Header>
                    <Layout >
                        <Content>
                            <CarouseComponent />
                            <Col span={6} style={LoginStyle}>
                                <LoginComponent history= {this.props.history} />
                            </Col>
                        </Content>
                        {/* <Sider>Sider</Sider> */}
                    </Layout>
                    <Footer style={{ background: 'white' }}>
                        <h5 align='center'>@技术支持:  谢金宝  宋奥迪  宋家林</h5>
                    </Footer>
                </Layout>

            </div >
        )
    }
}

export default MainComponent;