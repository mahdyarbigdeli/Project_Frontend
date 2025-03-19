import Button from "@/components/UI/Button/Button";
import Flex from "@/components/UI/Flex/Flex";
import Grid from "@/components/UI/Grid/Grid";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "./styles.module.scss";
import { ISubscirption } from "@/types/subscription.types";
import { useMutation } from "react-query";
import { BuySubscriptionAPI, CreatePaymentAPI } from "@/services/subscriptions/subscriptions.services";
import useGlobalStates from "@/@redux/hooks/useGlobalStates";

interface IProps extends ISubscirption {}

export default function ServiceCard(props: IProps) {
  const { user } = useGlobalStates();

  const {
    created_at,
    end_date,
    id,
    name,
    paypal_subscription_id,
    price,
    start_date,
    updated_at,
    user_id,
    name_en,
  } = props;

  const {
    isLoading,
    error,
    mutate: CreatePaymentMutate,
  } = useMutation({
    mutationFn: CreatePaymentAPI,
    onSuccess(data: any, variables, context) {
      const { redirect_url } = data;
      window.location.assign(redirect_url);
    },
  });

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.subscription}>{name_en}</p>

      <h2 className={styles.price}>
        <span> {price}</span>
        <small>$</small>
      </h2>

      <Button
        icon={<Icon icon='icon-park-solid:buy' />}
        onClick={() => {
          CreatePaymentMutate({
            username: user.username,
            id: id,
          });
        }}
        title='خرید اشتراک'
        variant='danger'
        isLoading={isLoading}
      />

      <img
        className={styles.paypal}
        src='/images/payments/paypal.png'
      />
    </div>
  );
}
