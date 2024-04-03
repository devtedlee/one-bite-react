function Welcome({ name, isMember }) {
  return (
    isMember ? <div>{name}님 다시 오셨군요</div> 
        : <div>{name}님 가입하시겠어요?</div>
  )
}

export default Welcome