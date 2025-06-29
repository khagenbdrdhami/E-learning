import React from "react";
import learningImg from "../../assets/h.png"; // Update with correct path

function Two() {
  return (
    <div className=" px-6 mt-20 py-12 ">
      {/* Mission */}
      <div className=" px-25 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mission</h2>
        <p className="border-l-4 w-[600px] border-yellow-400 pl-4 text-gray-700 leading-relaxed">
          To empower individuals through accessible, high-quality education that
          fosters personal growth, professional development, and lifelong
          learning. We aim to break barriers to education by delivering
          innovative, engaging, and practical learning experiences to learners
          worldwide.
        </p>
      </div>

      {/* Vision & Image Section */}
      <div className=" px-25 flex gap-16 ">
        <img
          src={learningImg}
          alt="Learning"
          className=" w-[528px] h-[337px] rounded-lg shadow-md object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="border-l-4 border-yellow-400 pl-4 text-gray-700 leading-relaxed">
            To be a global leader in e-learning, transforming lives by making
            education universally available, bridging the gap between knowledge
            and opportunity, and nurturing a community of empowered, skilled,
            and confident individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Two;
