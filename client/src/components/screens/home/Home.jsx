import Layout from '../../layout/Layout.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button.jsx'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'

function Home() {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button clickHandler={() => navigate(!isAuth ? '/': '/new-workout')}>
        {!isAuth ? 'Sign in' : 'New'}
      </Button>

      <h1 className={styles.heading}>
        EXERCISES FOR THE
        SHOULDERS
      </h1>

      {/*Counters*/}

    </Layout>
  )
}

export default Home
