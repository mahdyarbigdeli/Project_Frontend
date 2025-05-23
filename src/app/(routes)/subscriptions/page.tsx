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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useViewSize from "@/hooks/useViewSize";
import Slider from "@/components/UI/Slider/Slider";
export default function SubScriptionsPage() {
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

  const { isDesktop, isMobile } = useViewSize();


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
            <Grid
              color='white'
              gridTemplateColumns={"1fr 1fr"}
              responsive={{
                mobile: {
                  gridTemplateColumns: "1fr",
                },
              }}>
              <Grid>
                <Flex
                  center
                  flexDirection='column'>
                  <small>ایمیل : </small>
                  <h3>{user.username}</h3>
                </Flex>
                <Flex
                  center
                  flexDirection='column'>
                  <small>رمزعبور : </small>
                  <h3>{user.password}</h3>
                </Flex>
              </Grid>
              <Grid>
                <Flex
                  center
                  flexDirection='column'>
                  {user.status !== "Active" && (
                    <Button
                      icon={<Icon icon='mynaui:danger-diamond-solid' />}
                      onClick={() => {}}
                      title='اشتراک شما غیرفعال میباشد'
                      variant='danger'
                    />
                  )}
                  {user.status === "Active" && (
                    <Button
                      icon={<Icon icon='nrk:check-active' />}
                      onClick={() => {}}
                      title='اشتراک شما فعال میباشد'
                      variant='success'
                    />
                  )}
                </Flex>
                <Flex
                  center
                  flexDirection='column'>
                  <small>تاریخ اتمام اشتراک : </small>
                  {/* (parseInt(user.exp_date) * 1000) as any) */}
                  <h3>
                    {moment(parseInt(user.exp_date) * 1000).format(
                      "YYYY-MM-DD",
                    )}
                  </h3>
                </Flex>
              </Grid>
            </Grid>
          </Box>
          <Box
            header='خرید / تمدید اشتراک'
            isFieldSet
            glassMorphism
            icon={<Icon icon='lsicon:work-order-check-outline' />}>
            <Grid>
              <Grid
                gridTemplateColumns={"1fr"}
                gap='2rem'
                backgroundColor='var(--app-background-color)'
                borderRadius={"1rem"}
                padding={"2em"}
                responsive={{
                  mobile: {
                    gridTemplateColumns: "1fr",
                  },
                }}>
                <Flex
                  gridColumn={"-1/1"}
                  center
                  color='white'>
                  <p>خرید / تمدید اشتراک</p>
                </Flex>

                <Grid
                  width={"100%"}
                  gridColumn={"-1/1"}
                  display='flex'
                  flexDirection='row-reverse'
                  alignItems="start"
                  gap='1rem'
                  responsive={{
                    mobile: {
                      flexDirection: "column-reverse",
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
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </PageContianer>
  );
}
