import Modal from "./Modal";
import React, { useState } from "react";

function Card({ user, handleDelete, data, setData }) {
  const [heart, setHeart] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal for editing
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [form, setForm] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const handleSave = () => {
    const updatedData = data.map((item) => (item.id == form.id ? form : item));
    setData(updatedData); // Update state
    closeModal();
  };

  return (
    <div className="w-[340px] sm:w-[350px] bg-white flex-1 m-[20px] border-gray-300 border-[1px]">
      <div className="flex justify-center bg-gray-200">
        <img
          className="w-[200px] h-[200px]"
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}`}
          alt="No Image"
        />
      </div>
      <div className="ml-[20px] mt-[20px] mb-[20px] leading-7">
        <h2>{user.name}</h2>
        <h3>
          <i class="fa-regular fa-envelope text-gray-400 mr-[8px] text-[18px]"></i>{" "}
          {user.email}
        </h3>
        <h3>
          <i class="fa-solid fa-phone-flip text-gray-400 mr-[8px] text-[18px]"></i>{" "}
          {user.phone}
        </h3>
        <h3>
          <i class="fa-solid fa-globe text-gray-400 mr-[8px] text-[18px]"></i>{" "}
          {user.website}
        </h3>
      </div>
      <div className="flex justify-around p-[10px] bg-gray-200 ">
        <button
          onClick={() => setHeart(!heart)}
          className="px-[40px] border-r-gray-400 border-[1px]"
        >
          <i
            class={`${
              heart ? "fa-regular" : "fa-solid"
            } fa-heart text-red-600 text-[18px] `}
          ></i>
        </button>
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => openModal(form)}
            className="px-[40px] hover:text-blue-400"
          >
            <i className="fa-solid fa-pen-to-square text-[18px]"></i>
          </button>

          {isModalOpen && (
            <Modal
              user={user}
              closeModal={closeModal}
              form={form}
              setForm={setForm}
              handleSave={handleSave}
            />
          )}
        </div>
        <button
          onClick={() => handleDelete(user.phone)}
          className="px-[40px]  border-l-gray-400 border-[1px] hover:text-blue-400"
        >
          <i class="fa-solid fa-trash text-[18px]"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
