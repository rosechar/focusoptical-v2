export default function WhatMakesUsDifferent() {
  const differentiators = [
    {
      title: "Attention to Detail",
      content:
        "We ensure every detail is perfect, from frame fitting to lens prescriptions.",
    },
    {
      title: "Cut & Edge on Premise",
      content:
        "All lens cutting and edging is done in-house for quality control and faster service.",
    },
    {
      title: "No Sales Pressure",
      content:
        "We focus on finding the perfect solution for you, not pushing sales.",
    },
    {
      title: "Free Adjustments",
      content: "Complimentary adjustments for the lifetime of your frames.",
    },
  ];

  return (
    <div className="flex flex-col text-white py-12 justify-center items-center">
      <div className="mx-4">
        <h2 className="text-3xl text-center mb-8">WHAT MAKES US DIFFERENT</h2>
        <div className="max-w-2xl ">
          <div className="space-y-4">
            {differentiators.map((item, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 border-b border-gray-700">
                  <span className="text-lg">{item.title}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <div className="p-4 text-gray-300">{item.content}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
