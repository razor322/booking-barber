export type BookingField = {
  id: string;
  userId: string;
  capsterId: string;
  packageId: string;
  addons: string[];
  scheduledAt: string;
  time: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  createdAt: string;
  totalPrice: number;
};
