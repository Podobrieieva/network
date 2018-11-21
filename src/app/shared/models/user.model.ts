export interface UserModel {
    main: {
        name: string,
        surname: string,
        image: string,
        gender: string,
        dateOfBirth?: number,
        maritalStatus?: string,
        password: string,
        confirmPassword: string
    },
    contact?: {
        country: string,
        city?: string,
        street?: string,
        mobilePhone?: number,
        email?: number,
        skype?: string
    },
    education?:{
        country?: string,
        city?: string,
        school?: number,
        university?: string,
        periodOfSchool: number,
        periodOfUniversity: number
    },
    work?:{
        country?: string,
        city?: string,
        company: string,
        period: number,
    }
    interests?:{
        hobby?: string,
        music?: string,
        movies?: string  
    }
    posts?:[
        {
            imageUrl?: string,
            videoUrl?: string,
            content?: string,
            like: number,
            //like: [id]
            comments?: [
                {
                    content?: string,
                    id?: number,
                    responseOnComment?: [
                        {
                            content?: string,
                            id?: number
                        }
                    ]
                }

            ]

        }
    ]

}
