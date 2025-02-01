"use client";
import CancelAnimation from "@/assets/animations/cancel/CancelAnimation";
import PageContianer from "@/components/layout/PageContainer/PageContianer";
import Button from "@/components/UI/Button/Button";
import Flex from "@/components/UI/Flex/Flex";
import Grid from "@/components/UI/Grid/Grid";
import useRedirect from "@/hooks/useRedirect";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Page() {
  const { SUBSCRIPTIONS } = useRedirect();
  return (
    <PageContianer title='خرید ناموفق'>
      <Grid
        width={"30rem"}
        gap='0'>
        <CancelAnimation />
        <Flex
          center
          gap='1rem'>
          <Grid
            color='white'
            fontSize={"2rem"}>
            <p>! خرید شما ناموفق بود</p>
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
