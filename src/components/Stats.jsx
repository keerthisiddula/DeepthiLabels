import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Trigger animation just once after mount
    setStart(true);
  }, []);

  return (
    <section className={`
      ${styles.flexCenter} flex-wrap
      gap-x-14 gap-y-8
      mt-5 mb-0 sm:mb-10
      px-4 sm:px-6 md:px-1
      justify-center
    `}>

      {stats.map((stat, index) => (
  <div
    key={stat.id}
    className={`flex flex-col items-center sm:flex-row sm:items-center
      ${index === stats.length - 1 ? 'mb-0 sm:mb-0' : ''}
    `}
    style={{ minWidth: '180px' }}
  >
    <h4 className="font-poppins font-medium text-[24px] sm:text-[36px] md:text-[40px] lg:text-[30px] leading-[48px] text-white">
      {start && (() => {
        const hasK = stat.value.toUpperCase().includes('K');
        const hasPlus = stat.value.includes('+');
        let endValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));

        if (hasK) {
          endValue *= 1000;
        }

        return (
          <CountUp
            end={endValue}
            duration={2}
            suffix={hasK ? 'K+' : hasPlus ? '+' : ''}
          />
        );
      })()}
    </h4>
    <p className="font-poppins font-normal text-[18px] sm:text-[19px] md:text-[20px] leading-[28px] text-gradient ml-0 sm:ml-2 text-center sm:text-left">
      {stat.title}
    </p>
  </div>
))}

    </section>
  );
};

export default Stats;
