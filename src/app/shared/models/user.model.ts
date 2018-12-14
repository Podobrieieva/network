export interface UserProfileModel {
    
      "avatarUrl": "string",
      "birthDate": "string",
      "contact": {
        "country": "string",
        "city": "string",
        "street": "string",
        "mobilePhone": "string",
        "skype": "string"
      },
      "education": {
        "country": "string",
        "city": "string",
        "school": "string",
        "university": "string",
        "periodOfSchool": "string",
        "periodOfUniversity": "string"
      },
      "email": "string",
      "fullname": "string",
      "gender": "string",
      "id": "string",
      "interests": [
        "string"
      ],
      "name": "string",
      "subscribers": [
        "string"
      ],
      "subscriptions": [
        "string"
      ],
      "surname": "string",
      "work": [
        {
          "country": "string",
          "city": "string",
          "company": "string",
          "period": "string"
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
    avatarUrl: string;
    fullname?: string;
    id: string;
    name: string;
    surname: string;
}

export interface Post {
    id: string;
    photo?: string;
    text: number | string;
    user: UserCard;
    like: number;
    dislike: number;
    date?: Date;
    comments?: Array<PostComment>;
}

export interface PostComment {
    id: string;
    user: UserCard;
    text: string;
    date: Date;
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