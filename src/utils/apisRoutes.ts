// @ts-ignore

const apiRoutes = {
  auth: {
    login: "/user/auth",
    register: "/user/create/",
    passwordForgot: "/user/forgot/password",
    noPass: "/user/no-pass",
    users: {
      list: "/auth/users/",
    },
    userInfo: "/user/info",
    channels: {
      assigine: "/auth/channels/",
    },
  },
  subscriptions: {
    list: "/subscriptions",
    buy: "/subscriptions/buy/{id}",
    createPayment: "/create-payment",
  },
  paypal: {
    create_payment: "/capture-payment",
    create_order: "/paypal/create-order",
  },
};

export default apiRoutes;
