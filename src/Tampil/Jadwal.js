import React from 'react';
import CRUDTemplate from '../components/CRUDTemplate';

function Jadwal() {
  const initialData = [
    { id: 1, matakuliah: 'Pemrograman Web', hari: 'Senin', jam: '08:00-10:00', ruangan: 'A101' },
    { id: 2, matakuliah: 'Basis Data', hari: 'Selasa', jam: '13:00-15:00', ruangan: 'B201' },
    { id: 3, matakuliah: 'Algoritma', hari: 'Rabu', jam: '10:00-12:00', ruangan: 'C301' },
  ];

  const fields = ['Matakuliah', 'Hari', 'Jam', 'Ruangan'];

  return (
    <CRUDTemplate 
      title="Manajemen Jadwal Kuliah" 
      fields={fields} 
      initialData={initialData} 
    />
  );
}

export default Jadwal;
