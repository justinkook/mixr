"use client";

import { useEffect, useState } from "react";

import { CommandModal } from "@/components/modals/command-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CommandModal />
    </>
  );
}
