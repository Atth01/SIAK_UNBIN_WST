import React from 'react';
import CRUDTemplate from '../components/CRUDTemplate';

function Matkul() {
  const initialData = [
    { id: 1, kode: 'CS101', nama: 'Pemrograman Dasar', sks: '3', semester: '1' },
    { id: 2, kode: 'CS102', nama: 'Struktur Data', sks: '4', semester: '2' },
    { id: 3, kode: 'CS201', nama: 'Basis Data', sks: '3', semester: '3' },
  ];

  const fields = ['Kode', 'Nama', 'SKS', 'Semester'];

  return (
    <CRUDTemplate 
      title="Manajemen Mata Kuliah" 
      fields={fields} 
      initialData={initialData} 
    />
  );
}

export default Matkul;
