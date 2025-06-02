import React from "react";

const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form className="space-y-4" action="" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">First Name:</label>
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="Fname"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name:</label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="Lname"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Appointment Date:
            </label>
            <input
              type="date"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address:</label>
            <input
              type="text"
              placeholder="Your Address"
              className="w-full border-2 border-indigo-500 rounded px-3 py-2"
              name="address"
            />
          </div>
          <button className="btn btn-primary btn-outline" type="submit">
            Make Appointment
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
