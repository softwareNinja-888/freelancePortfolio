import React, { useState } from 'react';


export function Contact (){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
  };

  const formStyles = {
    container: 'max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg',
    title: 'text-2xl font-bold mb-6 text-gray-800',
    formGroup: 'mb-4',
    label: 'block text-sm font-medium text-gray-700 mb-1',
    input: 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500',
    select: 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500',
    textarea: 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min-h-[100px]',
    button: 'w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors',
    success: 'p-4 bg-green-100 text-green-700 rounded'
  };

  if (submitted) {
    return (
      <div className={formStyles.container}>
        <div className={formStyles.success}>
          Thanks for reaching out! I'll get back to you soon.
        </div>
      </div>
    );
  }

  return (
    <div className={formStyles.container}>
      <h2 className={formStyles.title}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className={formStyles.formGroup}>
          <label className={formStyles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={formStyles.input}
          />
        </div>

        <div className={formStyles.formGroup}>
          <label className={formStyles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={formStyles.input}
          />
        </div>

        <div className={formStyles.formGroup}>
          <label className={formStyles.label}>Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className={formStyles.select}
          >
            <option value="">Select project type</option>
            <option value="website">Website</option>
            <option value="webapp">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={formStyles.formGroup}>
          <label className={formStyles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={formStyles.textarea}
          />
        </div>

        <button type="submit" className={formStyles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};
