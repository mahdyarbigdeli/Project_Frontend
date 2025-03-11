"use client";
import React from "react";

import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ShowQuestion } from "@/components/UI/Toast/toast";
import { useDispatch } from "react-redux";
import { userActions } from "@/@redux/slices/UserSlice";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";

export default function Header() {
  const { user } = useGlobalStates();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    ShowQuestion({
      onConfirm() {
        dispatch(userActions.logout());
      },
    });
  };

  return (
    <header className={styles.header}>
      {user.username && (
        <Button
          icon={<Icon icon='line-md:logout' />}
          onClick={onLogoutClick}
          title='خروج از حساب'
          variant='danger'
          className={styles.logOut}
        />
      )}
      <img
        src='/images/logo/image.png'
        alt=''
        className={styles.logo}
      />
    </header>
  );
}
