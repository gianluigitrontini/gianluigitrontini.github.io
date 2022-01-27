import React from 'react';

function Status({ status = 'active' || 'inProgress' || 'offline' || 'demo' }) {
  return (
    <div className='flex items-center absolute z-50 top-2 right-2 text-white uppercase text-sm'>
      <span
        className={`rounded-full inline-block w-2 h-2 shadow-lg mr-2 ${
          status === 'active'
            ? 'bg-green-400'
            : status === 'inProgress'
            ? 'bg-yellow-400'
            : status === 'demo'
            ? 'bg-blue-400'
            : 'bg-red-400'
        }`}></span>
      {status === 'active'
        ? 'Active'
        : status === 'inProgress'
        ? 'In Progress'
        : status === 'demo'
        ? 'Demo'
        : 'Inactive'}
    </div>
  );
}

export default Status;
