import { memo, useEffect, useState } from 'react';
import AuthService from '../../services/auth.service';
import user from '../../assets/images/user.png';
import useProfileImage from '../../hooks/useProfileImage';

const Header = memo(({ title }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profileImg] = useProfileImage();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setEmail(currentUser.email);
      setUsername(currentUser.username);
    }
  }, []);

  return (
    <div className="top fade-in">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="profile">
        <div className="profile-img">
          {!profileImg && <img src={user} width={44} height={44} alt="user" />}
          {profileImg !== null && <img src={profileImg} width={44} height={44} alt="user" />}
        </div>
        <div>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
});

export default Header;
