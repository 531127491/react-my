/**
 * 走马灯组件
 */
import react, { Component } from 'react';
import { Carousel, Image } from 'antd';
import map from '../Resource/map.jpg'

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
                    <h3 style={this.state.contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>4</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>5</h3>
                </div>
                <div>
                    <h3 style={this.state.contentStyle}>6</h3>
                </div>
            </Carousel>
        )
    }

}

export default CarouseComponent;