export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your personal profile with skills you want to share and skills you want to learn."
    },
    {
      number: "02",
      title: "Find Skills to Learn",
      description: "Browse our extensive catalog of skills offered by community members."
    },
    {
      number: "03",
      title: "Connect and Learn",
      description: "Schedule virtual sessions with skill providers through our platform."
    },
    {
      number: "04",
      title: "Exchange Knowledge",
      description: "Share your expertise with others while learning new skills yourself."
    },
    {
      number: "05",
      title: "Review and Improve",
      description: "Provide feedback to help community members enhance their teaching."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-12">
          How Does It Work?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
                <div className="bg-accent text-white h-8 w-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="People collaborating in a workshop setting" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
