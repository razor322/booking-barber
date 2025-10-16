import Breadcrumbs from "@/components/common/Breadcumb";
import { BookingForm } from "@/components/specifics/booking/CreateForm";

export default function BookingPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Booking", href: "/booking", active: true },
        ]}
      />
      <h1>Pilih Layanan Anda</h1>
      <BookingForm />
    </main>
  );
}
