import React from 'react';
import CRUDTemplate from '../components/CRUDTemplate';

function Mahasiswa() {
  const initialData = [
    { id: 1, nama: 'John Doe', nim: '12345', jurusan: 'Informatika', angkatan: '2020' },
    { id: 2, nama: 'Jane Smith', nim: '67890', jurusan: 'Sistem Informasi', angkatan: '2021' },
    { id: 3, nama: 'Bob Johnson', nim: '54321', jurusan: 'Teknik Komputer', angkatan: '2019' },
  ];

  const fields = ['Nama', 'NIM', 'Jurusan', 'Angkatan'];

  return (
    <CRUDTemplate 
      title="Manajemen Data Mahasiswa" 
      fields={fields} 
      initialData={initialData} 
    />
  );
}

export default Mahasiswa;
