import React, { ReactElement, useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import SignUpForm from "components/auth/signup-form";
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

  return <SignUpForm />;
}
