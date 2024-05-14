import React from 'react';

export default function ErrorProvider({ error }: { error: string }) {
  return (
    <div>
      <span className="text-red-400 text-xs mr-[10px]">{error}</span>
    </div>
  );
}
