"use client";
import PaymentAnimaiton from "@/assets/animations/payment/PaymentAnimaiton";
import PageContianer from "@/components/layout/PageContainer/PageContianer";
import Button from "@/components/UI/Button/Button";
import Flex from "@/components/UI/Flex/Flex";
import Grid from "@/components/UI/Grid/Grid";
import useRedirect from "@/hooks/useRedirect";
import { CapturePyPalAPI } from "@/services/paypal/paypal.services";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery } from "react-query";

export default function Page() {
  const { SUBSCRIPTIONS, PUBLIC } = useRedirect();

  const { data, isLoading, error } = useQuery({
    queryFn: CapturePyPalAPI,
    onSuccess(data) {},
  });

  return (
    <PageContianer
      isLoading={isLoading}
      title='انجام تراکنش'>
      <Grid
        width={"32rem"}
        gap='0'>
        <PaymentAnimaiton />
        <Flex
          center
          gap='1rem'>
          <Grid
            color='white'
            fontSize={"2rem"}>
            <p>پرداخت با موفقیت انجام شد</p>
          </Grid>
          <Button
            icon={<Icon icon='lets-icons:back' />}
            onClick={SUBSCRIPTIONS.GoServices}
            title='بازگشت به سرویس ها'
            variant='light'
          />
        </Flex>
      </Grid>
    </PageContianer>
  );
}
