import React from 'react';

interface IHomeProps {
  name?: string
}

export default function Home({name}: IHomeProps) {
  return (
    <div>
      Hello {name} !
    </div>
  );
}
