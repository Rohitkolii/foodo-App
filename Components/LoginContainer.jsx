import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import Styles from '../styles/LoginContainer.module.css'

const LoginContainer = () => {

    const {push} = useRouter()
    
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [check, setcheck] = useState(false)
    const[err, seterr] = useState(false)
    const[checkerr, setcheckerr] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    console.log('userId : eve.holt@reqres.in')
    console.log('password : cityslicka')

    const LoginHandler = async (e) =>{
        e.preventDefault()
        if(check){
            try {
                const res = await axios.post('https://reqres.in/api/login',{
                    email:email,
                    password:password
                })
                console.log(res)
                localStorage.setItem('token', res.data.token)
                push('/')
                
            } catch (error) {
                seterr(true)
                // alert(error)
                setcheck(false)
            }
        } else{
            // alert('please check')
            setcheckerr(true)
            seterr(false)
        }
    }

  return (
    <div className={Styles.LoginContainer}>
        <div className={Styles.innerLoginContainer}>
            <div className={Styles.head}>
                <h1>Login</h1>
                <p>Sign in and start food adventure</p>
            </div>
            <form onSubmit={LoginHandler}>
                <div className={Styles.input_con}>
                    <input type="email" placeholder='Username' onChange={(e)=> setemail(e.target.value)} />
                </div>

                <div className={Styles.input_con}>
                    <input type={showPassword ? "text" : 'password'} placeholder='Password' onChange={(e)=> setpassword(e.target.value)} />
                    
                    {
                        showPassword ?
                        <span onClick={()=> setShowPassword(false)}><AiOutlineEyeInvisible /></span>
                        :
                        <span onClick={()=> setShowPassword(true)}><AiOutlineEye /></span>
                    }
                </div>
                
                {
                    err ? 
                    <p className={Styles.err}>Something went wrong!</p>
                    :
                    ''
                }
                {
                    checkerr ? 
                    <p className={Styles.err}>Please Click on Checkbox</p>
                    :
                    ''
                }
                <div className={Styles.Checks}>
                    <p> <input type="checkbox" id='rm' onChange={()=> setcheck(!check)} /> <label htmlFor="rm"> Remember me </label></p>
                    <p><Link href=''>Forgot password?</Link></p>
                </div>
                <input className={Styles.btn} type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default LoginContainer