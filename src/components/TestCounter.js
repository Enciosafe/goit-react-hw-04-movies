import React, { useState } from 'react';

function Example() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
          Нажми на меня
      </button>
        <button style={{color: 'tomato'}} onClick={() => setCount(count - 1)}>
            Нажми на меня ,блять
        </button>
    </div>
  );
}

export default Example