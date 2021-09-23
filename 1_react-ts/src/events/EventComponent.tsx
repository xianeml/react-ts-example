const EventComponent: React.FC = () => {
  /*
    onChange를 inline으로 작성했을 경우 event 객체를 타입추론할 수 있는데
    콜백함수를 정의해서 사용할 경우 event 객체 타입추론이 안됨
    그래서 직접 타입정의를 해줘야하는데 무슨 이벤트 타입인지 어떻게 아느냐?
    => jsx 태그 내 이벤트 속성키에 마우스 호버 시 이벤트 타입 확인 가능
  */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  )
}

export default EventComponent
