import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement/AdvertisementList';
import { getAdvertisementList } from '../../api/advertisement';
import { AdvertiseItemProps } from '../../components/advertisement/AdvertisementItem';

export const AdvArchivePage = () => {
  const [sortType, setSortType] = useState<string>('LATEST');
  const [kwdVal, setKwdVal] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('2024-02-01');
  const [endDate, setEndDate] = useState<string>('2024-02-29');

  const [advData, setAdvData] = useState<AdvertiseItemProps[]>();

  useEffect(() => {
    getAdvertisementList({
      sortType: sortType,
      kwdVal: kwdVal,
      startDate: startDate,
      endDate: endDate,
    })
      .then((res) => {
        console.log('res:', res);
        setAdvData(res.data.advertisementSimpleResponses);
      })
      .catch((err) => console.log('err:', err));
  }, []);

  return (
    <>
      {/* TODO : prop으로 sortType, kwdVal, startDate, endDate */}
      <div>상단 배너 검색 부분</div>
      <AdvertisementList data={advData ?? []} />
    </>
  );
};