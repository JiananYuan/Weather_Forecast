var app = new Vue({
    el: "#app",
    data: {
        city: '',
        arr: []
    },
    methods: {
        getWeather: function() {
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + that.city)
            .then(function(response) {
                that.arr = response.data.data.forecast
                for (var i = 0; i < that.arr.length; ++i) {
                    switch (that.arr[i].type) {
                        case '晴':
                            that.arr[i].img = "晴.png";
                            break;
                        case '阴':
                            that.arr[i].img = "阴.png";
                            break;
                        case '多云':
                            that.arr[i].img = "多云.png";
                            break;
                        case '雷阵雨':
                            that.arr[i].img = "雷阵雨.png";
                            break;
                        case '小雨':
                            that.arr[i].img = "小雨.png";
                            break;
                        case '中雨':
                            that.arr[i].img = "中雨.png";
                            break;
                        case '暴雨':
                            that.arr[i].img = "暴雨.png";
                            break;
                        case '阵雨':
                            that.arr[i].img = "阵雨.png";
                            break;
                        case '大雨':
                            that.arr[i].img = "大雨.png";
                            break;
                        case '大暴雨':
                            that.arr[i].img = "大暴雨.png";
                            break;
                    }
                }
            }),function(err) {
                alert("获取失败")
            }
        },
        getWeather1: function() {
            this.city = '北京'
            this.getWeather();
        },
        getWeather2: function() {
            this.city = '上海'
            this.getWeather();
        },
        getWeather3: function() {
            this.city = '深圳'
            this.getWeather();
        },
        getWeather4: function() {
            this.city = '广州'
            this.getWeather();
        }
    }
})