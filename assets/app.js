const app = new Vue({
    el: '#root',
    data: {
        images: [
            {
                items: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                items: 'img/02.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum',
            },
            {
                items: 'img/03.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                items: 'img/04.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
            },
            {
                items: 'img/05.jpg',
                title: 'Svezia',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },


        ],
        counter: 0,
    },
    methods: {
        imgUp: function () {
            if (this.counter < this.images.length - 1) {
                ++this.counter
            }
            else {
                this.counter = 0
            }

        },
        imgDown: function () {
            if (this.counter > 0) {
                --this.counter
            }
            else {
                this.counter = this.images.length - 1
            }
        }
    },
    mounted() {
        setInterval(this.imgUp, 3000)
    }
})
