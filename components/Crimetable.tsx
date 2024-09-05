'use client';

import { useEffect } from 'react';
import { fetchData } from '@/app/redux/Slices/CrimeDataSlice';
import { useAppDispatch, useAppSelector } from '@/app/hook/hook';

const TableComponent = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Case Number</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Block</th>
            <th className="px-4 py-2 border">Primary Type</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Location Description</th>
            <th className="px-4 py-2 border">Arrest</th>
            <th className="px-4 py-2 border">Domestic</th>
            <th className="px-4 py-2 border">Ward</th>
            <th className="px-4 py-2 border">Year</th>
            <th className="px-4 py-2 border">Latitude</th>
            <th className="px-4 py-2 border">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2 border">{item.case_number}</td>
              <td className="px-4 py-2 border">{new Date(item.date).toLocaleString()}</td>
              <td className="px-4 py-2 border">{item.block}</td>
              <td className="px-4 py-2 border">{item.primary_type}</td>
              <td className="px-4 py-2 border">{item.description}</td>
              <td className="px-4 py-2 border">{item.location_description}</td>
              <td className="px-4 py-2 border">{item.arrest ? 'Yes' : 'No'}</td>
              <td className="px-4 py-2 border">{item.domestic ? 'Yes' : 'No'}</td>
              <td className="px-4 py-2 border">{item.ward}</td>
              <td className="px-4 py-2 border">{item.year}</td>
              <td className="px-4 py-2 border">{item.latitude}</td>
              <td className="px-4 py-2 border">{item.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
