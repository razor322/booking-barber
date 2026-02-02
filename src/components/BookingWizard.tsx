import * as React from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, Scissors, ChevronLeft, ChevronRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Dummy Data
const services = [
  {
    id: "classic-haircut",
    title: "Classic Haircut",
    description: "A traditional haircut with scissors and clippers.",
    price: "$30",
    duration: "30 min",
    badge: "Popular",
  },
  {
    id: "beard-trim",
    title: "Beard Trim",
    description: "Shape and trim your beard to perfection.",
    price: "$20",
    duration: "20 min",
    badge: null,
  },
  {
    id: "full-package",
    title: "Full Package",
    description: "Haircut, beard trim, and a relaxing hot towel shave.",
    price: "$55",
    duration: "60 min",
    badge: "New",
  },
  {
    id: "buzz-cut",
    title: "Buzz Cut",
    description: "Simple, clean, and low maintenance.",
    price: "$25",
    duration: "20 min",
    badge: null,
  },
];

const barbers = [
  {
    id: "mike",
    name: "Mike 'The Blade'",
    role: "Master Barber",
    avatar: "https://i.pravatar.cc/150?u=mike",
    available: true,
  },
  {
    id: "sarah",
    name: "Sarah Sniops",
    role: "Stylist",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    available: true,
  },
  {
    id: "john",
    name: "John Doe",
    role: "Junior Barber",
    avatar: "https://i.pravatar.cc/150?u=john",
    available: false,
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
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white/80 backdrop-blur-md border border-blue-100 shadow-2xl rounded-3xl p-6 md:p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-4 text-slate-900">Book Your Appointment</h1>
        <div className="flex justify-center items-center space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                "h-2.5 w-16 rounded-full transition-all duration-300",
                step >= i ? "bg-blue-600" : "bg-slate-200"
              )}
            />
          ))}
        </div>
        <p className="text-center text-slate-500 mt-4 font-medium">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => {
                    const isSelected = booking.serviceId === service.id;
                    return (
                        <div
                            key={service.id}
                            className={cn(
                            "cursor-pointer relative rounded-2xl p-6 border transition-all duration-200 bg-white",
                            isSelected
                                ? "border-blue-600 shadow-lg shadow-blue-100 ring-1 ring-blue-600"
                                : "border-slate-200 hover:border-blue-300 hover:shadow-md"
                            )}
                            onClick={() => updateBooking("serviceId", service.id)}
                        >
                            {isSelected && (
                                <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-1">
                                    <Check className="w-4 h-4" />
                                </div>
                            )}
                            <div className="flex justify-between items-start mb-4">
                                {service.badge ? (
                                    <Badge variant={service.badge === 'Popular' ? 'default' : 'secondary'}>{service.badge}</Badge>
                                ) : <div className="h-6" />}
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-1">{service.title}</h3>
                            <p className="text-slate-500 text-sm mb-4">{service.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="font-bold text-blue-600 text-xl">{service.price}</span>
                                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {service.duration}
                                </span>
                            </div>
                        </div>
                    )
                })}
              </div>
            )}

            {/* Step 2: Select Barber */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {barbers.map((barber) => {
                   const isSelected = booking.barberId === barber.id;
                   return (
                    <div
                        key={barber.id}
                        className={cn(
                        "cursor-pointer relative flex flex-col items-center p-8 rounded-2xl border transition-all duration-200 bg-white group",
                        isSelected
                            ? "border-blue-600 shadow-xl shadow-blue-100 bg-blue-50/30"
                            : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
                        )}
                        onClick={() => updateBooking("barberId", barber.id)}
                    >
                         {isSelected && (
                                <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-1 z-10">
                                    <Check className="w-4 h-4" />
                                </div>
                        )}
                        <div className="relative mb-6">
                            <Avatar className="w-32 h-32 ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <AvatarImage src={barber.avatar} alt={barber.name} />
                                <AvatarFallback>{barber.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className={cn(
                                "absolute bottom-1 right-1 w-6 h-6 rounded-full border-4 border-white",
                                barber.available ? "bg-green-500" : "bg-slate-300"
                            )} />
                        </div>

                        <h3 className="font-bold text-xl text-slate-900 mb-1">{barber.name}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-2">{barber.role}</p>
                        <div className="flex items-center gap-1">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="p-4 border border-slate-200 rounded-2xl bg-white shadow-sm h-full flex items-center justify-center">
                    <Calendar
                        mode="single"
                        selected={booking.date}
                        onSelect={(date) => updateBooking("date", date)}
                        className="rounded-md"
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" /> Available Slots
                  </h3>
                  {booking.date ? (
                      <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[350px] pr-2">
                        {timeSlots.map((time) => (
                        <Button
                            key={time}
                            variant={booking.time === time ? "default" : "outline"}
                            className={cn(
                            "w-full h-12 text-sm font-medium transition-all",
                            booking.time === time
                                ? "bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200"
                                : "hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                            )}
                            onClick={() => updateBooking("time", time)}
                        >
                            {time}
                        </Button>
                        ))}
                    </div>
                  ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                          <CalendarIcon className="w-12 h-12 mb-2 opacity-50" />
                          <p>Select a date to view times</p>
                      </div>
                  )}

                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <Card className="max-w-2xl mx-auto border-slate-200 shadow-lg">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                  <CardTitle className="text-xl">Booking Summary</CardTitle>
                  <CardDescription>Please review your appointment details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Scissors className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">Service</p>
                      <p className="text-sm text-slate-500">{selectedService?.title}</p>
                    </div>
                    <p className="font-bold text-slate-900">{selectedService?.price}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                            <AvatarImage src={selectedBarber?.avatar} />
                            <AvatarFallback>{selectedBarber?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">Barber</p>
                      <p className="text-sm text-slate-500">{selectedBarber?.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <CalendarIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">Date & Time</p>
                      <p className="text-sm text-slate-500">
                        {booking.date ? format(booking.date, "PPP") : "Not selected"} at {booking.time || "Not selected"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
        <Button
          variant="ghost"
          onClick={prevStep}
          disabled={step === 1}
          className="text-slate-500 hover:text-slate-900"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        {step < 4 ? (
          <Button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg shadow-blue-200"
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={() => alert("Booking Confirmed! (This is a demo)")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 shadow-lg shadow-green-200"
          >
            Confirm Booking <Check className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      </div>
    </div>
  );
}
