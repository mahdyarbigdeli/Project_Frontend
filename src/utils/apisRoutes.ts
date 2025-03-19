// @ts-ignore

const apiRoutes = {
  auth: {
    login: "/user/auth/",
    register: "/user/create/",
    passwordForgot: "/user/forgot/password",
    users: {
      list: "/auth/users/",
    },
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
    capturePayment: "/capture-payment",
  },
};

export default apiRoutes;
