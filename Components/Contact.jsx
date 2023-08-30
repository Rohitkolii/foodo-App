import { useState } from 'react'
import Styles from '../styles/Contact.module.css'

const Contact = () => {

  const[name, setname] = useState('')
  const[email, setemail] = useState('')
  const[message, setmessage] = useState('')

  const ContactHandler = (e) => {
    e.preventDefault()
    const messagedata={
      email,
      name,
      message
    }
    if(email && name && message){
      alert(`I am ${messagedata.name} email ${messagedata.email} and message is ${messagedata.message}`)
      setname('')
      setemail('')
      setmessage('')
    }

    else if(!name){
      alert("Enter Name First")
    }

    else if(!email){
      alert("Enter Email First")
    }

    else if(!message){
      alert("Enter Message First")
    }
    
    else{
      alert("Enter Full Details")
    }

  }

  return (
    <div className={Styles.Contact}>
      <div className={Styles.innerContact}>
        <div className={Styles.con1}>
          <p>Do uou have a quetion <br />or want to become a seller?</p>
          <p>Fill this form our team will contact you next 48 hours.</p>

          <div className={Styles.Form}>
            <form onSubmit={(e)=> ContactHandler(e)} >
              <div className={Styles.input1}>
                <input value={name} onChange={(e)=> setname(e.target.value)} type="text" name="" id="" placeholder='Your Name'/>
                <input value={email} onChange={(e)=> setemail(e.target.value)} type="email" name="" id="" placeholder='Your e-mail'/>
              </div>

              <div className={Styles.input2}>
                <textarea value={message} onChange={(e)=> setmessage(e.target.value)} cols="30" rows="12" placeholder='Your message'></textarea>
              </div>
              <input type='submit' value="Message" />
            </form>
          </div>
        </div>

        <div className={Styles.feature}>
          <div className={Styles.Image}>
            <img src="/Images/contact.png" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact