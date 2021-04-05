
/**
 * 组件仓库
 */
import react, { Component } from 'react';
import { Carousel, Image, Form, Input, Button, Checkbox, Space } from 'antd';
import globaData from './globalData';

/**
* 走马灯组件
*/
class CarouseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentStyle: {},
        }
    }

    componentDidMount() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
            // backgroundImage: `url(${Background})`
        };
        this.setState({
            contentStyle: contentStyle,
        })
    }

    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 style={this.state.contentStyle}>星期一</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期二</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期三</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期四</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期五</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期六</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>星期天</h3>
                </div>
            </Carousel>
        )
    }

}

/**
 * 登录组件
 */
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',

        }
    }
    componentWillMount() {

    }
    //监测父组件props变化
    componentWillReceiveProps() {

    }


    onFinish = (values) => {
        console.log('Success:', values);
        let account = values.username;
        let password = values.password;

        this.setState({
            password: password,
        }, globaData.findUserPwdByAccounr(this.handleOnFinish, account))
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

    //判断是否登录成功
    handleOnFinish = (data) => {
        if (data == '') {
            alert("登录失败!");
        } else {
            let password = data.password;
            if (password == this.state.password) {
                alert("登录成功!")
                let history = this.props.history;
                history.push("/home")
            } else {
                alert("登录失败!")
            }
        }

    }

    render() {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8},
        };

        return (
            <Form
                {...layout}
                name="basic"
                // initialValues={{ remember: false }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input autocomplete="off" />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item {...tailLayout}>
                    <Space size="large" >
                        <Button type="primary" htmlType="submit">
                            注册
                    </Button>
                        <Button type="primary" htmlType="submit">
                            登录
                    </Button>
                    </Space>

                </Form.Item>
            </Form>
        )
    }
}

export { CarouseComponent, LoginComponent };