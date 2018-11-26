var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var check = require('../../../utils/check.js');

var app = getApp();
Page({
  data: {
    address: {
      id:0,
      provinceId: 0,
      cityId: 0,
      areaId: 0,
      address: '',
      name: '',
      mobile: '',
      isDefault: 0,
      provinceName: '',
      cityName: '',
      areaName: ''
    },
    addressId: 0,
    openSelectRegion: false,
    selectRegionList: [
      { areaCode: 0, name: '省份', parentCode: 1, type: 1 },
      { areaCode: 0, name: '城市', parentCode: 1, type: 2 },
      { areaCode: 0, name: '区县', parentCode: 1, type: 3 }
    ],
    regionType: 1,
    regionList: [],
    selectRegionDone: false
  },
  bindinputMobile(event) {
    let address = this.data.address;
    address.mobile = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputName(event) {
    let address = this.data.address;
    address.name = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputAddress (event){
    let address = this.data.address;
    address.address = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindIsDefault(){
    let address = this.data.address;
    address.isDefault = !address.isDefault;
    this.setData({
      address: address
    });
  },
  getAddressDetail() {
    let that = this;
    util.request(api.AddressDetail, { areaCode: that.data.addressId }).then(function (res) {
      if (res.code === 0) {
        if(res.data){
            that.setData({
                address: res.data
            });
        }
      }
    });
  },
  setRegionDoneStatus() {
    let that = this;
    let doneStatus = that.data.selectRegionList.every(item => {
      return item.areaCode != 0;
    });

    that.setData({
      selectRegionDone: doneStatus
    })

  },
  chooseRegion() {
    let that = this;
    this.setData({
      openSelectRegion: !this.data.openSelectRegion
    });

    //设置区域选择数据
    let address = this.data.address;
    if (address.provinceId > 0 && address.cityId > 0 && address.areaId > 0) {
      let selectRegionList = this.data.selectRegionList;
      selectRegionList[0].areaCode = address.provinceId;
      selectRegionList[0].name = address.provinceName;
      selectRegionList[0].parentCode = 0;

      selectRegionList[1].areaCode = address.cityId;
      selectRegionList[1].name = address.cityName;
      selectRegionList[1].parentCode = address.provinceId;

      selectRegionList[2].areaCode = address.areaId;
      selectRegionList[2].name = address.areaName;
      selectRegionList[2].parentCode = address.cityId;

      this.setData({
        selectRegionList: selectRegionList,
        regionType: 3
      });

      this.getRegionList(address.cityId);
    } else {
      this.setData({
        selectRegionList: [
          { areaCode: 0, name: '省份', parentCode: 0, type: 1 },
          { areaCode: 0, name: '城市', parentCode: 0, type: 2 },
          { areaCode: 0, name: '区县', parentCode: 0, type: 3 }
        ],
        regionType: 1
      })
      this.getRegionList(0);
    }

    this.setRegionDoneStatus();

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)
    if (options.areaCode && options.areaCode != 0) {
      this.setData({
        addressId: options.areaCode
      });
      this.getAddressDetail();
    }
  },
  onReady: function () {

  },
  selectRegionType(event) {
    let that = this;
    let regionTypeIndex = event.target.dataset.regionTypeIndex;
    let selectRegionList = that.data.selectRegionList;

    //判断是否可点击
    if (regionTypeIndex + 1 == this.data.regionType || (regionTypeIndex - 1 >= 0 && selectRegionList[regionTypeIndex - 1].areaCode <= 0)) {
      return false;
    }

    this.setData({
      regionType: regionTypeIndex + 1
    })
    
    let selectRegionItem = selectRegionList[regionTypeIndex];

    this.getRegionList(selectRegionItem.parentCode);

    this.setRegionDoneStatus();

  },
  selectRegion(event) {
    let that = this;
    let regionIndex = event.target.dataset.regionIndex;
    let regionItem = this.data.regionList[regionIndex];
    let regionType = regionItem.layer;
    let selectRegionList = this.data.selectRegionList;
    selectRegionList[regionType - 1] = regionItem;


    if (regionType != 3) {
      this.setData({
        selectRegionList: selectRegionList,
        regionType: regionType + 1
      })
      this.getRegionList(regionItem.areaCode);
    } else {
      this.setData({
        selectRegionList: selectRegionList
      })
    }

    //重置下级区域为空
    selectRegionList.map((item, index) => {
      if (index > regionType - 1) {
        item.areaCode = 0;
        item.name = index == 1 ? '城市' : '区县';
        item.parentCode = 0;
      }
      return item;
    });

    this.setData({
      selectRegionList: selectRegionList
    })


    that.setData({
      regionList: that.data.regionList.map(item => {

        //标记已选择的
        if (that.data.regionType == item.layer && that.data.selectRegionList[that.data.regionType - 1].areaCode == item.areaCode) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        return item;
      })
    });

    this.setRegionDoneStatus();

  },
  doneSelectRegion() {
    if (this.data.selectRegionDone === false) {
      return false;
    }

    let address = this.data.address;
    let selectRegionList = this.data.selectRegionList;
    address.provinceId = selectRegionList[0].areaCode;
    address.cityId = selectRegionList[1].areaCode;
    address.areaId = selectRegionList[2].areaCode;
    address.provinceName = selectRegionList[0].name;
    address.cityName = selectRegionList[1].name;
    address.areaName = selectRegionList[2].name;

    this.setData({
      address: address,
      openSelectRegion: false
    });

  },
  cancelSelectRegion() {
    this.setData({
      openSelectRegion: false,
      regionType: this.data.regionDoneStatus ? 3 : 1
    });

  },
  getRegionList(regionId) {
    let that = this;
    let regionType = that.data.regionType;
    util.request(api.RegionList, { areaCode: regionId }).then(function (res) {
      if (res.code === 0) {
        that.setData({
          regionList: res.data.map(item => {

            //标记已选择的
            if (regionType == item.layer && that.data.selectRegionList[regionType - 1].areaCode == item.areaCode) {
              item.selected = true;
            } else {
              item.selected = false;
            }

            return item;
          })
        });
      }
    });
  },
  cancelAddress(){
    wx.navigateBack();
  },
  saveAddress(){
    console.log(this.data.address)
    let address = this.data.address;

    if (address.name == '') {
      util.showErrorToast('请输入姓名');

      return false;
    }

    if (address.mobile == '') {
      util.showErrorToast('请输入手机号码');
      return false;
    }


    if (address.areaId == 0) {
      util.showErrorToast('请输入省市区');
      return false;
    }

    if (address.address == '') {
      util.showErrorToast('请输入详细地址');
      return false;
    }

    if (!check.isValidPhone(address.mobile)) {
      util.showErrorToast('手机号不正确');
      return false;
    }

    let that = this;
    util.request(api.AddressSave, { 
      id: address.id,
      name: address.name,
      mobile: address.mobile,
      provinceId: address.provinceId,
      cityId: address.cityId,
      areaId: address.areaId,
      address: address.address,
      isDefault: address.isDefault
    }, 'POST').then(function (res) {
      if (res.code === 0) {
        //返回之前，先取出上一页对象，并设置addressId
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        console.log(prevPage);
        if (prevPage.route == "pages/checkout/checkout") {
          prevPage.setData({
            addressId: res.data
          })

          try {
            wx.setStorageSync('addressId', res.data);
          } catch (e) {

          }
          console.log("set address");
        }
        wx.navigateBack();
      }
    });

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  }
})