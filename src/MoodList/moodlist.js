import React from 'react'

class MoodList extends React.Component{
    render(){
        console.log(this.props.mood)
        return(
            <div>
                <p>{this.props.mood.text}</p>
            </div>
        )
    }
}
export default MoodList;