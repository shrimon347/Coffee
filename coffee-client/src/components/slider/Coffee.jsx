/* eslint-disable react/prop-types */
import { FaPen } from "react-icons/fa6";
import { IoEyeSharp, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, chef, price } = coffee;
  const handleToDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log("delete");
              console.log(coffees);
              const remaning = coffees.filter(coff => coff._id !== _id)
              console.log(remaning);
              setCoffees(remaning)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={photo}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-2 font-bold tracking-tight text-gray-900">
            Name : {name}
          </p>
          <p className="mb-3 font-bold text-gray-700 ">Chef : {chef}</p>
          <p className="mb-3 font-bold text-gray-700 ">Price : {price}</p>
        </div>
        <div className="flex flex-col items-center gap-5 px-5">
          <Link to={`/coffee/${_id}`}><button className="p-2 bg-[#E3B577] ">
            <IoEyeSharp />
          </button>
          </Link>
          <Link to={`/updatecoffee/${_id}`}>
            <button className="p-2 bg-[#E3B577] ">
              <FaPen />
            </button>
          </Link>
          <button
            onClick={() => handleToDelete(_id)}
            className="p-2 bg-[#E3B577] "
          >
            <IoTrashBinOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
