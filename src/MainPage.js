import react,{Component} from 'react';

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
                你好!  {this.state.name}
            </div>
        )
    }
}

export default Main;