import React, { ReactElement, useEffect, useState } from "react";
import AuthForm from "components/auth/auth-form";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import SignUpForm from "components/auth/signup-form";

export default function Auth(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <SignUpForm />;
}
