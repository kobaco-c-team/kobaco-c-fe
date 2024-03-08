import styled from 'styled-components';
import trend_back from '../../assets/trend/trend_banner.png';
import { Input } from '../../components/common-components/Input/Input';
import { useState } from 'react';
import {
  SelectFilter,
  expressionCategory,
} from '../../components/common-components/SelectFilter/SelectFilter';

export const AdvSearchBanner = () => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <SearchBannerContainer>
      <Container>
        <div className="banner-title">
          <p>내가 만들 광고와 관련된</p>
          <p>참고 영상을 찾고 분석하고 싶다면?</p>
          <br />
          <br />
          <span>
            아이디어를 얻기 위해 아카이브에서 참고영상을 찾아보세요.
            <br /> 키워드만 입력하면 AI 객체 인식 기반으로 원하는 광고를 쉽고
            빠르게 찾아볼 수 있어요.
          </span>
        </div>
        <Input
          placeholder="찾고 싶은 키워드를 검색하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="lg"
          style={{ width: '70%' }}
        />
        <div className="input-wrapper">
          <div>calendar</div>

          <div className="filter-container">
            <SelectFilter
              placeholder="표정 분석"
              filterData={expressionCategory}
            />
            <SelectFilter
              placeholder="영상 분위기 분석"
              filterData={expressionCategory}
            />
          </div>
        </div>
      </Container>
    </SearchBannerContainer>
  );
};

export const SearchBannerContainer = styled.div`
  background-image: url(${trend_back});
  background-size: cover;
  width: 100%;
  /* height: 573px; */
  padding: 100px 0px;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .input-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-top: 40px;
    box-sizing: border-box;
    /* border: 1px solid black; */
    gap: 22px;

    .filter-container {
      width: 540px;
      gap: 22px;
      display: flex;
    }
  }

  .banner-title {
    margin-bottom: 50px;

    p {
      color: var(--White, #fff);
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      letter-spacing: -0.76px;
    }

    span {
      color: var(--White, #fff);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: -0.4px;
    }
  }
`;
