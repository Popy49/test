import logo from './logo.svg';
import './App.css';
import {Modal} from 'modal-react-library'
import MyComponent from "./Mycomponent"
import Rain from './Rain';
import { useEffect, useState } from 'react';
import { useFetch } from './usefetch';


function App() {

    //API Call
    const { data, isLoading, error } = useFetch(
      `https://popy49user.free.beeceptor.com/user/12`
    )

    // return (
    //   <main>
    //   <h1>Helloooooooooooo</h1>
    //   </main>
    // )


if (!isLoading) {
  if (error) {
    return <span>Une erreur est survenue, {error}</span>
  }
  console.log(data)
  const userFirstName = data.data.userInfos.firstName
  const userDailyScore = data.data.todayScore
  const userNutritionnalsDatas = data.data.keyData
  return (
    <main>
    <h1>Hello</h1>
    <p>{userFirstName}</p>
    </main>
  )
}
}

export default App;
