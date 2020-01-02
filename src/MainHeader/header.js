import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom"
import "./header.css"
import UserPage from "../UserPage/uaerpage";
import Mood from "../Mood/mood";
class Header extends React.Component{
    render(){
        return(
            <div class="header_main">
                <Row>
                    <Col span={3}></Col>                    
                    <Col span={18}>
                        <div class="logo_box">
                            <img src="./logo.png"></img>
                        </div>
                        <div class="title_box">
                            <Link to="/playpage"><p>MUSIC&MOOD</p></Link>
                        </div>
                        <div class="lable_box">
                            <Link><p>功能选择</p></Link>
                        </div>
                        <div class="lable_box">
                            <Link><p>发现音乐</p></Link>
                        </div>
                        <div class="lable_box">
                            <Link to="/moodpage"><p>发表动态</p></Link>
                        </div>
                        <div class="lable_box">
                            <Link><p><UserPage/></p></Link>
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        )
    }
}
export default Header;