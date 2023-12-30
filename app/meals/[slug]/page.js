function page({params}) {
  return (
    <div>
        <h1>Dynamic Route</h1>
        <p>{params.slug}</p>
    </div>
  )
}

export default page