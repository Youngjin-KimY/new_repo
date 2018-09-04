new Vue({
    el:"#vue-app",
    data:{
        available: true,
        nearby: false
        // age:20,
        // a:0,
        // b:0
        // // x:0,
        // // y:0
        // name:'',
        // age:''
    },
    // methods:{
    //     greet:function (time) {
    //         return 'Good'+time+''+this.name;
    //     },
    //     add:function (inc) {
    //         this.age+=inc;
    //     },
    //     subtract:function (dec) {
    //         this.age-=dec;
    //     },
    //     updateXY: function (event) {
    //         this.x = event.offsetX;
    //         this.y = event.offsetY;
    //     },
    //     logName: function () {
    //
    //     },
    //     logAge: function () {
    //
    //     },
    //     addToA:function(){
    //         return this.a+this.age;
    //     },
    //     addToB:function () {
    //         return this.b+this.age;
    //
    //     }
    // },
    computed:{
        addToA:function(){
            return this.a+this.age;
        },
        addToB:function () {
            return this.b+this.age;

        }
    }
});