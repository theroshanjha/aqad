import React from 'react'
import { ProgressDialog as Progress} from 'react-native-simple-dialogs';

export default class ProgressDialog extends React.PureComponent{
    render(){
        return(
            <Progress visible = {this.props.visible}
                 dialogStyle = {{backgroundColor:"#FFF" , alignSelf:'center',height:'10%',width:'65%',
                 alignItems:'center',justifyContent:'center'}}
                 overlayStyle = {{backgroundColor:"transparent"}}
                 messageStyle = {{color:"#000",fontSize:14}}
                 title = ""
                 message="Please wait"
                 activityIndicatorColor = {"#000"}
                 activityIndicatorSize = 'large'
            />
        )
    }
}