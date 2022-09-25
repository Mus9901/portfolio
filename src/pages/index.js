import { Main } from 'components/UI/Main/Main'
import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function Home() {

  return (
    <>
      <SEO />
      <Main />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    
  }
}
