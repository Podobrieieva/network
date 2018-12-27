import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts = [
    {
      user: {
        name: 'Sarah',
        avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
        surname: 'Cruiz'
      },
      postImg: '../../../../assets/img/user-profile/post-images/12.jpg',
      date: 'sometimes ago',
      likes: 13,
      dislikes: 0,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      comments: [
        {
          user: 'Diana',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-11.jpg'
        },
        {
          user: 'John',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-4.jpg'
        }
      ]
    },
    {
      user: {
        name: 'Sarah',
        avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
        surname: 'Cruiz'
      },
      postImg: '../../../../assets/img/user-profile/post-images/13.jpg',
      date: '10/22/2016',
      likes: 49,
      dislikes: 0,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      comments: [
        {
          user: 'Diana',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-11.jpg'
        },
        {
          user: 'John',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-4.jpg'
        }
      ]
    },
    {
      user: {
        name: 'Sarah',
        avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
        surname: 'Cruiz'
      },
      postImg: null,
      date: '10/21/2016',
      likes: 49,
      dislikes: 0,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      comments: [
        {
          user: 'Diana',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-11.jpg'
        },
        {
          user: 'John',
          text: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud`,
          avatar: '../../../../assets/img/user-profile/users/user-4.jpg'
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
