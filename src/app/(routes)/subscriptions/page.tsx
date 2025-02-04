"use client";
import PageContianer from "@/components/layout/PageContainer/PageContianer";
import Box from "@/components/UI/Box/Box";
import Button from "@/components/UI/Button/Button";
import Flex from "@/components/UI/Flex/Flex";
import Grid from "@/components/UI/Grid/Grid";
import { Icon } from "@iconify/react/dist/iconify.js";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import useTable from "@/components/UI/Table/Hooks/useTable";
import { GetAllAPI } from "@/services/subscriptions/subscriptions.services";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";
import moment from "moment-jalaali";
import { dateToJalai } from "@/utils/Converters";
import { ISubscirption } from "@/types/subscription.types";

export default function ServicesPage() {
  const { user } = useGlobalStates();

  const {
    currentPage,
    data,
    forceRefresh,
    isLoading,
    meta,
    nextPage,
    params,
    searchs,
    setCurrentPage,
    setParams,
    setSearchs,
    setSorts,
    sorts,
  } = useTable<ISubscirption>({
    api: GetAllAPI,
    enable: true,
    initialPage: 1,
    initialSearchs: {},
    initialSorts: {},
  });

  return (
    <PageContianer
      title='سرویس ها'
      isLoading={isLoading}>
      <Box
        header='سرویس ها'
        isFieldSet
        glassMorphism
        icon={<Icon icon='file-icons:service-fabric' />}
        style={{
          width: "90dvw",
          maxWidth: "max-content",
          maxHeight: "90dvh",
        }}>
        <Grid
          gridTemplateColumns={"1fr"}
          alignItems='start'
          gap='0'
          responsive={{
            mobile: {
              gridTemplateColumns: "1fr",
            },
          }}>
          <Box
            header='اطلاعات کاربری'
            isFieldSet
            glassMorphism
            icon={<Icon icon='solar:user-bold' />}
            style={{
              height: "max-content",
              display: "flex",
            }}>
            <Grid color='white'>
              <Flex center>
                <small>ایمیل : </small>
                <h3>{user.email}</h3>
              </Flex>
              <Flex center>
                <small>رمزعبور : </small>
                <h3>{user.password}</h3>
              </Flex>
              <Flex center>
                <small>تاریخ اتمام اشتراک : </small>
                <h3>{dateToJalai(parseInt(user.exp_date) * 1000)}</h3>
              </Flex>
              <Flex center>
                {user.active_cons === "0" && (
                  <Button
                    icon={<Icon icon='mynaui:danger-diamond-solid' />}
                    onClick={() => {}}
                    title='اشتراک شما غبیرفعال میباشد'
                    variant='danger'
                  />
                )}
                {user.active_cons === "1" && (
                  <Button
                    icon={<Icon icon='nrk:check-active' />}
                    onClick={() => {}}
                    title='اشتراک شما فعال میباشد'
                    variant='success'
                  />
                )}
              </Flex>
            </Grid>
          </Box>
          <Box
            header='خرید / تمدید اشتراک'
            isFieldSet
            glassMorphism
            icon={<Icon icon='lsicon:work-order-check-outline' />}>
            <Grid
              gridTemplateColumns={"1fr 1fr 1fr 1fr"}
              gap='2rem'
              backgroundColor='var(--app-background-color)'
              borderRadius={"1rem"}
              padding={"2em"}
              responsive={{
                mobile: {
                  gridTemplateColumns: "1fr",
                },
              }}>
              {data.map((subscription) => {
                return (
                  <ServiceCard
                    key={subscription.id}
                    {...subscription}
                  />
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </PageContianer>
  );
}
