import React from 'react';
import { Row, Col, Carousel, List } from 'antd';
import "./PlayPage.css";
import PicDetailsDemo from "../video_recordings/video_recordings"
import Footer from "../Footer/footer"
import Header from '../MainHeader/header';
import RankingList from '../RankingList/rankinglist';

class PlayPage extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                <Header/>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div className="slideshow">
                                <Carousel autoplay>
                                    <div>
                                        <img src="zoumadengp1.jpg"></img>
                                    </div>
                                    <div>
                                        <img src="zoumadengp2.jpg"></img>
                                    </div>
                                    <div>
                                        <img src="zoumadengp3.jpg"></img>
                                    </div>
                                    <div>
                                        <img src="zoumadengp4.jpg"></img>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div class="header">
                                <p>
                                    热门推荐
                                </p>
                            </div>
                            <div>
                                <PicDetailsDemo />
                            </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <RankingList/>
                    </Col>
                    <Col span={4}></Col>
                    </Row>
                </Col>
                <Col>
                    <Footer />
                </Col>
            </Row>
        )
    }
}
export default PlayPage;