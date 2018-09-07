import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as act from '../redux/actions/homeAction';
class Form extends Component{
    constructor(props){
        super(props);
        console.log('form init')
        this.state=({mName:this.props.mapName})
    }
    changeName1(e){
        console.log(e.target.value)
        this.setState({mName:e.target.value})
    }
    changeName2(){
        this.props.changeName(this.state.mName)
    }
    render(){
        return(
            <div>
                <input type='text' onChange={(e)=>this.props.changeName(e.target.value)} value={this.props.mapName} />
                <input type='text' onChange={(e)=>this.changeName1(e)} />
                <p>本地值：{this.state.mName}</p>
                <button onClick={()=>this.changeName2()}>changeName</button>
            </div>
        )
    }
}
const mapState = (state)=>{
    return{
        mapName:state.homeData.homeName
    }
}
const mapDispatch = (dispatch)=>{
    return{
        changeName:(v)=>dispatch(act.CHANGENAME(v))
    }
}
export default connect(mapState,mapDispatch)(Form);