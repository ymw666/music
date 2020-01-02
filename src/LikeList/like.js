import React from "react";
import {List,Typography } from 'antd';
const data= [
    '慢半拍',
    '我要我们在一起',
    '天分',
    '幻听',
    '尘',
    '透明',
]
class Like extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    getinformation = () => {
        var data = {
            "musicname": this.state.musicname
        }
        fetch("user/dynamics", {
            method: "post",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(respons => respons.json())
            .then(
                function(data){
                   data.map()
                }
            )
    }
    render() {
        let information = this.getinformation()
        return (
            <div>
                <h3 style={{ marginBottom: 16 }}>收藏音乐</h3>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item =>(
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default Like;