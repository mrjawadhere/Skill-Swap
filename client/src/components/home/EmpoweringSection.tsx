import { Button } from "@/components/ui/button";

export default function EmpoweringSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Hands holding paper cutouts" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-6">
              Empowering Connections<br />On Our Virtual Skills Exchange Platform
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Welcome to Our Community! Our platform is designed to connect individuals worldwide who are passionate about expanding their knowledge, sharing their expertise, and learning from others in a supportive community environment.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
