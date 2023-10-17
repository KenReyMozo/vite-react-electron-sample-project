import useFirebaseAuth from '@/firebase-manager/auth/AuthHook';
import style from './ProfilePage.module.scss';
import Input from '@/components/input/Input';
import { useState } from 'react';
import { User, updateProfile } from 'firebase/auth';

const ProfilePage: React.FC = () => {

  const { user } = useFirebaseAuth({ fallback_to: '/' });

  const [userProfile, setUserProfile] = useState({
    displayName : '',
  })

  const onChangeUserProfile = (e : RCE<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserProfile(prev => ({...prev, [name] : value}))
  }

  const onUpdateProfile = async () => {
    if(!user) return;
    await updateProfile(user, userProfile)
  }

  return (
    <div className={style.container}>
      <div className="m-4 grid gap-6 mb-6 md:grid-cols-2">
        <Input label="Name" required
          onChange={onChangeUserProfile}
          name='displayName'/>
        <button onClick={onUpdateProfile}>Update</button>
      </div>
    </div>
  );
};

export default ProfilePage;
