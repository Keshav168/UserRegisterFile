import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddUser({ handleFormSubmit, tableData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showForm, setShowForm] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const onSubmit = (data) => {
    const userExists = tableData.some(
      (user) => user.username === data.username
    );

    if (userExists) {
      setDuplicateError(true);
    } else {
      setDuplicateError(false);
      handleFormSubmit(data);
      reset();
    }
  };

  return (
    <div>
      <button className="btn btn-info mt-5 ms-5" onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add User"}
      </button>

      {/* Conditionally render form based on showForm state */}
      {showForm && (
        <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fs-5">
              Username
            </label>
            <input
              type="text"
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 14,
              })}
              id="username"
              className="form-control"
            />
            {/* Validation error message for username */}
            {errors.username?.type === "required" && (
              <p className="text-warning">*Username is required</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-warning">*Maximum length should be 14.</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-warning">*Minimum length should be 4.</p>
            )}
            {/* Duplicate error message */}
            {duplicateError && (
              <p className="text-danger">*Duplicate username</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              className="form-control"
            />
            {/* Validation error message for email */}
            {errors.email?.type === "required" && (
              <p className="text-warning">*Email is required</p>
            )}
          </div>

          <button className="btn btn-warning" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddUser;
