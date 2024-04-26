import { useLoaderData } from "react-router-dom";
import Slider from "../components/slider/Slider";
import Coffee from "../components/slider/Coffee";
import { useState } from "react";

const Home = () => {
  const loadcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadcoffees)
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="">
      <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 gap-y-5 place-items-center">
        {
            coffees.map((coffee) => <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee} /> )
        }
      </div>
      </div>
    </div>
  );
};

export default Home;
