import { ReactNode, Suspense } from "react";
import classes from "./suspense-loading.module.css";

interface PropsInterface {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function SuspenseLoading({
  children,
  fallback,
}: PropsInterface) {
  const defaultFallback = (
    <p className={classes["suspense-loading"]}>Fetchng...</p>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
}
