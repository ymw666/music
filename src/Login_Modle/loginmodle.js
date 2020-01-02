import { Modal, Button, Tabs } from 'antd';
import React from "react";
import Register from '../RegisterPage/registerpage';
import "./LoginModle.css"
import Thistabs from "../Tabs/tabs"
import RecordList from '../Record/record';
import Like from '../LikeList/like';





import RegisterPage from '../RegisterPage/registerpage';
import LoginPage from '../LoginPage/login';
import { message, Input, Icon } from "antd";
import FormItem from "antd/lib/form/FormItem";
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}



class LoginModle extends React.Component {



    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    upload = () => {
        var data = {
            "username": this.state.username,
            "password": this.state.password,
        }
        fetch("/user/login", {
            method: "post",
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(data)
        }).then(respons => respons.json())
            .then(
                result => { this.setState.hasLoginined(false)},
                {/*result => {
                if ("")
                    message.info("用户名或密码错误！")
                else if ("") {
                    message.info("用户名或密码错误")
                }else {
                   this.props.hasLoginined(false)
                }
            }*/})
    }




    constructor() {
        super();
        this.state = {
            username: '',
            hasLoginined: false,
        }
    }
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    Quit = () => {
        this.setState({
            hasLoginined: true,
        })
    }
    Login = () => {
        this.setState({
            hasLoginined:false
        })
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const userShow = this.state.hasLoginined
            ?
            <div class="LoginModle_div1" key="logout">
                <Button type="primary" onClick={this.showModal}>
                    登录/注册
                    </Button>
                <Modal
                    title="登录/注册"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="登录" key="1">
                            <div>
                                <FormItem>
                                    <Input
                                        name="username"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={e => this.changeValue(e)}
                                    />
                                </FormItem>
                                <FormItem>
                                    <Input
                                        name="password"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={e => this.changeValue(e)}
                                    />
                                </FormItem>
                                <Button onClick={this.Login}>登录</Button>
                            </div>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <RegisterPage />
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>

            :
            <div>
                <div>
                    <p>{this.state.username}</p>
                    <Button onClick={this.Quit}>退出</Button>
                </div>
                <div className="div2">
                    <RecordList />
                </div>
                <div className="div3">
                    <Like />
                </div>
            </div>
        return (
            <div>
                {userShow}
            </div>
        );
    }
}
export default LoginModle;
