import useFirebaseAuth from '@/firebase-manager/auth/AuthHook'
import style from './ProfilePage.module.scss'
import Input from '@/components/input/Input'

const ProfilePage : React.FC = () => {

    const { user } = useFirebaseAuth({ fallback_to : '/' })

    return (
    <div className={style.container}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input label='Name'/>
        </div>
    </div>
    )
}

export default ProfilePage