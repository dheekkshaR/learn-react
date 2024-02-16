// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import List from './components/list_plain'
// import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
export default function Home() {
  return (
    <div className={styles.main}>
        <RecipeList/>
    </div>
  )
}
