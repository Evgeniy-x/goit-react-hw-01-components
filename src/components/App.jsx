import { Profile } from './Profile/Profile.jsx';
import user from 'data-project/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import statistics from 'data-project/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
