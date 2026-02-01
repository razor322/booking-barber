import { Link } from "react-router-dom";
import { Scissors, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-muted/30 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
              Experience the Best Haircut in Town
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
              Classic cuts, modern styles, and premium grooming services.
              Step into Gentleman's Cut and leave looking your absolute best.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/book">Book Your Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Professional Barbers</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our team of master barbers has years of experience in crafting the perfect look for every client.
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Premium Products</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We use only the highest quality grooming products to ensure your hair and skin get the care they deserve.
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Easy Booking</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Schedule your appointment in seconds with our online booking system. No phone calls required.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
