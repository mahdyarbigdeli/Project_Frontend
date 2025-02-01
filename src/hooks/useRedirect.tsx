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
<<<<<<< HEAD
    SUBSCRIPTIONS: {
      GoServices: () => navigator("/subscriptions/"),
=======
    SERVICES: {
      GoServices: () => navigator("/services/"),
>>>>>>> origin/main
=======
    SERVICES: {
      GoServices: () => navigator("/services/"),
>>>>>>> origin/main
    },
  };
}
