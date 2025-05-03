import { useState } from "react";

export default function ProfileForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    image: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4 mb-6"
    >
      <input
        type="text"
        name="name"
        placeholder="სახელი"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        name="surname"
        placeholder="გვარი"
        value={form.surname}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        name="image"
        placeholder="ფოტოს URL"
        value={form.image}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <textarea
        name="bio"
        placeholder="აღწერა"
        value={form.bio}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
      >
        პროფილის დამატება
      </button>
    </form>
  );