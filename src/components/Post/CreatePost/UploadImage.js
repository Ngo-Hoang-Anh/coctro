import React, { useEffect, useState } from "react";

import { Upload, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { sendRequest } from '../../../common/utility';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const CreatePostPage = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const [newestImg, setNewestImg] = useState([]);
    useEffect(() => {
        try {
            let tempImg = fileList[0].thumbUrl;
            setNewestImg(tempImg);
            console.log(tempImg);
        } catch {

        }
    }, [[...fileList]]);
    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const handleChange = ({ fileList }) => setFileList(fileList);
    const upLoadImg = () => {
        const path = '/post-manager';
        console.log(newestImg);
        const myInit = {
            method: 'POST',
            body: JSON.stringify(
                {
                    imageList:
                        [
                            fileList[0].thumbUrl.slice(`data:image/jpeg;base64,`.length - 1, fileList[0].thumbUrl.length),
                            fileList[1].thumbUrl.slice(`data:image/jpeg;base64,`.length - 1, fileList[0].thumbUrl.length)
                        ]
                }
            ),
        }
        sendRequest(path, myInit).then((result) => {
            console.log(result);
        });
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            <Upload
                listType="picture-card"
                fileList={fileList}
                maxCount={10}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Button onClick={upLoadImg}>Send</Button>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            <img src={newestImg} alt="" />
            <img src="https://fptu-house-bucket.s3.ap-southeast-1.amazonaws.com/1632923246191.png" alt="" />
            <img src={newestImg} alt="" />


        </>
    );

}

export default CreatePostPage;
