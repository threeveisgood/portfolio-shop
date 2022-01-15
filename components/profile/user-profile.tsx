import React, { ReactElement } from 'react'
import ProfileForm from './profile-form'

export default function UserProfile(): ReactElement {

    async function changePasswordHandler(passwordData: any) {
        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        console.log(data)
    }

    return (
        <section>         
         <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    )
}
