import { LoginContainer } from './styles'

const Signup = () => {
  return (
    <div className='wrapLoginContainer'>
      <LoginContainer>
        <div className='title'>
          <h2 className='subtitle'>Get started</h2>
          <p className='description'>Create your account now</p>
        </div>

        <form action="">
          <div className='inputs'>
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" placeholder='Enter your name' />
          </div>
          
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter your email' />  
          </div>

          <div className='inputs'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' />
          </div>
        
          <button id='buttonSubmit' type='submit'>Sign Up</button>
        </form>

        <p className='text-login' >Have an account? <span>Login</span></p>
      </LoginContainer>
    </div>
  )
}

export default Signup