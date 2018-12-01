export interface UserProfileModel {
    main: {
        id: number,
        name: string,
        surname: string,
        image: string,
        gender: string,
        dateOfBirth?: number,
        maritalStatus?: string,
        password: string,
        confirmPassword: string
    };
    contact?: {
        country: string,
        city?: string,
        street?: string,
        mobilePhone?: number,
        email?: number,
        skype?: string
    };
    education?:{
        country?: string,
        city?: string,
        school?: number,
        university?: string,
        periodOfSchool: number,
        periodOfUniversity: number
    };
    work?:{
        country?: string,
        city?: string,
        company: string,
        period: number,
    };
    interests?:{
        hobby?: string,
        music?: string,
        movies?: string  
    };
    posts?:[
        {
            id: number,
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

export interface CommentModel{
    avatar: string;
    content:string;
    userName:string;
    
}

export interface PostModel{
    avatar: string;
    content:string;
    userName:string;
    image?: string;
    id: number;
}

//////

export interface UserData {
    name: string;
    surname: string;
    email: string;
    photo: string;
    _token: string;
    age?: number | string;
    birthDate?: Date;
}

export interface UserCard {
    name: string;
    surname: string;
    photo: string;
    id: number
}

export interface Post {
    id: string;
    photo: string;
    header: string;
    text: number | string;
    comments: Array<PostComment>;
}

export interface PostComment {
    id: string;
    user: UserCard;
    text: string;
    childrensId: Array<string>;
}


export interface UserDataRequest {
    email: string;
    password: string;
}

export interface UserDataResponse {
    user: UserData;
    userPosts: Array<Post>;
    subscibtionsCount: number | string;
    subscribersCount: number | string;
}

export interface UserChangeDataRequest {
    fieldName: string;
    newValue: string;
    token: string;
}

export interface UserChangeDataResponse {
    done: boolean;
    user: UserData;
}

export interface PostAddRequest {
    newPost: Post;
    token: string;
}

export interface PostAddResponse {
    done: boolean;
    userPosts: Array<Post>;
}

export interface CommentAddRequest{
    idPost: string;
    idComment: string | null;
    newComment: PostComment;
    token: string;
}

export interface CommentAddResponse{
    done: boolean;
    updatePost: Post;
}

export interface SubscribersRequest {
    id: string;
    token: string;
}

export interface SubscribersResponse {
    done: boolean;
    subscribers: Array<UserCard>;
}

export interface SubscribtionsRequest {
    id: string;
    token: string;
}

export interface SubscribtionsResponse {
    done: boolean;
    subscribtions: Array<UserCard>;
}