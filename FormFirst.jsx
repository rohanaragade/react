import React, { useState } from 'react'
import './Form.css'


const FormFirst = () => {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenum: "",
    });

    const inputData = (event) => {
        const { name, value } = event.target;

        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleForm = (e) => {
        e.preventDefault();

        

        console.log(user);

        setUser({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phonenum: ""
        });
    }

    return (
        <div>
            <h3 className='text-center my-3'>My Firstname is <span className='renderdata'>{user.firstname} {user.lastname}</span>  and Email is <span className='renderdata'>{user.email}</span>  & phone Number is <span className='renderdata'> {user.phonenum}</span> </h3>
            <form className='signform' onSubmit={handleForm}>
                <div className='sign'>
                    <h1>Sign Up</h1>
                    <p>Please Fill This Form To Create Your Account</p>
                    <div className='allip'>

                        <label htmlFor="firstname"><b>First Name : </b></label>
                        <input type='text' id="firstname" value={user.firstname} placeholder='Firstname' name="firstname" onChange={inputData} required />

                        <label htmlFor="lastname"><b>Last Name : </b></label>
                        <input type='text' id="lastname" placeholder='Lasttname' name="lastname" value={user.lastname} onChange={inputData} required />

                        <label htmlFor="email"><b>Email : </b></label>
                        <input type='email' id="email" placeholder='email' name="email" required value={user.email} onChange={inputData} />

                        <label htmlFor="password"><b>Password : </b></label>
                        <input type='text' id="password" placeholder='Password' name="password" value={user.password} onChange={inputData} required />

                        <label htmlFor="phone"><b>Phone Number : </b></label>
                        <input type='number' id="phone" placeholder='PhoneNumber' name="phonenum" value={user.phonenum} onChange={inputData} />

                    </div>
                    <p className='terms'>By creating an Account you agree to our <a href='#'>Terms & Privacy</a></p>
                    <div className='btndiv'>
                        <button type="submit" className='signbtn'>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormFirst


// below is for if there are 3-4 fields are there but we have multiple then refer above


// import React, { useState } from 'react'
// import './Form.css'

// const FormFirst = () => {

//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPasswprd] = useState("");
//     const [phonenum, setPhonenum] = useState("");

//     const handleForm = (e) =>{
//         e.preventDefault();
//         setFirstname("");
//     }

//     return (
//         <div>
//             <h3 className='text-center my-3'>My Firstname is <span className='renderdata'>{firstname} {lastname}</span>  and Email is <span className='renderdata'>{email}</span>  & phone Number is <span className='renderdata'> {phonenum}</span> </h3>
//             <form className='signform' onSubmit={handleForm}>
//                 <div className='sign'>
//                     <h1>Sign Up</h1>
//                     <p>Please Fill This Form To Create Your Account</p>
//                     <div className='allip'>
//                         <label for="firstname"><b>First Name : </b></label>
//                         <input type='text' id="firstname" value={firstname} placeholder='Firstname' name="Firstname" onChange={(e) => setFirstname(e.target.value)} required />
//                         <label for="lastname"><b>Last Name : </b></label>
//                         <input type='text' id="lastname" placeholder='Lasttname' name="Lasttname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
//                         <label for="email"><b>Email : </b></label>
//                         <input type='email' id="email" placeholder='email' name="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                         <label for="password"><b>Password : </b></label>
//                         <input type='text' id="password" placeholder='Password' name="Password" value={password} onChange={(e) => setPasswprd(e.target.value)} required />
//                         <label for="phone"><b>Phone Number : </b></label>
//                         <input type='number' id="phone" placeholder='PhoneNumber' name="Phone Number" value={phonenum} onChange={(e) => setPhonenum(e.target.value)} />
//                     </div>
//                     <p className='terms'>By creating an Account you agree to our <a href='#'>Terms & Privacy</a></p>
//                     <div className='btndiv'>
//                         <button type="submit" className='signbtn'>Sign Up</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default FormFirst