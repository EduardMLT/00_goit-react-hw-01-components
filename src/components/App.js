import { ProfileData } from "./Profile/ProfileData";
import profileItems from "../user.json";
import { StatisticsData } from "./Statistics/StatisticsData";
import data from "../data.json";
import { FriendList } from "./Friend/FriendList";
import friends from "../friends.json";

export const App = () => {
  return (
    <div>
      
      <ProfileData items={profileItems} />
      <StatisticsData stats={data} />
      <FriendList stats={friends} />
        
    </div>
  );
};



// import Profile from './profile/profile'
// import profileData from '../user.json'
// import data from '../data.json'
// import Statistic from './statistic/statistic'
// import friendsData from '../friends.json'
// import FriendList from './friendList/friendList'
// import transactions from '../transactions.json'
// import TransactionHistory from './transactions/transactionHistory'
// import { GlobalStyle } from './GlobalStyle'

// export const App = () => {
//   return (
//     <>
//       <GlobalStyle/>
//       <Profile
//         username={profileData.username}
//         tag={profileData.tag}
//         location={profileData.location}
//         avatar={profileData.avatar}
//         stats={profileData.stats}
//       />
    
//       <Statistic title="Upload stats" stats={data} />

//       <FriendList props={friendsData} />

//       <TransactionHistory transactionsItems={transactions} />
//     </>
//   );
// };