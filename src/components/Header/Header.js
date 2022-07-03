import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';import BusinessCenter from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signOut } from '../../Actions/userActions';


function Header() {
    const dispatch = useDispatch();
    const [st, setSt] = useState('h');
    const user = useSelector((state) => state.userState.user)

    const handleSignOut = (e) => {
      setSt('s');
      dispatch(signOut())
    }

  return (
    <div className='header p-5 flex align-middle justify-between flex-row '>
        <div className="H-left flex align-middle justify-center flex-row ">
        <div className="H-logo">
        <img className='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAd7f///8AdLb3+/1hm8lTksRRj8MAcrUAa7K81eeyzOJyps4AcLRXlMUAbrMAaLDc6PKrxuBtocs5i8EKe7mYu9nO4O3i7fXr9Pk7hL2Fr9N8qM+NtNZCicCfwNyoyOAvhqi+AAADoUlEQVR4nO2c25KyOhCFkwYNYAwHEUFl8/5v+aMzjAodg7HosKuyLuYmKfjsnDorZBj/UZYXh5KRqTwUefb7avYDUIACoCNgDPoXFtkDoQNJ+fpBEroB4Zi6ALgpPf4gdM4IeobuhpCR9oGxIOsRCif9YJAsOHMbhFsYWK7cIqicFa6jULCDa4QDI5yVcTkHeC8hlVBSuHt/KnZ5Eif5BVInFKCKig+qdoq+y4r2AXBfy1vqGVQVAX9VsKOdwKIzn+pKuZz2CwemHV1bQDluhd+2KMn6pOpQAs4TqjBAiwehV0sUBvWfjoB3RKNCnbQIJxoCaLTtwAOaloBQS8A5TXYDlzcIO5L1ag0I+NRI2hD6aYEHe5qJAWotwokoy0tjLUIc0SDAXosQUiVwUGkIKrKVUmw0CESd8SbNQpUQ9YS70B5Z0fogkExHA6PN40FeRwRHQb6TUM1zY8QtZT8YBBE7x1ld11l8ZZGj/T8IycqyZFI6NiC8vhL0Erc/3zzgRR8VSwVlc9jsw/2mbZhQFssbqHL/qubZYYDoMCpun7qsiNglqU5D5hNkVR6qjw2KcrpYVs3fQ6DMJsX14NtF7Dot7WeWMPooFCm2XGd/s5PAius7goBOl/edwg8iAQ36jO3vEzTZ5aYvlqF+K9ZHopkdCMAThnBA2KIIfUp1P1x4o7qduym1RJCRPut8VFoUIcqNBDyYyWCHsBmv76jqeTtjO4Srfgv0rNOs5MsOYa6Oc5piWQTezGiKhRHm2EULIwQzwrAwAj+aw7A0wsk9wgybYmmEGS2xOIJ5b/gdQnYs9vtwl+jNGs6NG6NvEKptpG5Jq4jUTl/NeDT6BcI1fcohlc4r4WdT7mKPcH7pZ8B0DLlpnbBGSEY9Xetnx0shBJOxpjSZnPF7BVuE8/S3SbxmbSCwRagRY1SXTpo8VEuEDhntEjtu5OacwRIhRB6rq2uaGOwQcINa42gvg1ChAy3Ft1dYxL5HwL/KQbennBeG6dEOARmSTDsklkHAbfpoaqKuBMF0yOURPIJH8AgewSN4BI/gETyCR/AIHsEjeIT/O8LBCgG1jywRmMLeEfwVl6iLhruZGuPReBogsK+AH16Swh6rNdexbzoS84cMqk3iVyXbJ0NNbeOxCt1BC0THSeXLnHNrkGPB++I3P2tS1+E1KL2c3x8r13CNbwWXGVdwpXMFF1tXcL13DZecV3DVew0X3tdw7X8N//yAO/0XEP8AF8xDFrjLQ2YAAAAASUVORK5CYII=" alt="" />
        </div>
        <div className="H-search flex flex-row justify-between">
        <SearchIcon className='ic' />
        <input type="text" placeholder='searhc' />
        </div>
        </div>
        <div className="H-right">
            <ul className='flex justify-between '>
                <li className={st === 'h' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('h')}><HomeIcon /><p>Home</p> </li>
                <li className={st === 'n' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('n')} > <PeopleIcon /><p> Network</p></li>
                <li className={st === 'j' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('j')}> <BusinessCenter /><p> Jobs</p></li>
                <li className={st === 'm' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('m')}> <ChatIcon /><p> Message</p></li>
                <li className={st === 'N' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('N')} > <NotificationsIcon /><p>Notification</p> </li>
                <li className={st === 'me' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={() => setSt('me')}> <img style={{borderRadius:'50%', width: '30px', hight:'30px'}} src={user ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU'} alt="" /> <p>Me</p></li>
                <li className={st === 's' ? 'flex flex-col icons st items-center' : 'flex flex-col icons items-center'} onClick={handleSignOut}><p>Sign Out</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Header