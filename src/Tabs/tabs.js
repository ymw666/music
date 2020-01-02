import { Tabs } from 'antd';
import React from "react";
import RegisterPage from '../RegisterPage/registerpage';
import LoginPage from '../LoginPage/login';
import { message,Button,Input,Icon } from "antd";
import FormItem from "antd/lib/form/FormItem";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class Thistabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
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
        result => { this.props.hasLoginined(false) },
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
  render() {
    return (

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
            <Button onClick={this.upload()}>登录</Button>
          </div>
        </TabPane>
        <TabPane tab="注册" key="2">
          <RegisterPage />
        </TabPane>
      </Tabs>
    )
  }
}
export default Thistabs;