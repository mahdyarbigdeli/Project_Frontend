"use client";

import Field from "@/components/UI/Field/Field";
import { FormikProvider, useFormik } from "formik";

import { Icon } from "@iconify/react";
import { LoginAPI, RegisterAPI } from "@/services/auth/auth.services";
import { ILogin, IRegister } from "@/types/auth.types";
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

  const { GoServices } = useRedirect().SUBSCRIPTIONS;
  const { GoRegister, GoLogin } = useRedirect().AUTH;

  const { mutate, isLoading } = useMutation({
    mutationFn: RegisterAPI,
    onSuccess: (data) => {
      if (!!data?.data?.user_info.email === false) {
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
      email: "",
      period: "",
    } as IRegister,
    onSubmit(values) {
      mutate(values);
    },
  });

  const { values, handleChange, submitForm } = formik;

  return (
    <PageContianer
      title='صفحه ثبت نام'
      isLoading={isLoading}>
      <FormikProvider value={formik}>
        <Box
          header='ثبت ایمیل'
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
                  icon={<Icon icon='entypo:email' />}
                  name='email'
                  onChange={handleChange}
                  title='ایمیل'
                  type='text'
                  value={values.email}
                />
              </Grid>
              <Grid>
                <Field
                  icon={<Icon icon='fluent:calendar-date-28-filled' />}
                  name='period'
                  onChange={handleChange}
                  title='مدت دوره'
                  type='text'
                  value={values.period}
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
