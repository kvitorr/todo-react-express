import { RegisterContainer } from './styles'
import z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const IRegisterSchema = z.object({
  name: z.string()
    .trim()
    .nonempty({ message: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be a maximum of 20 characters" })
    .regex(
      /^[a-zA-ZÀ-ú ]+$/,
      { message: "Username cannot contain special characters" }
    ),

  email: z.string()
    .trim()
    .email({message: "Invalid email address."}),

  password: z.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password cannot contain more than 50 characters')
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),

  confirmPassword: z.string()
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords must be the same'
})

// extract the inferred type
type IRegisterInput = z.infer<typeof IRegisterSchema>

const Signup = () => {
  
  const { register, handleSubmit, formState: {errors} } = useForm<IRegisterInput>({
    mode: 'onSubmit',
    resolver: zodResolver(IRegisterSchema)
  })

  const handleSubmitData: SubmitHandler<IRegisterInput> = data => {
    console.log(data)
  }
  
  return (

      <RegisterContainer>
        <div className='title'>
          <h2 className='subtitle'>Get started</h2>
          <p className='description'>Create your account now</p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className='inputs'>
            <label htmlFor="name">Full name</label>
            <input {...register('name')} type="text" id="name" placeholder='Enter your name' />
            {errors.name?.message && (
              <p className='errorMessage'>{errors.name.message}</p>
            )}
          </div>
          
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

          <div className='inputs'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input {...register('confirmPassword')} type="password" id="confirmPassword" placeholder='Confirm your password' />
            {errors.confirmPassword?.message && (
              <p className='errorMessage'>{errors.confirmPassword.message}</p>
            )}
          </div>
        
          <button id='buttonSubmit' type='submit'>Sign Up</button>
        </form>

        <p className='text-login' >Have an account? <span>Login</span></p>
      </RegisterContainer>
  )
}

export default Signup