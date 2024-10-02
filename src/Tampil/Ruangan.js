import React from 'react';
import CRUDTemplate from '../components/CRUDTemplate';

function Ruangan() {
  const initialData = [
    { id: 1, nomor: 'A101', idDosen: 'DSN001', matkul: 'Pemrograman Dasar', jam: '08:00-10:00' },
    { id: 2, nomor: 'B201', idDosen: 'DSN002', matkul: 'Basis Data', jam: '10:00-12:00' },
    { id: 3, nomor: 'C301', idDosen: 'DSN003', matkul: 'Algoritma', jam: '13:00-15:00' },
  ];

  const fields = ['Nomor', 'ID Dosen', 'Matkul', 'Jam'];

  return (
    <CRUDTemplate 
      title="Manajemen Ruangan" 
      fields={fields} 
      initialData={initialData} 
    />
  );
}

export default Ruangan;
