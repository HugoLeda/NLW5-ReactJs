export default function Home() {
  return (
    <div>    
      <h1>Index</h1>
      <p>a</p>
    </div>
  )
}

// SSR
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,      
    }    
  }  
}