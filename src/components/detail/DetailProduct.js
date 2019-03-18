import React,{Component} from 'react';

export default class DetailProduct extends Component{
  render() {
    return (
      <div className="detail-product">
        <div className="detail-img">
          <div className="detail-img__list"><img src="../img/detail/03_Detail_03.jpg"/><img
            src="../img/detail/Layer 80.jpg"/><img src="../img/detail/Layer 82.jpg"/><img
            src="../img/detail/Layer 83.jpg"/><img src="../img/detail/Layer 84.jpg"/><img
            src="../img/detail/03_Detail_07.jpg"/></div>
          <img className="detail-img__product" src="../img/detail/Layer 79.jpg"/></div>
        <div className="detail-description"><h5 className="detail-description__name">Lắc tay TyFFanny xu hướng mới
          nhất</h5>
          <p className="detail-description__code">Tyffancy ms 3201</p>
          <p className="detail-description__price">955.000đ<span
            className="detail-description__price-old"> 999.000đ</span>
          </p>
          <p className="detail-description__text">Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn”
            không
            lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là
            nguồn cảm hứng vô tận để phái đẹp sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ
            của mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều chị em không ngần
            ngại chi tiêu “mạnh tay” để sở hữu những
            món đồ yêu thích.</p>
          <form className="detail-description__form">
            <div><label>MÀU SẮC</label><select>
              <option> Màu bạc</option>
            </select></div>
            <div><label>Size</label><select>
              <option>12</option>
            </select></div>
            <div className="product__detail__button">
              <button>MUA HÀNG</button>
              <button><i className="fa fa-heart"></i></button>
              <button><i className="fa fa-refresh"></i></button>
            </div>
          </form>
          <div className="detail-description__social"><p>Shopping &<span>Returns</span></p>
            <button className="cl-white"><i className="fa fa-facebook"></i> like</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-twitter cl_blue-sky"></i> Twitter</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-google"></i>+1</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-linkedin"></i>Share</button>
            <button><i className="fa fa-pinterest"></i>Pin it</button>
          </div>
        </div>
      </div>
    );
  }

}
