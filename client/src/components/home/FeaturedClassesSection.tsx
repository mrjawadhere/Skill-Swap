import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { featuredClasses } from "@/lib/data";

export default function FeaturedClassesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-4 md:mb-0">
            Featured Classes
          </h2>
          <p className="text-slate-600">
            Explore Our Featured Classes Expand Your Skills from Anywhere!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClasses.map((classItem) => (
            <Card key={classItem.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary-foreground px-2 py-1 rounded-full">
                  {classItem.category}
                </Badge>
                <h3 className="text-xl font-bold mt-3 mb-2">{classItem.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{classItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={classItem.instructor.avatar} alt={classItem.instructor.name} />
                      <AvatarFallback>{classItem.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium ml-2">{classItem.instructor.name}</span>
                  </div>
                  <span className="text-sm text-accent font-medium">{classItem.rating} ★</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
