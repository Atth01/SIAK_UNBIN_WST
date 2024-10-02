import React, { useState } from 'react';
import './CRUDTemplate.css';

const CRUDTemplate = ({ title, fields, initialData }) => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({});
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      setData([...data, { id: Date.now(), ...formData }]);
    } else {
      const newData = [...data];
      newData[editIndex] = { ...newData[editIndex], ...formData };
      setData(newData);
      setEditIndex(-1);
    }
    setFormData({});
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="crud-container">
      <h2 className="crud-title">{title}</h2>
      <form className="crud-form" onSubmit={handleSubmit}>
        {fields.map(field => (
          <div className="form-group" key={field}>
            <label>{field}: </label>
            <input
              type="text"
              name={field.toLowerCase()}
              value={formData[field.toLowerCase()] || ''}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button className="submit-btn" type="submit">{editIndex === -1 ? 'Add' : 'Update'}</button>
      </form>
      <table className="crud-table">
        <thead>
          <tr>
            {fields.map(field => <th key={field}>{field}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              {fields.map(field => <td key={field}>{item[field.toLowerCase()]}</td>)}
              <td>
                <button className="action-btn edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="action-btn delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDTemplate;
