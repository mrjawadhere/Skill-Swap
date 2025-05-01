import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ExploreSkills() {
  // Sample skill categories
  const categories = [
    "Programming", "Design", "Marketing", "Languages", 
    "Music", "Cooking", "Photography", "Business"
  ];
  
  // Sample skills (in real app, these would come from an API)
  const skills = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "Programming",
      level: "Beginner",
      instructor: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Weekends",
      description: "Learn the basics of JavaScript programming, including variables, functions, and DOM manipulation."
    },
    {
      id: 2,
      title: "Digital Photography",
      category: "Photography",
      level: "Intermediate",
      instructor: {
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Weekday Evenings",
      description: "Improve your photography skills with lessons on composition, lighting, and post-processing techniques."
    },
    {
      id: 3,
      title: "French Conversation",
      category: "Languages",
      level: "Advanced",
      instructor: {
        name: "Jean Dupont",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Flexible",
      description: "Practice advanced French conversation with a native speaker, focusing on idioms and cultural nuances."
    },
    {
      id: 4,
      title: "Italian Cuisine",
      category: "Cooking",
      level: "Beginner",
      instructor: {
        name: "Giulia Romano",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Weekends",
      description: "Learn to prepare authentic Italian dishes from scratch, including pasta, risotto, and classic desserts."
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      category: "Design",
      level: "Intermediate",
      instructor: {
        name: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Weekday Evenings",
      description: "Discover the principles of effective user interface and user experience design for digital products."
    },
    {
      id: 6,
      title: "Social Media Marketing",
      category: "Marketing",
      level: "Beginner",
      instructor: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      availability: "Flexible",
      description: "Learn strategies for effective social media marketing across major platforms to grow your audience."
    }
  ];

  // Animation variants for staggered list
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
        title="Explore Skills" 
        description="Discover a wide range of skills taught by our community members and find the perfect match for your learning journey."
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for skills..." 
                className="pl-10 w-full"
              />
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Search
            </Button>
          </div>
          
          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="cursor-pointer hover:bg-accent hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-primary/20 text-primary-foreground mb-2">
                        {skill.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    </div>
                    <Badge variant="outline" className="ml-2">{skill.level}</Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-4 text-sm">{skill.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={skill.instructor.avatar} alt={skill.instructor.name} />
                        <AvatarFallback>{skill.instructor.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{skill.instructor.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {skill.availability}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}