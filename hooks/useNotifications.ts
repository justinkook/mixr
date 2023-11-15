import { create } from "zustand";

type Notification = {
  id: string;
  title: string;
  description: string;
  type: "success" | "error" | "warning" | "info";
};

interface NotificationsStore {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  notification: Notification[];
}

const useNotifications = create<NotificationsStore>((set) => ({
  isOpen: false,
  onOpenChange: (open: boolean) => set({ isOpen: open }),
  onClose: () => set({ isOpen: false }),
  notification: [],
}));

export default useNotifications;
