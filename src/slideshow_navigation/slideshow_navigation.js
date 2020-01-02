import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
            >
                <Menu.Item key="1">
                    <Icon type="" />
                    <span>热歌推荐</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <Icon type="" />
                    <span>发表心情</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <Icon type="" />
                    <span>热评推荐</span>
                </Menu.Item>
            </Menu>
        );
    }
}
export default Sider;