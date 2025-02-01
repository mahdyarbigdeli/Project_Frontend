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
    },
<<<<<<< HEAD
    SUBSCRIPTIONS: {
      GoServices: () => navigator("/subscriptions/"),
=======
    SERVICES: {
      GoServices: () => navigator("/services/"),
>>>>>>> origin/main
    },
  };
}
