type AuthContextType = {
    user : User | null
    removeUser : ()=>void
    saveUser : (user : User)=>void
    refreshUser : (user : User)=>void
}
