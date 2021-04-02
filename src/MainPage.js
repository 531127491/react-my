import react,{Component} from 'react';
import {Button,ConfigProvider} from 'antd';
import CarouseComponent from './ComponentManager/CarouselCompenent'
class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:"请登录,杨菊!"
        }
    }

    render(){
        return(
           
            <div>
                <CarouseComponent />
            </div>
            
        )
    }
}

export default Main;