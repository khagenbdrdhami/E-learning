import React from "react";
import i from "../../assets/i.png";
import p from "../../assets/p.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import bg from "../../assets/bg.png";
function Three() {
  return (
    <div className=" w-full my-7">
      {/* Top Image Section */}
      <div className=" flex overflow-hidden justify-center flex-col">
        <div>
          <img
            src={i}
            alt="Team Success"
            className="w-full h-[626px] object-cover"
          />
        </div>
        
        <div className=" flex flex-col -mt-6 space-y-5  text-center items-center ">
          <h2 className="text-2xl font-semibold px-6 py-1 bg-[#e4e4e4] rounded-2xl max-w-fit">
            Success Stories
          </h2>

          <p className=" text-gray-600">
            From a small team to a global platform
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className=" mt-10 py-12">
        <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-20">
          {/* Card 1 */}
          <div className="bg-white w-[250px]  rounded-2xl shadow  text-center">
            <div className="flex flex-col relative justify-center items-center ">
              <img
                src={p}
                alt="James Smith"
                className="w-24 h-24 -mt-24 rounded-full absolute border-4 border-white shadow"
              />
              <img src={bg}
              className="w-full"
               alt="" />
            </div>
           <div className="text-left p-7">
             <h3 className="mt-4 text-lg font-bold text-blue-800">
              James Smith
            </h3>
            <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est enim nesciunt veniam. Modi quasi alias dolores obcaecati officiis nobis necessitatibus rem! Placeat maxime voluptatum quidem, illum eius veritatis repellat recusandae.
            </p>
           </div>
          </div>
          <div className="bg-white w-[250px]  rounded-2xl shadow  text-center">
            <div className="flex flex-col relative justify-center items-center ">
              <img
                src={p2}
                alt="James Smith"
                className="w-24 h-24 -mt-24 rounded-full absolute border-4 border-white shadow"
              />
              <img src={bg}
              className="w-full"
               alt="" />
            </div>
           <div className="text-left p-7">
             <h3 className="mt-4 text-lg font-bold text-blue-800">
              James White
            </h3>
            <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est enim nesciunt veniam. Modi quasi alias dolores obcaecati officiis nobis necessitatibus rem! Placeat maxime voluptatum quidem, illum eius veritatis repellat recusandae.
            </p>
           </div>
          </div>
          <div className="bg-white w-[250px]  rounded-2xl shadow  text-center">
            <div className="flex flex-col relative justify-center items-center ">
              <img
                src={p3}
                alt="James Smith"
                className="w-24 h-24 -mt-24 rounded-full absolute border-4 border-white shadow"
              />
              <img src={bg}
              className="w-full"
               alt="" />
            </div>
           <div className="text-left p-7">
             <h3 className="mt-4 text-lg font-bold text-blue-800">
              Nancy Smith
            </h3>
            <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est enim nesciunt veniam. Modi quasi alias dolores obcaecati officiis nobis necessitatibus rem! Placeat maxime voluptatum quidem, illum eius veritatis repellat recusandae.
            </p>
           </div>
          </div>

        </div>
          
      </div>
    </div>
  );
}

export default Three;
