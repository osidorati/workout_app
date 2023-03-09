import Layout from '../../layout/Layout.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button.jsx'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics.jsx'

function Home() {
  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button clickHandler={() => navigate('/new-workout')}>
        New
      </Button>

      <h1 className={styles.heading}>
        EXERCISES FOR THE <br />
        SHOULDERS
      </h1>

      <Statistics />

    </Layout>
  )
}

export default Home
