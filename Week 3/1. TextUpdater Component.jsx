import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
