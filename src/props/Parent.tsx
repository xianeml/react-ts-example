import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='blue' onClick={() => console.log('clicked')
      } />
      <ChildAsFC color='blue' onClick={() => console.log('clicked')} > testest</ChildAsFC>
    </>
  );
}

export default Parent;
