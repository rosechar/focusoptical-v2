const About = () => {
  return (
    <div className="max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          About Focus Optical
        </h1>
        <p className="mt-4 text-lg italic text-gray-600">
          From the owner, Tom Hamilton
        </p>
      </div>

      <div className="mt-12 space-y-8 text-lg leading-relaxed text-gray-800">
        <p>
          Hello, my name is Tom Hamilton. I am an optician and I own and operate
          Focus Optical. I opened the store in 1984. We are a full service
          optical store, with eye examinations performed by Dr. Diane Galper,
          Optometrist.
        </p>

        <div className="rounded-lg bg-gray-50 p-6">
          <p className="font-medium">
            We specialize in making eyeglasses and we also sell contact lenses.
            I have been making eyeglasses since 1977, with over 45 years of
            experience!
          </p>
        </div>

        <p>
          I always treat every pair of eyeglasses I make as if I were making
          them for myself, guaranteeing you the best made pair of eyeglasses you
          have ever owned. I take pride in adjusting your new pair of
          eyeglasses, definitely a lost art!
        </p>

        <div className="rounded-lg bg-red-50 p-6 text-red-900">
          <p className="font-medium">
            I also offer next day service on most prescriptions.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="text-2xl font-semibold text-gray-900">
          Focus Optical
        </div>
        <div className="mt-2 text-gray-600">SINCE 1984</div>
        <address className="mt-4 space-y-1 not-italic text-gray-600">
          <p>2046 W Auburn Rd, Rochester Hills, MI 48309</p>
          <p>(248) 852-8830</p>
        </address>
      </div>
    </div>
  );
};

export default About;
