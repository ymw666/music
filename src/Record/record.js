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
class RecordList extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    getinformation = () => {
        var data = {
            "musiccrecords": this.state.musiccrecords
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
        return (
            <div>
                <h3 style={{ marginBottom: 16 }}>听歌记录</h3>
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
export default RecordList;