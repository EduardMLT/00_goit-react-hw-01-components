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