import { ProfileDiv, AvatarImg, Name, Tag, Location, StatsUl, StatsLi, StatsSpanLabel, StatsSpanQuantity} from './ProfileData.styled';

export const ProfileData = ({items}) => {
    console.log(items)
    return (        
            <ProfileDiv>            
                {items.map(item => (
                  <div>
                    <div>
                      <AvatarImg src={item.avatar} alt="foto" />
                      <Name>{item.username}</Name>
                      <Tag>{item.tag}</Tag>
                      <Location>{item.location}</Location>
                    </div>
                    
                        
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
                    </div>                     
                ))}          
            </ProfileDiv>         
    );    
};  

            
// import UserInfo from './userInfo'
// import { Card, Avatar, Name, Tag, Location, Stats } from './profile.style'


// export default function Profile({ username, avatar, tag, location, stats: { followers, views, likes } }) {
// 	return (
// 		<Card className="profile">
// 			<div className="description">
// 				<Avatar
// 					src={avatar}
// 					alt="User avatar"
// 						className="avatar"
// 						style={{}}
// 				/>
// 				<Name className="name">{username}</Name>
// 				<Tag className="tag">@{tag}</Tag>
// 				<Location className="location">{location}</Location>
// 			</div>

// 			<Stats className="stats">
// 				<li>
// 					<UserInfo label="Followers" quantity={followers} />
// 				</li>
// 				<li>
// 					<UserInfo label="Views" quantity={views} />
// 				</li>
// 				<li>
// 					<UserInfo label="Likes" quantity={likes} />
// 				</li>
// 			</Stats>
// 		</Card>
// 	);
// }