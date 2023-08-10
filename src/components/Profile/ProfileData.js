import { ProfileDiv, AvatarImg, Name, Tag, Location, ProfileSection, CardDiv, StatsUl, StatsLi, StatsSpanLabel, StatsSpanQuantity} from './ProfileData.styled';


export const ProfileData = ({items}) => {
    console.log(items)
    return ( 
        <ProfileSection>
          <ProfileDiv>            
                {items.map(item => (
                  <CardDiv>
                    
                      <AvatarImg src={item.avatar} alt="foto" />
                      <Name>{item.username}</Name>
                      <Tag>{item.tag}</Tag>
                      <Location>{item.location}</Location>

        <StatsUl>
                            
              <StatsLi>
                <StatsSpanLabel>Followers</StatsSpanLabel>
                <StatsSpanQuantity>{item.stats.followers}</StatsSpanQuantity>
              </StatsLi>                            
                            
              <StatsLi>
                <StatsSpanLabel>Views</StatsSpanLabel>
                <StatsSpanQuantity>{item.stats.views}</StatsSpanQuantity>
              </StatsLi>                               
                            
              <StatsLi>
                <StatsSpanLabel>Likes</StatsSpanLabel>
                <StatsSpanQuantity>{item.stats.likes}</StatsSpanQuantity>
              </StatsLi>
        </StatsUl>
                     
                  </CardDiv>                     
                ))}          
            </ProfileDiv> 
        </ProfileSection>
                    
    );    
};  