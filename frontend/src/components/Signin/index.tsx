import { LoginContainer } from './styles'
import z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckSquare, User } from '@phosphor-icons/react'

const IRegisterSchema = z.object({
  email: z.string()
    .trim()
    .email({message: "Invalid email address."}),

  password: z.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password cannot contain more than 50 characters')
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),

})

// extract the inferred type
type ILoginInput = z.infer<typeof IRegisterSchema>

const Signin = () => {
  
  const { register, handleSubmit, formState: {errors} } = useForm<ILoginInput>({
    mode: 'onSubmit',
    resolver: zodResolver(IRegisterSchema)
  })

  const handleSubmitData: SubmitHandler<ILoginInput> = data => {
    console.log(data)
  }
  
  return (

      <LoginContainer>
        <div className='title'>
          <CheckSquare size={32} />
          <h2 className='subtitle'>To Do List</h2>
          <p className='description'>Log in the application</p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className='inputs'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" placeholder='Enter your email' />  
            {errors.email?.message && (
              <p className='errorMessage'>{errors.email.message}</p>
            )}
          </div>

          <div className='inputs'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" placeholder='Enter your password' />
            {errors.password?.message && (
              <p className='errorMessage'>{errors.password.message}</p>
            )}
          </div>
        
          <button id='buttonSubmit' type='submit'>Login</button>
        </form>

        <p className='text-login' >Create an account? <span>Register</span></p>
      </LoginContainer>
  )
}

export default Signin