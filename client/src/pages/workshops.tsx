import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Users, MapPin, Clock } from "lucide-react";
import { AvatarGroup } from "@/components/ui/avatar-group";

export default function Workshops() {
  // Sample workshops data
  const workshops = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Programming",
      date: "2025-05-20T09:00:00",
      duration: "3 hours",
      location: "Virtual",
      instructor: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      participants: [
        { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
      ],
      participantCount: 15,
      featured: true,
      description: "Build and deploy a full-stack web application in this intensive workshop. You'll learn HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      category: "Marketing",
      date: "2025-05-25T14:00:00",
      duration: "2 hours",
      location: "Virtual",
      instructor: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      participants: [
        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
      ],
      participantCount: 12,
      featured: false,
      description: "Learn effective digital marketing strategies to grow your business or personal brand across multiple platforms."
    },
    {
      id: 3,
      title: "iPhone Photography Workshop",
      category: "Photography",
      date: "2025-06-05T10:00:00",
      duration: "4 hours",
      location: "Virtual",
      instructor: {
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      participants: [
        { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
      ],
      participantCount: 20,
      featured: true,
      description: "Master iPhone photography with tips on composition, lighting, editing apps, and creating professional-quality images with your smartphone."
    },
    {
      id: 4,
      title: "Public Speaking Masterclass",
      category: "Personal Development",
      date: "2025-06-10T18:00:00",
      duration: "2 hours",
      location: "Virtual",
      instructor: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      participants: [
        { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
        { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
      ],
      participantCount: 18,
      featured: false,
      description: "Overcome fear of public speaking and learn techniques to deliver compelling presentations in any setting."
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    }).format(date);
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    }).format(date);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Split workshops into featured and regular
  const featuredWorkshops = workshops.filter(workshop => workshop.featured);
  const regularWorkshops = workshops.filter(workshop => !workshop.featured);

  return (
    <div className="pt-20 min-h-screen pb-16">
      <PageHeader 
        title="Upcoming Workshops" 
        description="Join interactive group sessions led by expert instructors to deepen your knowledge and connect with peers."
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        {/* Featured Workshops */}
        {featuredWorkshops.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-accent">★</span>
              <span className="ml-2">Featured Workshops</span>
            </h2>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {featuredWorkshops.map((workshop) => (
                <motion.div 
                  key={workshop.id} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all border-accent/20 relative">
                    <div className="absolute top-0 right-0 bg-accent text-white py-1 px-3 text-xs font-bold rounded-bl">
                      Featured
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-primary/20 text-primary-foreground mb-2">
                        {workshop.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3">{workshop.title}</h3>
                      <p className="text-slate-600 mb-4">{workshop.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-slate-600">
                          <CalendarIcon size={16} className="mr-2" />
                          <span className="text-sm">{formatDate(workshop.date)}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Clock size={16} className="mr-2" />
                          <span className="text-sm">{formatTime(workshop.date)} ({workshop.duration})</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{workshop.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Users size={16} className="mr-2" />
                          <span className="text-sm">{workshop.participantCount} participants</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-2 border-2 border-white shadow-sm">
                            <AvatarImage src={workshop.instructor.avatar} alt={workshop.instructor.name} />
                            <AvatarFallback>{workshop.instructor.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{workshop.instructor.name}</p>
                            <p className="text-xs text-slate-500">Workshop Leader</p>
                          </div>
                        </div>
                        
                        <AvatarGroup 
                          users={workshop.participants} 
                          count={workshop.participantCount}
                          max={3}
                        />
                      </div>
                      
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {/* All Workshops */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Workshops</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {regularWorkshops.map((workshop) => (
              <motion.div 
                key={workshop.id} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="bg-primary/20 text-primary-foreground mb-2">
                      {workshop.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm">{workshop.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center text-slate-600 text-sm">
                        <CalendarIcon size={16} className="mr-2" />
                        <span>{formatDate(workshop.date)}</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-sm">
                        <Clock size={16} className="mr-2" />
                        <span>{formatTime(workshop.date)}</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-sm">
                        <MapPin size={16} className="mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={workshop.instructor.avatar} alt={workshop.instructor.name} />
                          <AvatarFallback>{workshop.instructor.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{workshop.instructor.name}</span>
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {workshop.participantCount} enrolled
                      </Badge>
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}