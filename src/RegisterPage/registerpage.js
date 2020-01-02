import React from "react";
import { Button, message,Input,Icon } from "antd";
import FormItem from "antd/lib/form/FormItem";


class RegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  upload = () => {
    var data = {
      "username": this.state.username,
      "password": this.state.password
    }
    fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(data)
    }).then(respons => respons.json())
      .then(result => {
        if (result.state==-1)
          message.info("用户名已存在")
        else if (result.state==-2) {
          message.info("注册成功")
        }
      })
  }
  render() {
    return (
      <div>
        <FormItem>
        <Input
              name="username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={this.state.username}
              onChange={e=>this.changeValue(e)}
            />
        </FormItem>
        <FormItem>
        <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e=>this.changeValue(e)}
            />
        </FormItem>
        <Button onClick={this.upload()}>注册</Button>
      </div>
    )
  }
}
export default RegisterPage;