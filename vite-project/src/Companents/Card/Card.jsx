const { useEffect } = require("react");

const Card = () => {
  const [data, setData] = userState([]);
  useEffect(() => {
    fetch ("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
    .then (data => data.json())
    .then (data =>{
      setData (data);
    })
  }, [])
  return(
    <div>
      {data.map(el => (
        <div key={el.id}>
          <img src= {el.avatar} alt="" />
          <h1>{el.name}</h1>
        </div>
      ))}
    </div>
  )
}