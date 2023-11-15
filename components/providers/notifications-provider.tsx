"use client";

import { useEffect, useState } from "react";

import Notifications from "../notifications";

export function NotificationsProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Notifications />
    </>
  );
}
