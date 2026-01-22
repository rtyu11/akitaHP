'use client'
import { signIn } from 'next-auth/react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        if (res?.ok) {
            router.push('/admin')
        } else {
            setError('メールアドレスまたはパスワードが間違っています。')
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center text-brand-navy">管理者ログイン</h1>
                {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-navy"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-navy"
                        required
                    />
                </div>
                <button className="w-full bg-brand-navy hover:bg-navy-800 text-white font-bold py-2 rounded transition-colors">
                    ログイン
                </button>
            </form>
        </div>
    )
}
