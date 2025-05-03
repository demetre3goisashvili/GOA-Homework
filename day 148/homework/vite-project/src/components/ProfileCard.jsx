export default function ProfileCard({ name, surname, image, bio }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 text-center">
        <img
          src={image}
          alt={`${name} ${surname}`}
          className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
        />
        <h2 className="text-xl font-semibold">{name} {surname}</h2>
        <p className="text-gray-600 mt-2">{bio}</p>
      </div>
    );
  }