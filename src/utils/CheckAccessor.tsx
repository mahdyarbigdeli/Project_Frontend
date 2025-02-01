import { RootState } from '@/@redux/reducers';
import { IUser } from '@/types/auth.types';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface CheckAccessorProps {
    children: ReactNode;
}

export const CheckAccessor: React.FC<CheckAccessorProps> = ({children}) => {
    const user = useSelector((state: RootState) => state.user);

    // useEffect(() => {
    //     if (!user.accessToken) GoLogin();
    //   }, [token]);

  return (
    <div>{children}</div>
  );
};
