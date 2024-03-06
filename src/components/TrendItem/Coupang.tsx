import styled from 'styled-components';
import logo from '../../assets/trend/coupang.png';

export const Coupang = () => {
  return (
    <BasicCardContainer>
      <div className="item-title">
        <img src={logo} alt="" />
        <div>
          <p>쿠팡</p>
          <span>분야별 Hot 아이템</span>
        </div>
      </div>
      <div>카테고리</div>
      <div>랭킹</div>
    </BasicCardContainer>
  );
};

export const BasicCardContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  max-width: 303px;
  width: 100%;
  gap: 30px;
  //
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);

  .item-title {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.48px;
      margin-bottom: 6px;
    }

    span {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }
`;