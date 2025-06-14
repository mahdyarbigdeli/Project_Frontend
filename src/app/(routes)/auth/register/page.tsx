"use client";

import Field from "@/components/UI/Field/Field";
import { Form, FormikProvider, useFormik } from "formik";

import { Icon } from "@iconify/react";
import { NoPassAPI, RegisterAPI } from "@/services/auth/auth.services";
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
import * as yup from "yup";
import { ShowSuccess } from "@/components/UI/Toast/toast";
import Swal from "sweetalert2";

export type NoPassResponse = { message: string } | { error: string };

export default function LoginPage() {
  const dispatcher = useDispatch();

  const { GoServices } = useRedirect().SUBSCRIPTIONS;
  const { GoLogin } = useRedirect().AUTH;

  const { mutate, isLoading } = useMutation({
    mutationFn: RegisterAPI,
    onSuccess: (data) => {
      dispatcher(userActions.login(data.data.user_info));
      Swal.fire({
        text: "رمزعبور به ایمیل شما ارسال گردید",
        icon: "success",
        confirmButtonText: "تایید",
      }).then((res) => {
        GoServices();
      });
      // ShowSuccess("رمزعبور به ایمیل شما ارسال شده است.");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      period: {
        label: "یک ماهه",
        value: "1month",
      } as any,
      username: "",
    } as IRegister,
    async onSubmit(values) {
      try {
        const noPassResponse = await NoPassAPI({ username: values.email });
        console.log(noPassResponse)
        if ("message" in noPassResponse) {
          ShowSuccess("کاربر موردنظر از قبل موجود می‌باشد.");
          GoLogin();
        }
        else {
          console.log()
        }
      } catch (error: any) {
        if (error.response?.status === 404) {
          Swal.fire({
            text: "رمزعبور به ایمیل شما ارسال گردید",
            icon: "success",
            confirmButtonText: "تایید",
          }).then((res) => {
            GoServices();
          });

          mutate({
            ...values,
            period: (values.period as any).value,
          });
        } else {
          console.error("Unexpected error:", error);
        }
      }
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("باید به فرمت ایمیل باشد")
        .required("ایمیل الزامی است"),
      period: yup.mixed().required("مدت دوره الزامی است"),
    }),
  });

  const { values, handleChange, submitForm, setFieldValue, errors } = formik;

  return (
    <PageContianer title="صفحه ثبت نام" isLoading={isLoading}>
      <FormikProvider value={formik}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Box
            header="ثبت ایمیل"
            icon={<Icon icon="material-symbols:login-sharp" />}
            isFieldSet
            glassMorphism
            style={{
              width: "90dvw",
              maxWidth: "25rem",
            }}
          >
            <Grid
              gap="1rem"
              gridTemplateColumns={"20rem"}
              alignItems="center"
              responsive={{
                mobile: {
                  gridTemplateColumns: "1fr",
                },
              }}
            >
              <Grid>
                <Grid>
                  <Field
                    icon={<Icon icon="entypo:email" />}
                    name="email"
                    onChange={handleChange}
                    title="ایمیل"
                    type="text"
                    value={values.email}
                    validation={{
                      message: errors.email,
                    }}
                  />
                </Grid>
                {/* <Grid>
                  <Field<any>
                    icon={<Icon icon='fluent:calendar-date-28-filled' />}
                    name='period'
                    onChange={(values) => {
                      setFieldValue("period", values);
                    }}
                    title='مدت دوره'
                    type='select'
                    value={values.period}
                    options={[
                      {
                        label: "یک ماهه",
                        value: "1month",
                      },
                      {
                        label: "شیش ماه",
                        value: "6month",
                      },
                      {
                        label: "یک ساله",
                        value: "1year",
                      },
                      {
                        label: "دائمی",
                        value: "unlimited",
                      },
                    ]}
                    selectKeys={{
                      label: "label",
                      value: "value",
                    }}
                    selectMode='single'
                    validation={{
                      message: errors.period,
                    }}
                  />
                </Grid> */}
                <Grid>
                  <Button
                    icon={<Icon icon="formkit:submit" />}
                    onClick={submitForm}
                    title="ثبت نام"
                    variant="danger"
                  />
                  <Flex
                    color="white"
                    alignItems="center"
                    center
                    cursor="pointer"
                    onClick={() => {
                      GoLogin();
                    }}
                  >
                    <span>ورود کاربری</span>
                  </Flex>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </FormikProvider>
    </PageContianer>
  );
}
