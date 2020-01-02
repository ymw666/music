import React from 'react';
import { Drawer, Button, Modal, Form, Checkbox, Input, message, Menu, Icon, Tabs, Link } from 'antd';
import "./userpage.css"
import LoginModle from '../Login_Modle/loginmodle';

const FormItem = Form.Item;

class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            action: 'login',
            hasLoginde: false,
            userName: '',
            userId: 0,
        }
    }
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const userShow = this.state.hasLoginde
            ?
            <div>
                <Button type="primary" htmlType="button">{this.state.userName}</Button>
                <Button type="dashed" htmlType="button">个人中心</Button>
                <Button type="dashed" htmlType="button">退出</Button>
            </div>
            :
                <LoginModle/>
        return (
            <div class="button_stely">
                <a type="primary" onClick={this.showDrawer}>个人主页</a>
                <Drawer
                    width={450}
                    title="MUSIC&MOOD"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div>
                        {userShow}
                    </div>
                </Drawer>
            </div>
        )
    }
}
export default UserPage;