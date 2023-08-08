import {FriendDiv, FriendUl, FriendLi, Status, AvatarImg, Name} from './FriendList.styled';

export const FriendList = ({ stats }) => {
    console.log(stats)
    return (
        <FriendDiv>
            <FriendUl>
                {stats.map(item => (
                    <FriendLi>
                        <Status>{item.isOnline}AAA</Status>
                        <AvatarImg src={item.avatar} alt="User avatar" width="48" />
                        <Name>{item.name}</Name>
                    </FriendLi>
                ))}   
            </FriendUl>  
        </FriendDiv>
    )
    }