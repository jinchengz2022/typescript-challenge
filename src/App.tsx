import React from 'react';

const App: React.FC = () => {
  const dataArr = ['RISK', 'CAMP', 'DUP'];

  const idRequest = async (id: number): Promise<number> => {
    await Promise.resolve('');
    return id;
  }

  const lastRequest = <T, R extends number>(request: (...args: T[]) => Promise<R>): (...args: T[]) => Promise<R> => {
    let time = 0;
    const innerRequest = async (...args: T[]): Promise<R> => {
      time++;
      const id = await request(...args);
      if(id !== time) {
        await new Promise(() => {});
      }
      return request(...args);
    }
    return innerRequest;
  }
  
  const request = lastRequest(idRequest);

  request(1).then(console.log);
  request(2).then(console.log);
  request(3).then(console.log);
  request(4).then(() => setTimeout(() => {
    console.log(4)
  }, 2000));

  return (
    <div></div>
  );
};

export default App;