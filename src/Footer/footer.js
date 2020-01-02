import React from 'react';
import { Row, Col, Menu, Icon, Layout } from 'antd';
import './footer.css';

export default class footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col span="2"></Col>
                    <Col span="20">
                        <div className="overall_situation">
                            <span>关于我们</span>>
                            <br/>
                            <br/>
                            <br/>
                            <a>了解我们</a>
                            <br/>
                            <br/>
                            <a>联系我们</a>
                            <br/>
                            <br/>
                            <a>加入我们</a>
                        </div>
                        <div className="overall_situation">
                            <span>网站特色</span>
                            <br/>
                            <br/>
                            <br/>
                            <span>超级自由行</span>
                            <br/>
                            <br/>
                            <span>服务保障</span>
                            <br/>
                            <br/>
                            <span>攻略定制</span>
                        </div>
                        <div className="overall_situation">
                            <span>网站合作</span>
                            <br/>
                            <br/>
                            <br/>
                            <span>知乎</span>
                            <br/>
                            <br/>
                            <span>京东</span>
                            <br/>
                            <br/>
                            <span>世界邦</span>
                        </div>
                        <div className="overall_situation">
                            <span>网站条款</span>
                            <br/>
                            <br/>
                            <br/>
                            <span>用户协议</span>
                            <br/>
                            <br/>
                            <span>隐私协议</span>
                            <br/>
                            <br/>
                            <span>版权声明</span>
                        </div>
                        <div className="overall_situation">
                            <span>官方微信</span>
                            <br/>
                            <br/>
                            <div className="weichat">
                                <img src="./weixin.jpg"></img>
                            </div>
                        </div>
                        <div className="overall_situation">
                            <span>联系客服</span>
                            <br/>
                            <br/>
                            <div className="srevice">
                                <a>15281125436</a>
                                <br/>
                                <a>13086647621</a>
                                <br/>
                                <a>18281693639</a>
                            </div>
                        </div>
                    </Col>
                    <Col span="2"></Col>
                </Row>
            </div>
        )
    }
}