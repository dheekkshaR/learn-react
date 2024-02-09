// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Gallery from './components/gallery'
// import Profile from './qcomps/profile_mistake'
// import MyComp from './qcomps/firstcomp' 
// import Bio from './qcomps/bios'
// import Profile from './components/profile_props'
// import Gallery from './qcomps/gallery_props'
// import PackingList from './qcomps/props_item'
// import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
export default function Home() {
  return (
    <div className={styles.main}>
        <RecipeList />
    </div>
  )
}
