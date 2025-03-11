"use client";
import SuccessAnimation from "@/assets/animations/success/SuccessAnimation";
import PageContianer from "@/components/layout/PageContainer/PageContianer";
import Button from "@/components/UI/Button/Button";
import Flex from "@/components/UI/Flex/Flex";
import Grid from "@/components/UI/Grid/Grid";
import useRedirect from "@/hooks/useRedirect";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";

export default function Page() {
  const { SUBSCRIPTIONS, PUBLIC } = useRedirect();

  useEffect(() => {
    const debouce = setTimeout(() => {
      PUBLIC.GoHome();
    }, 30000);

    return () => clearTimeout(debouce);
  }, []);

  return (
    <PageContianer title='خرید موفق'>
      <Grid
        width={"32rem"}
        gap='0'>
        <SuccessAnimation />
        <Flex
          center
          gap='1rem'>
          <Grid
            color='white'
            fontSize={"2rem"}>
            <p>! سرویس شما با موفقیت خریداری شد</p>
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
