import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Clock, Plus, PenLine, Users, UserPlus } from "lucide-react";

export default function MySkills() {
  // Sample data for skills I'm teaching
  const teachingSkills = [
    {
      id: 1,
      title: "Introduction to React",
      category: "Programming",
      students: 5,
      nextSession: "2025-05-10T14:00:00",
      description: "A beginner-friendly introduction to React, covering components, props, state, and hooks."
    },
    {
      id: 2,
      title: "Digital Marketing Basics",
      category: "Marketing",
      students: 3,
      nextSession: "2025-05-12T18:30:00",
      description: "Learn the fundamentals of digital marketing, including SEO, email marketing, and social media strategy."
    }
  ];
  
  // Sample data for skills I'm learning
  const learningSkills = [
    {
      id: 1,
      title: "Spanish Conversation",
      category: "Languages",
      level: "Intermediate",
      instructor: {
        name: "Maria Gonzalez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      nextSession: "2025-05-09T17:00:00",
      description: "Practice Spanish conversation skills with a native speaker, focusing on everyday vocabulary and expressions."
    },
    {
      id: 2,
      title: "Watercolor Painting",
      category: "Art",
      level: "Beginner",
      instructor: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      nextSession: "2025-05-15T10:00:00",
      description: "Introduction to watercolor painting techniques, including color mixing, brush techniques, and composition."
    },
    {
      id: 3,
      title: "Photography Composition",
      category: "Photography",
      level: "Intermediate",
      instructor: {
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      nextSession: "2025-05-11T15:00:00",
      description: "Learn advanced composition techniques to improve your photography, including the rule of thirds, leading lines, and framing."
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
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

  return (
    <div className="pt-20 min-h-screen pb-16">
      <PageHeader 
        title="My Skills" 
        description="Manage the skills you're teaching and track your learning progress."
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <Tabs defaultValue="learning" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="learning">Skills I'm Learning</TabsTrigger>
            <TabsTrigger value="teaching">Skills I'm Teaching</TabsTrigger>
          </TabsList>
          
          <TabsContent value="learning" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Skills I'm Learning</h2>
              <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2">
                <UserPlus size={16} />
                <span>Join New Class</span>
              </Button>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {learningSkills.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="bg-primary/20 text-primary-foreground mb-2">
                        {skill.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm">{skill.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={skill.instructor.avatar} alt={skill.instructor.name} />
                          <AvatarFallback>{skill.instructor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{skill.instructor.name}</p>
                          <p className="text-xs text-slate-500">Instructor</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-slate-600 text-sm mb-4">
                        <CalendarIcon size={16} className="mr-2" />
                        <span>Next session: {formatDate(skill.nextSession)}</span>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" className="flex-1">Cancel</Button>
                        <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">Join Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="teaching" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Skills I'm Teaching</h2>
              <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2">
                <Plus size={16} />
                <span>Offer New Skill</span>
              </Button>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teachingSkills.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="bg-primary/20 text-primary-foreground mb-2">
                        {skill.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm">{skill.description}</p>
                      
                      <div className="flex items-center text-slate-600 text-sm mb-2">
                        <Users size={16} className="mr-2" />
                        <span>{skill.students} enrolled students</span>
                      </div>
                      
                      <div className="flex items-center text-slate-600 text-sm mb-4">
                        <Clock size={16} className="mr-2" />
                        <span>Next session: {formatDate(skill.nextSession)}</span>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" className="flex-1 flex items-center justify-center gap-1">
                          <PenLine size={16} />
                          <span>Edit</span>
                        </Button>
                        <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">Start Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}