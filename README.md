# Vue-入门与实战学习
vue入门学习

    第一天学习：
      v-cloak 能够解决 插值表达式闪烁的问题
      
      v-text    默认v-text是没有闪烁问题的 ，但是v-text会覆盖标签中的内容 ,但是插值表达式
                只会替换自己的这个占位符，不会把整个元素覆盖
               
      v-html    html语句需要放在v-html中才能解析
                eg: <div v-html="<h1>我是一个h1标签<h1>"></div>
               
      v-bind    属性绑定 Vue提供的属性绑定机制  缩写是 : 
      v-on      事件绑定 Vue提供的事件绑定机制 缩写是 @ 
      
      
     事件修饰符: 
     
        .stop     阻止冒泡   事件修饰符的使用方法
        .prevent  阻止默认行为
        .capture  实现捕获触发机制（由外向内触发的机制）
        .self     实现只有点击当前元素的时候才会触发事件处理函数
        .once     只触发一次处理函数
        
        
        
        <!--演示: .stop 和 .self 的区别-->
            <!-- <div class="outer" @click="div2Hand">
                <div class="inner" @click="divHandler">
                    <input  type="button" value="戳他" @click.stop="btnHandler">
                </div>
            </div> -->
            <!-- .self只会阻止自己身上冒泡行为的触发，并不会真正阻止冒泡行为的触发-->
            <div class="outer" @click="div2Hand">
                <div class="inner" @click.self="divHandler">
                    <input  type="button" value="戳他" @click.stop="btnHandler">
                </div>
            </div>
            
            
      v-bind    只能实现数据的单向绑定，从M自动绑定到V，无法实现双向绑定
      
      v-model   可以实现表单元素和model中数据的双向绑定
      注意: v-model 只能运用在表单元素中:
             input(radio text address email....) select checkbox textarea
     
     
     第二天学习
        1.vue中通过属性绑定为元素设置class样式   
        
                 .red{
                        color: red;
                    }

                    .thin{
                        font-weight: 200;
                    }

                    .italic{
                        font-style: italic;
                    }

                    .active{
                        letter-spacing:0.5em;
                    }
                </style>
                <body>
                    <div id="app">
                        <!--原始js-->
                        <h1 class="red thin italic">这是一个很大的h1！</h1>


                        <!--第一种使用方式直接转递一个数组，注意:这里的 class 需要使用v-bind绑定-->
                        <h1 :class="['thin','italic','active']">这是一个很大的H1，大到无法想象！！！</h1>

                        <!--在数组中使用三元表达式-->
                        <h1 :class="['thin','italic',flag?'active':'']">这是一个很大的H1，大到无法想象！！！</h1>

                        <!--在数组中使用 对象来代替三元表达式 ，提高代码的可读性-->
                        <h1 :class="['thin','italic',{'active':flag}]">这是一个很大的H1，大到无法想象！！！</h1>

                        <!--在为class 使用 v-bind绑定 对象的时候，对象的属性是类名，由于对象的属性可带引号
                        也可不带引号  属性的值 是一个标识符-->
                        <h1 :class="classobj">这是一个很大的H1，大到无法想象！！！</h1>
                    </div>
                    
         2..vue中通过属性绑定为元素绑定style行内样式
                 <h1 :style="[styleobj01,styleobj02]">这是一个h1</h1>
                     
         3.v-for指令的四种使用方法
                 <p v-for="item in list">{{item}}</p>

                <p v-for="(item , i) in list">索引值:{{i}}-----{{item}}</p>

                <!--遍历数组-->
                <p v-for="(user, i) in listobj">{{ user.id }} ----{{ user.name }}---索引号:{{ i }}</p>

                <!--遍历对象 注意:在遍历对象身上的键值对的时候，除了又val key ，在第三个位置还有一个索引 -->
                <p v-for="(val, key, i) in user" >值是:{{val}} --- 属性是:{{key}} -- 索引:{{i}}</p>

                <!--迭代数字 注意:如果使用v-for迭代数字的话，前面 count 值从 1 开始-->
                <p v-for="count in 10">这是第 {{count}} 次循环</p>
                
                
                list:[1,2,3,4,5,6],
                listobj:[
                    { id: 1, name:'zs1'},
                    { id: 2, name:'zs2'},
                    { id: 3, name:'zs3'},
                    { id: 4, name:'zs4'}
                
                ],
                user:{
                    id:1,
                    name:'托尼',
                    gender:'男'
                }
                
                
                注意： <!--key 是v-for循环里唯一标识 注意循环时，key属性只能使用 number 或者string-->
                        <!--注意: key 在使用的时候， 必须使用v-bind属性绑定的形式，指定key的值-->
                        <!-- 在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果v-for有问题，必须在使用
                        v-for的同时，指定唯一的字符串/数字 类型:key 值-->
                        <!-- 如果不使用key 则每次循环的数据没有标识 ，则无法辨识-->
                        <!--当在组件中使用v-for时 ， key是必须的-->
                        
                        
        4.v-if和v-show的学习
                    <!-- <input type="button"value="控制" @click="toggle"> -->
                    <input type="button"value="控制" @click="flag=!flag">

                    <!--v-if 的特点:每次都会重新删除或者创建元素-->
                    <!--v-show 的特点: 每次都不会重新进行DOM的删除和创建操作，只是切换了元素的 display:none 样式-->

                    <!-- v-if 有较高的切换性能消耗-->
                    <!--v-show 有较高的初始渲染消耗-->

                    <!-- 如果元素涉及到频繁的切换 ，最好不要使用v-if 而推荐使用v-show-->
                    <!--如果元素可能永远也不会被显示出来被用户，则推荐使用v-if -->
                    <h3 v-if="flag">这是用v-if控制的元素</h3>
                    <h3 v-show="">这是用v-show控制的元素</h3>
                    
                    
                    
          综合案例：品牌案例
          
    第三天学习
        1.全局过滤器的使用
        
          <!-- 过滤器可以多次调用 比如疯狂后面还可以跟过滤器 -->
        <p>{{ msg | msgFormat('疯狂')}}</p>
        
        
             //定义一个全局的过滤器 ，名字叫做msgFormat
        Vue.filter('msgFormat' ,function(msg, arg){
            //字符串的 replace 方法，第一个参数 除了可以接收一个字符串还可以是一个正则
           return msg.replace(/单纯/g , arg)
        })
        
          new Vue ({
            el:'#app',
            data:{
                msg:'单纯的我 ,  最单纯的男人, 如今也不再单纯了'
            },
            methods:{},
            //也可以在此处定义一个私有过滤器，过滤器调用的时候采用的就近原则，如果与全局过滤器重名了优先调用私有过滤器
            filters:{
                dateFormat:function(){
                    //里面则是需要处理的操作
                }
            }

        })
        
        2.事件修饰符
            <!-- .stop 阻止冒泡   事件修饰符的使用方法-->
            <!-- <div class="inner" @click="divHandler">
                <input  type="button" value="戳他" @click.stop="btnHandler">
                </div>
             -->
                <!-- .stop可以阻止冒泡的 -->
                <!-- 如果不阻止，在点击button时，会触发div的点击事件，这样的触发叫做冒泡 -->

                <!-- 使用 .prevent 阻止默认行为-->
                <!-- <a href="http://www.baidu.com" @click.prevent="linkClick">有问题，先百度</a> -->

                 <!--使用 .capture 实现捕获触发机制（由外向内触发的机制）-->
            <!-- <div class="inner" @click.capture="divHandler">
                    <input  type="button" value="戳他" @click.stop="btnHandler">
                  </div>
             -->

             <!--使用.self 实现只有点击当前元素的时候才会触发事件处理函数-->
             <!-- <div class="inner" @click.self="divHandler">
                <input  type="button" value="戳他" @click.stop="btnHandler">
              </div> -->


              <!--使用 .once 只触发一次处理函数 -->
              <!-- <a href="http://www.baidu.com" @click.prevent.once="linkClick">有问题，先百度</a> -->

              <!--演示: .stop 和 .self 的区别-->
                <!-- <div class="outer" @click="div2Hand">
                    <div class="inner" @click="divHandler">
                        <input  type="button" value="戳他" @click.stop="btnHandler">
                    </div>
                </div> -->
                <!-- .self只会阻止自己身上冒泡行为的触发，并不会真正阻止冒泡行为的触发-->
                <div class="outer" @click="div2Hand">
                    <div class="inner" @click.self="divHandler">
                        <input  type="button" value="戳他" @click.stop="btnHandler">
                    </div>
                </div>
        
            3.自定义指令
                <label for="">
                        搜索关键字:
                        <!--注意: 自定义指令 前面都必须加 v- 以下面自定义指令v-focus为例  -->
                        <input type="text"  class="form-control" v-model="keywords" name="" id="search" v-focus v-color="'blue'" >
                    </label>
                    
                    <script>
                        // //原生js使用这种方法，但Vue不推荐直接对dom元素进行操作
                        // document.getElementById('serch').focus


                        //自定义指令  使用  Vue.directive() 定义 全局指令
                        //参数1 是指令的名称  注意，在定义的时候，指令的名称前面不需要加v— 前缀，
                        //但是在调用的时候必须加 V- 前缀
                        //参数2 是一个对象  这个对象身上 ，有一些指令钩子函数，这些函数可以在特点的阶段，执行相关操作
                        //指令定义提供 bind inserted update componentUpdate  unbind 这些钩子函数
                        Vue.directive('focus',{
                            bind:function(el){//没当指令绑定到元素上的时候，会立即执行这个bind函数 ，只执行一次
                                //在每个函数中，第一个参数永远是 el，表示 被绑定了指令的那个元素  ,el是一个原生的JS对象
                                //在元素 刚绑定了指令的时候 ，还没有插入到DOM中去 ，这个时候调用focus 方法没有作用
                                // el.focus()
                            },
                            inserted:function(el){ //inserted 表示元素 插入到DOM 中的时候 ，会执行inserted 函数
                                //应插入此处
                                el.focus()
                            },
                            updated:function(){ //当VNode更新时 ，会hi下update ，可能会触发多次

                            }
                        })

                        Vue.directive('color',{
                            //通过binding来获取 传递的值
                            bind:function(el,binding){
                                //  .name 获取指令名称 .value 获取指令绑定的值 是""内的东西 .expression 获取的是包含 "" 在内的表达式
                               el.style.color = binding.value
                            }

                        })


                        Vue.config.keyCodes.f2=113

                        new Vue({
                            el:'#app',
                            data:{
                                name:'',
                                id:'',
                                keywords:'',
                                newList:'',
                                list:[
                                    { id:1, name:'奔驰', ctime: new Date() },
                                    { id:2, name:'宝马', ctime: new Date()},
                                    { id:3, name:'法拉利', ctime: new Date()},
                                    { id:4, name:'长安', ctime: new Date()}
                                ]
                            },
                            methods:{

                                add(){
                                    var car = { id: this.id, name:this.name , ctime: new Date()}

                                     this.list.push(car)
                                },

                                del(id){

                                    var index = this.list.findIndex(item => {
                                        if(item.id == id ){
                                            return true;
                                        }
                                    })

                                    this.list.splice(index,1);
                                },

                                search(keywords){

                                    return this.list.filter(item => {

                                        if(item.name.includes(keywords)){
                                            return item
                                        }
                                    }) 
                                }
                            },


                            //自定义私有指令
                            directives : {
                                'fontweight' : {
                                    bind: function(el,binding){
                                        el.style.fontweight = binding.value
                                    }
                                },
                                'fontsize' : function(el,binding){ // 注意 : 这个function 等同于 把代码写道了 bind 和 update 中去
                                    el.style.fontsize = parseInt(binding.value)   +'px'
                                }
                            }
                        })
                    </script>
        

      
