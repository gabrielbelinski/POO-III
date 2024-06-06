import PermissionType from "./PermissionType"

interface DatabaseItem{
    email : string
    password : string
    permission : PermissionType
}

const Database : DatabaseItem[] = [
    {   
        email: "gabrielbelinskisalomao@gmail.com",
        password: "12345",
        permission: PermissionType.ADMIN
    },
    {   
        email: "gabrielbelinski@hotmail.com",
        password: "12345",
        permission: PermissionType.USER
    },
    {   
        email: "gabrielbelinski@icloud.com",
        password: "12345",
        permission: PermissionType.ADMIN
    },
    {   
        email: "gabriel_belinski@hotmail.com",
        password: "12345",
        permission: PermissionType.USER
    },
]

export default Database