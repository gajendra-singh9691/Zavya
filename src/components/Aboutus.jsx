
const AboutSection = () => {
    const data = [
        {
            image : 'https://www.zavya.co/cdn/shop/files/ethos.png?v=1670310791',
            heading : 'Our Ethos',
            p1 : 'You yourself, as much as anybody in the entire universe, deserve your love and affection." - Gautam Buddha',
            p2 : 'Inspired by this virtue, we believe there is a need to bring a mindset shift amongst Indian women who rely on and seek validation from others rather than being self-loving and self-confident about their capabilities and achievements.',
            p3 : 'We trust that every individual can undertake the journey of self-love by pausing to congratulate and reward oneself for small victories. Over time these small successes compound to elevate your self-confidence.'
        },
        {
            image : 'https://www.zavya.co/cdn/shop/files/brand.png?v=1670310783',
            heading : 'Our Brand',
            p1 : 'Zavya is your constant, your reflection, your moment in the sun. Every day.',
            p2 : 'At Zavya, we aspire to be your constant, your forever partner in your journey to love yourself and own the room wherever you are. We dream to become a symbol and a reminder of your achievements across all aspects of life – be it work, relationships, friendships, health, finances, hobbies.',
            p3 : ''
        },
        {
            image : 'https://www.zavya.co/cdn/shop/files/WhatsApp_Image_2024-04-30_at_11.16.10_e3ce16a5.jpg?v=1714481616',
            heading : 'About the Founders',
            p1 : 'Poem Kabra is your ultimate girlboss from IIT-Delhi, IIM-Lucknow background. Having handled a successful start-up before, Poem always strives for the balance between a successful brand and one that inherently connects with its audience.',
            p2 : 'Ravi Malani is a graduate of IIT Kharagpur and has been working in the e-commerce industry for the past 11 years. Ravi is highly skilled in navigating the dynamic landscape of this industry, has a strong belief in creating the largest fine jewelry brand in India and is fully committed to achieving this goal.',
            p3 : ''
        },
    ]
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
            data.map((data,index)=>{
                return <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6">
          <div className="w-full flex justify-center mb-4">
            {/* IMAGE - Replace src with your image path */}
            <img
              src={data.image}
              alt={data.heading}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{data.heading}</h2>
          <p className="text-sm italic mb-2 text-gray-700">
            {data.p1}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            {data.p2}
          </p>
          <p className="text-gray-600 text-sm">
            {data.p3}
          </p>
        </div>
            })
        }
      </div>
    </section>
  );
};

export default AboutSection;
