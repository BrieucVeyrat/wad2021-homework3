import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [{
                "id": 0,
                "creatTime": "October 27, 2021 17:42",
                "author": {
                    "avatar": "https://i1.sndcdn.com/artworks-9b5uKQs6rEecP9Pc-XTz2SA-t500x500.jpg",
                    "firstname": "Johnny",
                    "lastname": "Sins"
                },
                "article": {
                    "image": "http://storage.ning.com/topology/rest/1.0/file/get/2808309778?profile=original",
                    "text": "Spurious correlation : Correlation doesn't mean Causality"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 1,
                "creatTime": "July 8, 2021 10:20",
                "author": {
                    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Manuel_Ferrara_2010.jpg/529px-Manuel_Ferrara_2010.jpg",
                    "firstname": "Manuel",
                    "lastname": "Ferrara"
                },
                "article": {
                    "image": "https://bestlifeonline.com/wp-content/uploads/sites/3/2018/06/unicorn.jpg?resize=768,512&quality=82&strip=all",
                    "text": "Hunting unicorns is legal in Michigan"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 2,
                "creatTime": "September 2, 2020 09:00",
                "author": {
                    "avatar": "https://peopleinmedia.org/wp-content/uploads/2020/09/Dani-Daniels-480x640.jpg",
                    "firstname": "Dani",
                    "lastname": "Daniels"
                },
                "article": {
                    "image": "https://media.istockphoto.com/photos/cancel-culture-concept-picture-id1249723002?k=20&m=1249723002&s=612x612&w=0&h=IR2kcheQdWBaXuKJYAWUbMj2tTf9YfiLI1hgwtsQn5k=",
                    "text": "China censored the word 'censorship'"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 3,
                "creatTime": "July 24, 2020 11:46",
                "author": {
                    "avatar": "https://whatgear-pictures.s3.us-west-2.amazonaws.com/pros/riley_reid_picture_d18f069914.jpeg",
                    "firstname": "Riley",
                    "lastname": "Reid"
                },
                "article": {
                    "image": "https://thumbs.dreamstime.com/b/rainbow-colored-bananas-diversity-uniqueness-rainbow-colored-bananas-uniqueness-diversity-conceptual-isolated-white-125645732.jpg",
                    "text": "I was wondering, why are bananas yellow?"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 4,
                "creatTime": "July 1, 2020 13:10",
                "author": {
                    "avatar": "https://pbs.twimg.com/profile_images/1068477753660502016/lH3-rVGs_400x400.jpg",
                    "firstname": "Jordi",
                    "lastname": "el Nino"
                },
                "article": {
                    "image": "",
                    "text": "Goodbye college, high school I'm coming!!!"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 5,
                "creatTime": "June 14, 2020 04:28",
                "author": {
                    "avatar": "https://dingyue.ws.126.net/2021/0811/a69941bcj00qxmv0q001lc000hs00s4g.jpg",
                    "firstname": "Eva",
                    "lastname": "Elfie"
                },
                "article": {
                    "image": "https://media.istockphoto.com/photos/podium-picture-id171379546?k=20&m=171379546&s=170667a&w=0&h=iZhc1VkZ4TmDi3Z_9WV2j96gCLSHKrqmRTrAyns_-AE=",
                    "text": "Just reached TOP #1"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 6,
                "creatTime": "February 25, 2020 22:39",
                "author": {
                    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Keiran_Lee_2016.jpg/320px-Keiran_Lee_2016.jpg",
                    "firstname": "Keiran",
                    "lastname": "Lee"
                },
                "article": {
                    "image": "",
                    "text": "If you doubt too much, start thinking with your body"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 7,
                "creatTime": "December 20, 2019 21:12",
                "author": {
                    "avatar": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Robbie_at_2019_Cannes_%28cropped%29.jpg",
                    "firstname": "Margot",
                    "lastname": "Robbie"
                },
                "article": {
                    "image": "https://cdn.onebauer.media/one/media/5d37/1dec/6933/0380/63d4/e964/harley-quinn.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill",
                    "text": "'I'm rubber, you're glue, whatever you say bounces off me and makes a six-inch-diameter exit wound in you'"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 8,
                "creatTime": "October 21, 2019 00:00",
                "author": {
                    "avatar": "https://biographygist.com/wp-content/uploads/2021/06/Athena-Faris.jpg",
                    "firstname": "Athena",
                    "lastname": "Faris"
                },
                "article": {
                    "image": "",
                    "text": "I love piercings"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            },
            {
                "id": 9,
                "creatTime": "March 6, 2019 13:37",
                "author": {
                    "avatar": "https://titterfun.com/api/assets/image/si2zg041dwmo.jpg",
                    "firstname": "Elsa",
                    "lastname": "Jean"
                },
                "article": {
                    "image": "https://www.speakeasy-news.com/wp-content/uploads/2018/05/NS_frankenstein_home03-1200x774.jpg",
                    "text": "25 years old and i'm just learning that Frankenstein was the name of the creator, not the monster"
                },
                "like_button": {
                    "icon": "@/assets/Like-Button.jpg",
                    "like": 0
                }
            }
        ]
    },
    mutations: {
        addLikes: (state, id) => {
            state.posts[id].like_button.like += 1;
        },
        resetLikes: (state) => {
            state.posts.forEach((post) => {
                post.like_button.like = 0;
            });
        }
    },
    actions: {
        method_addLikes: ({ commit }, id) => {
            commit("addLikes", id);
        },
        method_resetLikes: ({ commit }) => {
            commit("resetLikes");
        }
    },
});