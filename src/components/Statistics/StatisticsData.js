import {StatisticsSection, StatisticsTitleH, StatisticsListUl, StatisticsLi, StatisticsSpanLabel, StatisticsSpanPercentage} from './StatisticsData.styles';

export const StatisticsData = ({ stats }) => {
    console.log(stats)
    return (
        <StatisticsSection>
            <StatisticsTitleH>Upload stats</StatisticsTitleH>
            
            <div>
               
                  <StatisticsListUl>
                     {stats.map(item => (
                    <StatisticsLi>
                      <StatisticsSpanLabel>{item.label}</StatisticsSpanLabel>
                      <StatisticsSpanPercentage>{item.percentage}</StatisticsSpanPercentage>
                    </StatisticsLi> 
                    ))}
                  </StatisticsListUl>
               
            </div>  
             
         </StatisticsSection>
    );
};
