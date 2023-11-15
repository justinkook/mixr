import { create } from "zustand";

interface CommandModalStore {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

const useCommandModal = create<CommandModalStore>((set) => ({
  isOpen: false,
  onOpenChange: (open: boolean) => set({ isOpen: open }),
  onClose: () => set({ isOpen: false }),
}));

export default useCommandModal;
