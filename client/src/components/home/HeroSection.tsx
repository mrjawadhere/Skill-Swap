import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";

export default function HeroSection() {
  return (
    <section className="bg-white pt-10 pb-16 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-6 leading-tight">
              Exchange Skills Virtually!
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              We believe in the power of collaborative learning and the transformative potential of skill exchange
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#explore">
                <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors">
                  Explore Skills
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-2">
              <AvatarGroup 
                users={[
                  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
                  { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
                  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
                ]} 
                count={90000}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="People collaborating on laptops" 
              className="rounded-lg w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
