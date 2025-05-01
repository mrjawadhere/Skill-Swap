import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Users, 
  BarChart, 
  ThumbsUp, 
  MessageCircle, 
  Calendar,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Community() {
  // Sample forum discussions
  const discussions = [
    {
      id: 1,
      title: "Best resources for learning JavaScript in 2025?",
      author: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      category: "Programming",
      replies: 24,
      lastActivity: "2025-05-01T14:30:00",
      excerpt: "I'm looking for recommendations on the best up-to-date resources for learning JavaScript as a beginner in 2025. Any suggestions for online courses, books, or interactive platforms?"
    },
    {
      id: 2,
      title: "Tips for overcoming language learning plateaus",
      author: {
        name: "Maria Gonzalez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      category: "Languages",
      replies: 18,
      lastActivity: "2025-05-01T10:15:00",
      excerpt: "I've been learning French for about a year and feel like I've hit a plateau. Would love to hear from others who have successfully pushed through similar situations."
    },
    {
      id: 3,
      title: "Skill exchange success stories - Share yours!",
      author: {
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
      },
      category: "General",
      replies: 35,
      lastActivity: "2025-04-30T16:45:00",
      excerpt: "Let's create a thread to share our success stories from skill exchanges on the platform! I'll start: I exchanged photography lessons for Spanish tutoring..."
    }
  ];
  
  // Sample community members
  const members = [
    {
      id: 1,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
      skills: ["JavaScript", "React", "Node.js"],
      learning: ["Spanish", "Photography"],
      joinDate: "2025-01-15",
      rating: 4.9,
      reviews: 28
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
      skills: ["Photography", "Adobe Photoshop", "Lightroom"],
      learning: ["JavaScript", "Web Design"],
      joinDate: "2025-02-10",
      rating: 4.8,
      reviews: 32
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
      skills: ["Public Speaking", "Leadership", "Presentation Design"],
      learning: ["Guitar", "Digital Marketing"],
      joinDate: "2025-01-05",
      rating: 4.7,
      reviews: 19
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
      skills: ["Digital Marketing", "SEO", "Social Media Strategy"],
      learning: ["Python", "Data Analysis"],
      joinDate: "2025-03-20",
      rating: 4.9,
      reviews: 24
    }
  ];
  
  // Sample upcoming events
  const events = [
    {
      id: 1,
      title: "Community Mixer - Connect With Fellow Learners",
      date: "2025-05-15T18:00:00",
      attendees: 45,
      location: "Virtual",
      description: "Join us for a casual virtual mixer to meet other members of the SkillSwap community. Share experiences, make connections, and find potential skill exchange partners."
    },
    {
      id: 2,
      title: "Teaching on SkillSwap - Best Practices Workshop",
      date: "2025-05-20T14:00:00",
      attendees: 32,
      location: "Virtual",
      description: "Learn how to create engaging virtual lessons, organize your teaching materials, and provide effective feedback to your students on SkillSwap."
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };

  // Format date and time for display
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    }).format(date);
  };

  // Calculate time ago for forum posts
  const timeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
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
        title="Community" 
        description="Connect with other members, join discussions, and participate in community events."
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <Tabs defaultValue="discussions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          
          {/* Forum Discussions Tab */}
          <TabsContent value="discussions" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search discussions..." 
                  className="pl-10 w-full"
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2">
                <MessageSquare size={16} />
                <span>New Discussion</span>
              </Button>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {discussions.map((discussion) => (
                <motion.div key={discussion.id} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge className="bg-primary/20 text-primary-foreground mb-2">
                            {discussion.category}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">{discussion.title}</h3>
                          <p className="text-slate-600 mb-4 text-sm line-clamp-2">{discussion.excerpt}</p>
                        </div>
                        <div className="flex flex-col items-center bg-slate-100 rounded p-2 min-w-16 text-center">
                          <span className="text-xl font-bold text-accent">{discussion.replies}</span>
                          <span className="text-xs text-slate-600">replies</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                            <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{discussion.author.name}</span>
                        </div>
                        <span className="text-xs text-slate-500">
                          Last reply {timeAgo(discussion.lastActivity)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Community Members Tab */}
          <TabsContent value="members" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Members</h2>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search members..." 
                  className="pl-10"
                />
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {members.map((member) => (
                <motion.div 
                  key={member.id} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow text-center">
                    <CardContent className="p-6 flex flex-col items-center">
                      <Avatar className="h-20 w-20 mb-4 border-2 border-primary/20">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <div className="flex items-center mb-4">
                        <span className="text-accent font-medium">{member.rating}</span>
                        <span className="text-accent ml-1">★</span>
                        <span className="text-xs text-slate-500 ml-1">({member.reviews} reviews)</span>
                      </div>
                      
                      <p className="text-xs text-slate-500 mb-4">Member since {formatDate(member.joinDate)}</p>
                      
                      <div className="mb-4 w-full">
                        <p className="text-sm font-medium mb-1">Skills</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary-foreground">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4 w-full">
                        <p className="text-sm font-medium mb-1">Learning</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.learning.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-white">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Community Events Tab */}
          <TabsContent value="events" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Community Events</h2>
              <Button className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2">
                <Calendar size={16} />
                <span>View All Events</span>
              </Button>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.map((event) => (
                <motion.div 
                  key={event.id} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-all border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                      <p className="text-slate-600 mb-6">{event.description}</p>
                      
                      <div className="flex items-center text-slate-700 mb-3">
                        <Calendar size={18} className="mr-2 text-primary" />
                        <span>{formatDateTime(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center text-slate-700 mb-6">
                        <Users size={18} className="mr-2 text-primary" />
                        <span>{event.attendees} people attending</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">Add to Calendar</Button>
                        <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">
                          RSVP Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Community Stats */}
            <motion.div 
              className="mt-10 pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Community Stats</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-primary/5">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Active Members</p>
                      <p className="text-3xl font-bold">12,453</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <BarChart size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Skills Exchanged</p>
                      <p className="text-3xl font-bold">8,729</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <ThumbsUp size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Satisfaction Rate</p>
                      <p className="text-3xl font-bold">97%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}