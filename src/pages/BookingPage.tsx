import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingWizard from "@/components/BookingWizard";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <BookingWizard />
    </div>
  );
}
