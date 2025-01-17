import React from "react";

function UserList({ tableData, handleDelete }) {
  return (
    <div>
      <div className="mt-5 container">
        <h2 className="display-6">User Data</h2>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th> {/* New column for delete button */}
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No users added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
