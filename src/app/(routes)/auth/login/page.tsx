"use client";

import Field from "@/components/UI/Field/Field";
import { FormikProvider, useFormik, Form } from "formik";

import { Icon } from "@iconify/react";
import { LoginAPI, SendPasswordForgetAPI } from "@/services/auth/auth.services";
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
import * as yup from "yup";
import { ShowError, ShowSuccess } from "@/components/UI/Toast/toast";
import Link from "next/link";
export default function LoginPage() {
  const dispatcher = useDispatch();

  const { GoServices } = useRedirect().SUBSCRIPTIONS;
  const { GoRegister, GoPasswordForgotten } = useRedirect().AUTH;

  const { mutate, isLoading } = useMutation({
    mutationFn: LoginAPI,
    onSuccess: (data) => {
      if (!!data?.data?.user_info?.username === false) {
        ShowSuccess("لطفا ثبت نام کنید.");
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
      email: "",
      username: "",
    } as ILogin,
    onSubmit(values) {
      mutate(values);
    },
    validationSchema: yup.object({
      email: yup.string().required("نام کاربری الزامی است"),
      password: yup.string().required("رمز عبور الزامی است"),
    }),
  });

  const { values, handleChange, submitForm, errors } = formik;

  return (
    <PageContianer
      title='صفحه ورود'
      isLoading={isLoading}>
      <FormikProvider value={formik}>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Box
            header='ورود کاربری'
            icon={<Icon icon='material-symbols:login-sharp' />}
            isFieldSet
            glassMorphism
            style={{
              width: "90dvw",
              maxWidth: "25rem",
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
                    title='username'
                    type='text'
                    value={values.email}
                    validation={{
                      message: errors.email,
                    }}
                  />
                </Grid>
                <Grid>
                  <Field
                    icon={<Icon icon='mdi:password' />}
                    name='password'
                    onChange={handleChange}
                    title='password'
                    type='password'
                    value={values.password}
                    validation={{
                      message: errors.password,
                    }}
                  />
                </Grid>
                <Grid
                  color='white'
                  textAlign='right'
                  cursor='pointer'>
                  <p onClick={GoPasswordForgotten}>فراموشی رمز عبور</p>
                </Grid>
                <Grid>
                  <Button
                    icon={<Icon icon='formkit:submit' />}
                    onClick={submitForm}
                    title='ورود به پنل کاربری'
                    variant='danger'
                  />
                  <Flex
                    color='white'
                    alignItems='center'
                    center
                    cursor='pointer'
                    onClick={() => {
                      GoRegister();
                    }}>
                    <span>ثبت نام</span>
                  </Flex>
                  {/* <Link href='https://tamasha.me' className="w-full" target="_blank">
                    <div className="text-center mx-auto text-white"> بازگشت به سایت  </div>
                  </Link> */}
                  <Link href="https://tamasha.me" target="_blank" className="w-full text-center text-white">
                    <div className="w-full text-center text-white" style={{  textAlign: "center" }}>بازگشت به سایت</div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </FormikProvider>
    </PageContianer>
  );
}
