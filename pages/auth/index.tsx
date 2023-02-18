import React, { ReactElement, useEffect, useState } from "react";
import AuthForm from "components/auth/auth-form";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import LoadingSpinner from "components/common/loading-spinner";

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
    return <LoadingSpinner />;
  }

  return <AuthForm />;
}
