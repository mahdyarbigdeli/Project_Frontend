// @ts-ignore

const apiRoutes = {
  auth: {
    login: "/user/auth/",
    register: "/user/create/",
    passwordForgot : "/user/forgot/password",
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
  },
};

export default apiRoutes;
