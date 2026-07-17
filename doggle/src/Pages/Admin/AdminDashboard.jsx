import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="flex gap-4">
        <Link
          to="/admin/add-food"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Food
        </Link>

        <Link
          to="/admin/foods"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Foods
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;