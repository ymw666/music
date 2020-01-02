import React from "react"
import Header from "../MainHeader/header"
import { Row, Col, Upload, Icon, message, Input, Button } from "antd"
import './moodpage.css'
import MoodList from "../MoodList/moodlist";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


class MoodPage extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    getMoodList() {
        let datalist = [{
            id: 1,
            text: "asdsgfgfhjhfgfdddfgfhfgfdfgfhfgfdfsgdhfgdfs"
        }]
        return datalist;
    }
    getdatalist = () => {
        this.datalist.map((item, i) => (
            <MoodList mood={item} />
        ))
    }
    render() {


        let datalist = this.getMoodList();
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <div><Header /></div>
                <div>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={4}>
                            <div className="thatall">
                                <div className="thisall">
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                    </Upload>
                                    <div className="username">
                                        <p>用户名：123456</p>
                                    </div>
                                    <div className="signature">
                                        <Input
                                            placeholder="您还没有签名，发表自己的个性签名吧"
                                        >

                                        </Input>
                                        <div className="button">
                                            <Button>提交修改</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            {this.getdatalist}
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default MoodPage;