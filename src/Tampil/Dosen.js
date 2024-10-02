import React from 'react';
import CRUDTemplate from '../components/CRUDTemplate';

function Dosen() {
  const initialData = [
    { id: 1, nama: 'Dr. Budi', nip: '198001012010121001', bidang: 'Komputer' },
    { id: 2, nama: 'Prof. Ani', nip: '197005062005012002', bidang: 'Matematika' },
  ];
  return <CRUDTemplate title="Manajemen Dosen" fields={['Nama', 'NIP', 'Bidang']} initialData={initialData} />;
}

export default Dosen;
