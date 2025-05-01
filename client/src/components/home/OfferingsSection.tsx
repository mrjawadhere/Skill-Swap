export default function OfferingsSection() {
  return (
    <section id="explore" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-12">
          Explore Our<br />Comprehensive Offerings
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Person thinking with question marks" 
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Direct Skill Exchange</h3>
              <p className="text-slate-600">
                Connect with mentors who are passionate about sharing knowledge and helping you achieve your learning goals.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Diverse Skill Categories</h3>
              <p className="text-slate-600">
                Explore a wide range of skills to learn, such as Programming, Culinary Arts, Photography, Languages, and more.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Flexible Learning</h3>
              <p className="text-slate-600">
                Learn at your own pace with flexible lessons that fit your schedule and availability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
              <p className="text-slate-600">
                Join discussion forums and workshops to collaborate with peers, share insights, and expand your network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
