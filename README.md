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
      
