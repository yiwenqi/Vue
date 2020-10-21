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

      
