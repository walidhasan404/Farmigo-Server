
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast';
import { userAuthThroughServer } from '../../../common/Hooks/fetchUser';
import { storeInSession } from '../../../common/session';
import { useAuth } from '../../AuthProvider/AuthContext';
import Oath from '../../../Components/Oath';
import { Link, Navigate } from 'react-router-dom';


const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const serverRoute = '/register'

const schema = z.object({
  name: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).refine((password) => passwordRegex.test(password), {
    message: "Password must contain at least one uppercase letter, one number, and one special character."
  })
})

type FormData = z.infer<typeof schema>

export default function RegisterPage() {
  const {userAuth , setUserAuth } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    userAuthThroughServer(serverRoute, data)
      .then((userData) => {
        // Now userData will have the correct result from the server
        toast.success('Registered in Successfully');
        storeInSession("user", JSON.stringify(userData));
        setUserAuth(userData);
      })
      .catch((error) => {
        toast.error(error.message || "An error occurred");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  /* `const token = userAuth?.token` is using optional chaining (`?.`) to access the `token` property
  of the `userAuth` object. */
  const token = userAuth?.token

  return (
    token ? <Navigate to='/'/> :
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">Create Your Farmigo Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Create a password"
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
       <Oath/>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">Log in here</Link>
        </p>
      </div>
    </div>

  )
}