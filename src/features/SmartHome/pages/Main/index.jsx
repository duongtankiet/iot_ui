import React from 'react';
// import Banner from '../../../../components/Banner';
import './styles.scss';
// import { Link } from 'react-router-dom';
// import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
  //initialize the MQTT client

  return (
    <div class="grid-bg ba-grid anim">
      <div class="inner"></div>
      <div className="tieude">LUẬN VĂN TỐT NGHIỆP K43</div>
      <div className="tieude1">MÔ HÌNH IOTS CHO NHÀ THÔNG MINH</div>
      <div className="gvhd">
        <div className="tieude2">Giáo viên hướng dẫn</div>
        <div className="tieude2">GVC.TS. Trương Quốc Bảo</div>
      </div>
      <div className="svtt">
        <div className="tieude3">Sinh viên thực hiện</div>
        <div className="sv1">
          <div className="tieude3">Dương Tấn Kiệt</div>
          <div className="tieude3">MSSV: B1709222</div>
        </div>
        <div className="sv2">
          <div className="tieude3">Nguyễn Hoàng Khá</div>
          <div className="tieude3">MSSV: B1709217</div>
        </div>
      </div>
      <div className="tomtat">Một mô hình hệ thống dành cho nhà thông minh giúp người dùng có thể điều khiển các thiết bị trong nhà. Hệ thống có khả năng bật tắt các thiết bị chiếu sáng, máy lạnh và cảnh báo cháy cho ngôi nhà, ra vào nhà bằng phương pháp đăng nhập bằng vân tay đồng thời ứng dụng có thể lưu dữ liệu bật tắt các thiết bị và lịch sử ra vào nhà xuống database và đưa dữ liệu lên giao diện người dùng để dễ kiểm soát thiết bị và nắm được các thông tin khi cần thiết. Hệ thống được xây dựng dựa trên vi điều khiển ESP8266 có thể kết nối Internet và kết nối đồng thời các thiết bị trong nhà cùng với một ứng dụng được lặp trình để kết nối đến vi điều khiển thông qua giao thức MQTT để tiến hành ra lệnh cho vi điều khiển điều khiển các thiết bị trong nhà. Kết quả hệ thống có thể giúp chủ nhân căn nhà điều khiển được các thiết bị trong ngôi nhà của mình mọi lúc mọi nơi một cách dễ dàng.</div>
    </div>
  );
}

export default MainPage;