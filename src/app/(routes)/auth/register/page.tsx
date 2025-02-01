"use client";

import Field from "@/components/UI/Field/Field";
import { FormikProvider, useFormik } from "formik";

import { Icon } from "@iconify/react";
import { LoginAPI } from "@/services/auth/auth.services";
import { ILogin } from "@/types/auth.types";
import Button from "@/components/UI/Button/Button";
import { useMutation } from "react-query";
import PageContianer from "@/components/layout/PageContainer/PageContianer";
import { useDispatch } from "react-redux";
import { userActions } from "@/@redux/slices/UserSlice";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import Grid from "@/components/UI/Grid/Grid";
import Box from "@/components/UI/Box/Box";
import useRedirect from "@/hooks/useRedirect";
import Flex from "@/components/UI/Flex/Flex";

export default function LoginPage() {
  const { user } = useGlobalStates();

  const dispatcher = useDispatch();

<<<<<<< HEAD
<<<<<<< HEAD
  const { GoServices } = useRedirect().SUBSCRIPTIONS;
=======
  const { GoServices } = useRedirect().SERVICES;
>>>>>>> origin/main
=======
  const { GoServices } = useRedirect().SERVICES;
>>>>>>> origin/main
  const { GoRegister, GoLogin } = useRedirect().AUTH;

  const { mutate, isLoading } = useMutation({
    mutationFn: LoginAPI,
    onSuccess: (data) => {
      if (!!data?.data?.user_info.username === false) {
        GoRegister();
        return;
      }
      dispatcher(userActions.login(data.data.user_info));
      setTimeout(() => {
        GoServices();
      }, 200);
    },
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    } as ILogin,
    onSubmit(values) {
      mutate({
        username: "testuser3",
        password: "6047579191",
      });
    },
  });

  const { values, handleChange, submitForm } = formik;

  return (
    <PageContianer
      title='صفحه ثبت نام'
      isLoading={isLoading}>
      <FormikProvider value={formik}>
        <Box
          header='ثبت نام کاربری'
          icon={<Icon icon='material-symbols:login-sharp' />}
          isFieldSet
          glassMorphism
          style={{
            width: "90dvw",
            maxWidth: "max-content",
          }}>
          <Grid
            gap='1rem'
            gridTemplateColumns={"  20rem "}
            alignItems='center'
            responsive={{
              mobile: {
                gridTemplateColumns: "1fr",
              },
            }}>
            <Grid>
              <Grid>
                <Field
                  icon={<Icon icon='mynaui:user-solid' />}
                  name='email'
                  onChange={handleChange}
                  title='نام کاربری'
                  type='text'
                  value={values.username}
                />
              </Grid>
              <Grid>
                <Button
                  icon={<Icon icon='formkit:submit' />}
                  onClick={submitForm}
                  title='ثبت نام'
                  variant='danger'
                />
                <Flex
                  color='white'
                  alignItems='center'
                  center
                  cursor='pointer'
                  onClick={() => {
                    GoLogin();
                  }}>
                  <span>ورورد کاربری</span>
                </Flex>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </FormikProvider>
    </PageContianer>
  );
}
