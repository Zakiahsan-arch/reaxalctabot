// frontend/src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import useAuth from '../hooks/useAuth.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Toast from '../components/Toast.jsx';

const Admin = () => {
  const { user, token } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // TODO: Integrasi ke backend API /admin/users
        const fakeUsers = [
          { id: 1, email: 'user1@mail.com', role: 'member' },
          { id: 2, email: 'user2@mail.com', role: 'premium' },
          { id: 3, email: 'admin@mail.com', role: 'admin' },
        ];
        setUsers(fakeUsers);
      } catch (err) {
        setToast({ message: 'Gagal mengambil data user', type: 'error' });
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  const updateRole = (id, newRole) => {
    // TODO: Integrasi ke backend API /admin/role
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
    setToast({ message: `Role user ${id} diubah ke ${newRole}`, type: 'success' });
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 font-bold">Akses ditolak. Admin only.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Daftar User</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-2">ID</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Role</th>
                    <th className="p-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b">
                      <td className="p-2">{u.id}</td>
                      <td className="p-2">{u.email}</td>
                      <td className="p-2">{u.role}</td>
                      <td className="p-2">
                        <select
                          value={u.role}
                          onChange={(e) => updateRole(u.id, e.target.value)}
                          className="border p-1 rounded-md"
                        >
                          <option value="member">Member</option>
                          <option value="premium">Premium</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Admin;