import { format, parseISO} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api'
import { convertDuration } from '../utils/covertDuration'

export default function Home() {
  return (
    <div>    
      <h1>Index</h1>
      <p>{props}</p>     
    </div>
  )
}

// SSR
const props = async function getStaticProps() {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _oder: 'desc'
    }
  })   

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationString: convertDuration(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    }
  })

  return {
    props: {
      episodes: episodes,      
    },
    revalidate: 60 * 60 * 8    
  }  
}