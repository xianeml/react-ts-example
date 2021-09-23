interface ChildProps {
  color: string
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

/*
    타입스크립트는 내가 리액트 컴포넌트를 만드는줄 모른다. 
    그래서 아래처럼 이 컴포넌트는 리액트 컴포넌트고 프랍스는 저 인터페이스 타입으로 받을거다 라고 명시해줌
*/

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>{color}{children}<button onClick={onClick}>click me</button></div>
}