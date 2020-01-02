import React from "react";
import { Table } from 'antd';
import "./rankinglist.css"
class RankingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getinformation1 = () => {
        var data = {
            "username": this.state.username,
           "musicname": this.state.musicname 
        }
        fetch("/list", {
            method: "post",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(respons => respons.json())
            .then(
                function (data) {
                    data.map()
                }
            )
    }
    getinformation2 = () => {
        var data = {
            "musicname": this.state.musicname
        }
        fetch("/list", {
            method: "post",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(respons => respons.json())
            .then(
                function (data) {
                    data.map()
                }
            )
    }
    getinformation3 = () => {
        var data = {
            "musicname": this.state.musicname
        }
        fetch("/list", {
            method: "post",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(respons => respons.json())
            .then(
                function (data) {
                    data.map()
                }
            )
    }
    render() {
        const name1 = [
            {
                title: '歌曲名',
                dataIndex: 'name',
            },
        ];
        const data1 = [
            {
                key: '1',
                name: '慢半拍',
            },
            {
                key: '2',
                name: '心如止水',
            },
            {
                key: '3',
                name: '透明',
            },
            {
                key: '4',
                name: '戒烟',
            },
            {
                key: '5',
                name: '心安理得',
            },
        ];
        //飙升榜end
        const name2 = [
            {
                title: '歌曲名',
                dataIndex: 'name',
            },
        ];
        const data2 = [
            {
                key: '1',
                name: '慢半拍',
            },
            {
                key: '2',
                name: '心如止水',
            },
            {
                key: '3',
                name: '星星',
            },
            {
                key: '4',
                name: '幻听',
            },
            {
                key: '5',
                name: '我要我们在一起',
            },
        ];
        //新歌榜end
        const name3 = [
            {
                title: '歌曲名',
                dataIndex: 'name',
            },
        ];
        const data3 = [
            {
                key: '1',
                name: '断了的弦',
            },
            {
                key: '2',
                name: '天分',
            },
            {
                key: '3',
                name: '病态',
            },
            {
                key: '4',
                name: '雪落下的声音',
            },
            {
                key: '5',
                name: '左肩',
            },
            //原创榜end
        ];
        return (
            <div>
                <div class="alllist">
                    <h4>飙升榜</h4>
                    <Table columns={name1} dataSource={data1} size="small" />
                </div>

                <div class="alllist">
                    <h4>新歌榜</h4>
                    <Table columns={name2} dataSource={data2} size="small" />
                </div>

                <div class="alllist">
                    <h4>原创榜</h4>
                    <Table columns={name2} dataSource={data3} size="small" />
                </div>
            </div>
        )
    }
}
export default RankingList;