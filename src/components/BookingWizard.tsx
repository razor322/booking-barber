import * as React from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, User, Scissors, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Dummy Data
const services = [
  {
    id: "classic-haircut",
    title: "Classic Haircut",
    description: "A traditional haircut with scissors and clippers.",
    price: "$30",
    duration: "30 min",
  },
  {
    id: "beard-trim",
    title: "Beard Trim",
    description: "Shape and trim your beard to perfection.",
    price: "$20",
    duration: "20 min",
  },
  {
    id: "full-package",
    title: "Full Package",
    description: "Haircut, beard trim, and a relaxing hot towel shave.",
    price: "$55",
    duration: "60 min",
  },
  {
    id: "buzz-cut",
    title: "Buzz Cut",
    description: "Simple, clean, and low maintenance.",
    price: "$25",
    duration: "20 min",
  },
];

const barbers = [
  {
    id: "mike",
    name: "Mike 'The Blade'",
    role: "Master Barber",
    avatar: "https://i.pravatar.cc/150?u=mike",
  },
  {
    id: "sarah",
    name: "Sarah Sniops",
    role: "Stylist",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "john",
    name: "John Doe",
    role: "Junior Barber",
    avatar: "https://i.pravatar.cc/150?u=john",
  },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];

interface BookingState {
  serviceId: string | null;
  barberId: string | null;
  date: Date | undefined;
  time: string | null;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export default function BookingWizard() {
  const [step, setStep] = React.useState(1);
  const [direction, setDirection] = React.useState(0);
  const [booking, setBooking] = React.useState<BookingState>({
    serviceId: null,
    barberId: null,
    date: undefined,
    time: null,
  });

  const nextStep = () => {
    if (step < 4) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const updateBooking = (field: keyof BookingState, value: any) => {
    setBooking((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!booking.serviceId;
      case 2:
        return !!booking.barberId;
      case 3:
        return !!booking.date && !!booking.time;
      default:
        return true;
    }
  };

  const selectedService = services.find((s) => s.id === booking.serviceId);
  const selectedBarber = barbers.find((b) => b.id === booking.barberId);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2">Book Your Appointment</h1>
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-16 rounded-full transition-all duration-300",
                step >= i ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-2">
          Step {step} of 4: {step === 1 ? "Select Service" : step === 2 ? "Select Barber" : step === 3 ? "Date & Time" : "Confirm"}
        </p>
      </div>

      <div className="relative overflow-hidden min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={cn(
                      "cursor-pointer transition-all hover:border-primary",
                      booking.serviceId === service.id ? "border-primary ring-2 ring-primary ring-offset-2" : ""
                    )}
                    onClick={() => updateBooking("serviceId", service.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        {service.title}
                        <span className="text-primary">{service.price}</span>
                      </CardTitle>
                      <CardDescription>{service.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Step 2: Select Barber */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {barbers.map((barber) => (
                  <Card
                    key={barber.id}
                    className={cn(
                      "cursor-pointer transition-all hover:border-primary flex flex-col items-center p-6 text-center",
                      booking.barberId === barber.id ? "border-primary ring-2 ring-primary ring-offset-2" : ""
                    )}
                    onClick={() => updateBooking("barberId", barber.id)}
                  >
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={barber.avatar} alt={barber.name} />
                      <AvatarFallback>{barber.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{barber.name}</h3>
                    <p className="text-sm text-muted-foreground">{barber.role}</p>
                  </Card>
                ))}
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex justify-center md:justify-end">
                  <Calendar
                    mode="single"
                    selected={booking.date}
                    onSelect={(date) => updateBooking("date", date)}
                    className="rounded-md border shadow"
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-4 text-center md:text-left">Select Time</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={booking.time === time ? "default" : "outline"}
                        className={cn(
                          "w-full",
                          booking.time === time ? "" : "hover:border-primary"
                        )}
                        onClick={() => updateBooking("time", time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {!booking.date && (
                    <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">
                      Please select a date first.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                  <CardDescription>Please review your appointment details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Scissors className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">Service</p>
                      <p className="text-sm text-muted-foreground">{selectedService?.title}</p>
                    </div>
                    <p className="font-semibold">{selectedService?.price}</p>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">Barber</p>
                      <p className="text-sm text-muted-foreground">{selectedBarber?.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">
                        {booking.date ? format(booking.date, "PPP") : "Not selected"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">{booking.time || "Not selected"}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                   {/* This button will be handled by the main navigation below,
                       but we could add a specific confirm action here if needed.
                       For now, the 'Confirm Booking' is the 'Next' button action on the last step.
                   */}
                </CardFooter>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8 pt-4 border-t">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        {step < 4 ? (
          <Button onClick={nextStep} disabled={!isStepValid()}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={() => alert("Booking Confirmed! (This is a demo)")}>
            Confirm Booking <Check className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
