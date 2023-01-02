// stores constants for easy changes

 // decides the point at which header and navbar minimize
export const scrollLimit = 100;
export const navItemsForHome = [
    {link: '#toFeatures', text: 'Features'},
    {link: '#footer', text: 'About'},
    {link: '#public-home', text: 'Top'},
];

export const navItemsForOnboarding = [
    {link: '/', text: 'Home'},
];

export const professions = [
    {text: 'collaboration tool for everyone', emoji: '👩🏽 👨🏻 🧑🏻 🧔🏾‍♂️ 👩🏻'},
    {text: 'collaboration tool for developers', emoji: '👩🏽‍💻 👨🏻‍💻 🧑🏻‍💻 👨🏾‍💻 👩🏻‍💻'},
    {text: 'collaboration tool for students', emoji: '👩🏽‍🎓 👨🏻‍🎓 🧑🏻‍🎓 👨🏽‍🎓 👩🏻‍🎓'},
    {text: 'collaboration tool for lawyers', emoji: '👩🏽‍💼 👨🏻‍💼 🧑🏻‍💼 👨🏾‍💼 👩🏻‍💼'},
    {text: 'collaboration tool for doctors', emoji: '👩🏽‍⚕️ 👨🏻‍⚕️ 🧑🏻‍⚕️ 👨🏾‍⚕️ 👩🏻‍⚕️'},
    {text: 'yes, chefs can use it too!', emoji: '👩🏽‍🍳 👨🏻‍🍳 🧑🏻‍🍳 👨🏽‍🍳 👩🏻‍🍳'},
]

export class professionsList {
    constructor() {
        this.head = {
            data: professions[0],
            next: null,
        }
        this.one = {
            data: professions[1],
            next: null,
        }
        this.two = {
            data: professions[2],
            next: null,
        }
        this.three = {
            data: professions[3],
            next: null,
        }
        this.four = {
            data: professions[4],
            next: null,
        }
        this.five = {
            data: professions[5],
            next: null,
        }
        this.head.next = this.one;
        this.one.next = this.two;
        this.two.next = this.three;
        this.three.next = this.four;
        this.four.next = this.five;
        this.five.next = this.head;
    }
}

const privacyPoints = [
    'no analytics data will be collected', 
    'cookies are optional', 
    'valid credentials required',
    'valid email required',
    'team code required',
    'manage teams from dashboard',
    'you will be team admin'
]

export const authOptions = [
    {
        title: 'Sign In', 
        text: 'for existing users',
        privacyList: [
            privacyPoints[0], 
            privacyPoints[1], 
            privacyPoints[2],
            privacyPoints[5]
        ],
        color: 'aqua',
    },
    {
        title: 'Join a team', 
        text: 'for new users with a code',
        privacyList: [
            privacyPoints[0], 
            privacyPoints[1], 
            privacyPoints[3], 
            privacyPoints[4]
        ],
        color: 'hotpink',
    },
    {
        title: 'Create a team', 
        text: 'for new users without a code',
        privacyList: [
            privacyPoints[0], 
            privacyPoints[1], 
            privacyPoints[3],
            privacyPoints[6]
        ],
        color: 'royalblue',
    },
]