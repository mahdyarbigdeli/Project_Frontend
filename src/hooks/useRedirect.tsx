import { useRouter } from "next/navigation";

export default function useRedirect() {
  const navigator = useRouter().push;

  return {
    PUBLIC: {
      GoHome: () => navigator("/"),
    },
    AUTH: {
      GoLogin: () => navigator("/auth/login"),
      GoRegister: () => navigator("/auth/register"),
      GoPasswordForgotten: () => navigator("/auth/password-forgotten"),
    },
    SUBSCRIPTIONS: {
      GoServices: () => navigator("/subscriptions/"),
    },
  };
}
