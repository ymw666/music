import { Row, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
class HomePage extends React.Component {
    render() {
        return (
            <Row>
                <Col span={1}></Col>
                <Col span={6}>
                    <div class="all">
                        <Link to="/playpage">
                            <a class="picture">
                                <img src="homepagep4.jpg"></img>
                            </a>
                        </Link>
                    </div>
                    <div class="hide">
                        <p>听音乐</p>
                    </div>
                </Col>
                <Col span={6}>
                    <div class="all">
                        <Link to="/loginpage">
                            <a class="picture">
                                <img src="honepagep1.jpg"></img>
                            </a>
                        </Link>
                    </div>
                    <div class="hide">
                        <p>写评论</p>
                    </div>
                </Col>
                <Col span={6}>
                    <div class="all">
                        <Link to="/moodpage">
                            <a class="picture">
                                <img src="homepagep5.jpg"></img>
                            </a>
                        </Link>
                    </div>
                    <div class="hide">
                        <p>发动态</p>
                    </div>
                </Col>
                <Col span={5}></Col>
            </Row>
        )
    }
}
export default HomePage;
