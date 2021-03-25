import React from 'react';
import { useTranslation, nameSpaces } from "locales";
import { useFollowers } from 'hooks/useFollowers';
import { useUser } from 'hooks/useUser';

const Followers = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  const { data: userData } = useUser();
  const followers = useFollowers(userData.data[0].id);
  console.log(followers)
  return (
    <div>
      Followers
    </div>
  )
}

export default Followers;
