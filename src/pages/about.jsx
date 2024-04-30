import React from "react";

const About = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">My Website</div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">Welcome to My About Page</h1>
        <p className="mt-4 text-lg">Explore our amazing features</p>
      </div>

      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <div className="flex justify-center">
          <div className="max-w-xs bg-white shadow-lg p-4 rounded-lg mx-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Card 1</h2>
            <p className="text-gray-500 mb-2">April 30, 2024</p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae justo id mauris placerat malesuada. Vestibulum vitae lacus
              auctor, consequat libero vel, fermentum justo. Aliquam erat
              volutpat. Sed nec commodo nulla. Nullam efficitur condimentum elit
              ac bibendum.
            </p>
          </div>
          <div className="max-w-xs bg-white shadow-lg p-4 rounded-lg mx-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Card 2</h2>
            <p className="text-gray-500 mb-2">April 30, 2024</p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae justo id mauris placerat malesuada. Vestibulum vitae lacus
              auctor, consequat libero vel, fermentum justo. Aliquam erat
              volutpat. Sed nec commodo nulla. Nullam efficitur condimentum elit
              ac bibendum.
            </p>
          </div>
          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg p-4 rounded-lg mx-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Card 3</h2>
            <p className="text-gray-500 mb-2">April 30, 2024</p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae justo id mauris placerat malesuada. Vestibulum vitae lacus
              auctor, consequat libero vel, fermentum justo. Aliquam erat
              volutpat. Sed nec commodo nulla. Nullam efficitur condimentum elit
              ac bibendum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
