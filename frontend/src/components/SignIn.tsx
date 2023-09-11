'use client'
import React, { useState } from 'react'
import {
    Card,
    Spacer,
    Button,
    Input,
    Checkbox,
    Progress
} from '@nextui-org/react'

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className='w-96 h-96 m-auto'>
                <header className="lg font-bold">Login</header>
                <Input
                    isClearable
                    isRequired
                    fullWidth
                    placeholder='Username'
                />
                <Spacer y={0.5}/>
                <Input
                    isClearable
                    isRequired
                    fullWidth
                    placeholder='Password'
                />
                <div className="flex flex-row">
                    <Checkbox>
                        Remember me
                    </Checkbox>
                </div>
                { isSubmitted ? <Progress
                    size="sm"
                    isIndeterminate
                    aria-label="Authenticating..."
                    className="max-w-md"
                /> : <></>}
            </Card>
        </div>
    )
}