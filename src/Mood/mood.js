import React from "react"
import { withRouter, Link } from 'react-router-dom'
import { Modal, Button, Tabs,Input, Icon } from 'antd'
import MoodPage from "../MoodPage/moodpage"
import RegisterPage from '../RegisterPage/registerpage';
import FormItem from "antd/lib/form/FormItem";
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class Mood extends React.Component {
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    showNewWindow = () =>{
        
    }
    Quit = () => {
        this.setState({
            hasLoginined: true,
        })
    }
    Login = () => {
        this.setState({
            hasLoginined: false
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
        this.state = {
            username: '',
            hasLogined: false,
        }
        const moodShow = this.state.hasLogined
            ?
            <div class="LoginModle_div1" key="logout">
                <p onClick={this.showModal}>发表动态</p>
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
               <p>发表动态</p>
            </div>
        return (
            <div>
                {moodShow}
            </div>
        )
    }
}
export default withRouter (Mood);