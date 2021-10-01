import React, { useState } from "react";
import { sendRequest } from "../../../common/utility";
import { useHistory } from "react-router-dom";
import "./Post.css";

import CommonInformation from "./FormInformation/CommonInformation/CommonInformation";
import DetailInformation from "./FormInformation/DetailInformation/DetailInformation";
import PostInformation from "./PostInformation/PostInformation";

function Post(props) {
  let history = useHistory();
  
  const residences = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  //Post Type - Start
  const [postType, setPostType] = useState("");
  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ"];
  const [priceUnit, setPriceUnit] = useState("Giá cho thuê:");
  const onChangePostType = (e) => {
    setPostType(e.target.value);
  };
  //Post Type - End


  //Room Type - Start
  const [roomType, setRoomType] = useState("");
  const valueRoomType = [
    "Ký túc xá",
    "Phòng trọ cho thuê",
    "Nhà nguyên căn",
    "Chung cư mini",
  ];
  const onChangeRoomType = (e) => {
    let value = e.target.value;
    setRoomType(value);
    if (value === "Ký túc xá") {
      setPriceUnit("Giá cho thuê (đơn vị:VND/người)");
    } else if (value === "Phòng trọ cho thuê") {
      setPriceUnit("Giá cho thuê (đơn vị: VND/phòng)");
    } else if (value === "Nhà nguyên căn" || value === "Chung cư mini") {
      setPriceUnit("Giá cho thuê (đơn vị: VND/căn)");
    } else {
      setPriceUnit("Giá cho thuê:");
    }
  };
  //Room Type - End


  //Number Room Available - Start
  const [numberRoomAvailable, setNumberRoomAvailable] = useState(3)
  function onChangeNumberRoomAvaiable(value) {
    setNumberRoomAvailable(value)
  }
  //Number Room Available - End


  //Number Person Per Room - Start
  const [numberPeoplePerRoom, setNumberPeoplePerRoom] = useState(2)
  function onChangeNumberPersonPerRoom(value) {
    setNumberPeoplePerRoom(value)
  }
  //Number Person Per Room - End

  //Gender - Start
  const [gender, setGender] = useState("");
  const valueGender = ["Tất cả", "Nam", "Nữ"];
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  //Gender - End

  //Rent Price - Start
  const [rentPrice, setRentPrice] = useState("");
  const onChangeRentPrice = (e) => {
    setRentPrice(e.target.value)
  }
  //Rent Price - End

  //Deposit - Start
  const [deposit, setDeposit] = useState("");
  const onChangeDeposot = (e) => {
    setDeposit(e.target.value)
  }
  //Deposit - End

  //Electric Price - Start
  const [electricPrice, setElectricPrice] = useState("");
  const onChangeElectricPrice = (e) => {
    setElectricPrice(e.target.value)
  }
  //Electric Price - End

  //Water Price - Start
  const [waterPrice, setWaterPrice] = useState("");
  const onChangeWaterPrice = (e) => {
    setWaterPrice(e.target.value)
  }
  //Water Price - End

  //Internet Price - Start
  const [internetPrice, setInternetPrice] = useState("");
  const onChangeInternetPrice = (e) => {
    setInternetPrice(e.target.value)
  }
  //Internet Price - End

  //Other Price - Start
  const [otherPrice, setOtherPrice] = useState("");
  const onChangeOtherPrice = (e) => {
    setOtherPrice(e.target.value)
  }
  //Other Price - End


  //Utilities - Start
  const utilities = [
    { label: "WC riêng", value: "WC riêng" },
    { label: "Cửa sổ", value: "Cửa sổ" },
    { label: "Chủ riêng", value: "Chủ riêng" },
    { label: "Bình nóng lạnh", value: "Bình nóng lạnh" },
    { label: "Tủ lạnh", value: "Tủ lạnh" },
    { label: "Gác lửng", value: "Gác lửng" },
    { label: "Tủ đồ", value: "Tủ đồ" },
    { label: "Thú cưng", value: "Thú cưng" },
    { label: "Bảo vệ", value: "Bảo vệ" },
    { label: "Camera an ninh", value: "Camera an ninh" },
    { label: "Điều hoà", value: "Điều hoà" },
    { label: "Nhà bếp", value: "Nhà bếp" },
    { label: "Máy giặt", value: "Máy giặt" },
    { label: "Giường", value: "Giường" },
    { label: "Tivi", value: "Tivi" },
    { label: "Ban công", value: "Ban công" },
  ];
  //Utilities - End

  //Phone - Start
const [phone, setPhone] = useState();
const onChangePhone = (e) => {
  setPhone(e.target.value)
}
  //Phone - End

  //Caption - Start
  const [caption, setCaption] = useState("");
  const onChangeCaption = (e) => {
    setCaption(e.target.value)
  }
  //Caption - End

  //Description - Start
  const [description, setDescription] = useState("");
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  //Description - End

  //Strict Time - Start
  const [strictTime, setStrictTime] = useState("");
  const [strictTimeStart, setStrictTimeStart] = useState("");
  const [strictTimeEnd, setStrictTimeEnd] = useState("");
  
  const valueStrictTime = ["Có", "Không"];

  const onChangeStrictTime = (e) => {
    setStrictTime(e.target.value);
  };
  const onChangeStrictTimeStart = (e) => {
    setStrictTimeStart(e.target.value);
  };
  const onChangeStrictTimeEnd = (e) => {
    setStrictTimeEnd(e.target.value);
  };
//Strict Time - End
  
  //Ultilities - Start
  const [chosenUltilities, setChosenUltilities] = useState([]);
  const onChangeUltilities = (e) => {
    
    setChosenUltilities(e);
  };
  //Ultilities - End

  //Checkbox Confirm - Start
const [checkboxConfirm, setCheckboxConfirm] = useState();
const onCheckCheckboxConfirm = (e) => {
  setCheckboxConfirm(e.target.value)
}
  //Checkbox Confirm - End
  
  const onFinish = (values) => {
    //TODO: validate
    const path = "/post-manager";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        postType: values.postType,
        roomType: values.roomType,
        numberRoomAvailable: values.numberRoomAvailable,
        numberPeoplePerRoom: values.numberPeoplePerRoom,
        gender: values.gender,
        deposit: values.deposit,
        electricPrice: values.electricPrice,
        waterPrice: values.waterPrice,
        internetPrice: values.internetPrice,
        otherPrice: values.otherPrice,
        location: values.location,
        utilities: [...chosenUltilities],
        phone: values.phone,
        caption: values.caption,
        description: values.description,
        strictTime: values.strictTime,
        StrictTimeStart: values.StrictTimeStart,
        StrictTimeEnd: values.StrictTimeEnd,
      }),
    };
    console.log(myInit.body);
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        window.alert("Error:" + result.error);
      } else {
        window.alert("New Post created Successfully");
        history.push("/home");
      }
    });
  };

  const [formShow, setFormShow] = useState("common-information");
  const changeForm = (formShowTmp) => {
    if (formShowTmp === "common-information") {
      return (
        <CommonInformation
          formItemLayout={formItemLayout}
          valuePostType={valuePostType}
          onChangePostType={onChangePostType}
          postType={postType}
          valueRoomType={valueRoomType}
          onChangeRoomType={onChangeRoomType}
          roomType={roomType}
          numberRoomAvailable={numberRoomAvailable}
          onChangeNumberRoomAvaiable={onChangeNumberRoomAvaiable}
          numberPeoplePerRoom={numberPeoplePerRoom}
          onChangeNumberPersonPerRoom={onChangeNumberPersonPerRoom}
          valueGender={valueGender}
          onChangeGender={onChangeGender}
          gender={gender}
          tailFormItemLayout={tailFormItemLayout}
          nextBack={nextBack}
        />
      );
    }

    if (formShowTmp === "detail-information") {
      return (
        <DetailInformation
          formItemLayout={formItemLayout}
          priceUnit={priceUnit}
          rentPrice={rentPrice}
          onChangeRentPrice={onChangeRentPrice}
          deposit={deposit}
          onChangeDeposot={onChangeDeposot}
          electricPrice={electricPrice}
          onChangeElectricPrice={onChangeElectricPrice}
          waterPrice={waterPrice}
          onChangeWaterPrice={onChangeWaterPrice}
          internetPrice={internetPrice}
          onChangeInternetPrice={onChangeInternetPrice}
          otherPrice={otherPrice}
          onChangeOtherPrice={onChangeOtherPrice}
          residences={residences}
          utilities={utilities}
          chosenUltilities={chosenUltilities}
          onChangeUltilities={onChangeUltilities}
          tailFormItemLayout={tailFormItemLayout}
          nextBack={nextBack}
        />
      );
    }
    return (
      <PostInformation
      formItemLayout={formItemLayout}
      onFinish={onFinish}
      phone={phone}
      onChangePhone={onChangePhone}
      caption={caption}
      description={description}
      onChangeDescription={onChangeDescription}
      onChangeCaption={onChangeCaption}
      valueStrictTime={valueStrictTime}
      onChangeStrictTime={onChangeStrictTime}
      strictTime={strictTime}
      strictTimeStart={strictTimeStart}
      strictTimeEnd={strictTimeEnd}
      onChangeStrictTimeStart={onChangeStrictTimeStart}
      onChangeStrictTimeEnd={onChangeStrictTimeEnd}
      tailFormItemLayout={tailFormItemLayout}
      checkboxConfirm={checkboxConfirm}
      onCheckCheckboxConfirm={onCheckCheckboxConfirm}
      nextBack={nextBack}
      />
    );
  };

 const nextBack = function(visit) {
    if(visit==='detail-information') {
      setFormShow("detail-information");
    }
    if(visit==='common-information') {
      setFormShow("common-information");
    }
    if(visit==='post-information') {
      setFormShow("post-information");
    }
  }
  return (
    <div className="container">
      {changeForm(formShow)}
    </div>
  );
}

export default Post;
