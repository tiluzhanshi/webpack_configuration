# loader执行顺序
- Pitching阶段： post，inline，normal，pre
- Normal阶段：pre，normal，inline，post

加入 !   前缀禁用配置文件中的普通loader，比如：require("!raw!./script.coffee")  
加入 !!  前缀禁用配置文件中所有的loader，比如：require("!!raw!./script.coffee")  
加入 -!  前缀禁用配置文件中的pre loader和普通loader，但是不包括post loader，比如：require("!!raw!./script.coffee")  

module.rules 会先对该资源文件的所有符合条件的 loader 进行排序（按照 enforce，post loader 在最左边，pre loader 在最右边），然后转换成 request 的格式。有一点注意的是：对于 enforce: 'post' 的 loader 会在前面加上 !!，而 enforce: 'pre' 的 loader 会在前面加上 -!，其他的都是加 ! 了


根据 pitch 函数的规则，pitcher loader 后面的 loader 都会被跳过，这个时候开始编译这个返回的 js module。相关的内容为：

rules中的匹配loader是从上向下执行的，每个规则中的loader是从后向前执行的；

## 情况一：
有二个loader,分别打印出`console.log("define-loader1")`和`console.log("define-loader2")`，二个pitch分别打印出`console.log("pitch1")`和`console.log("pitch2")`，第一个loader的pitch无返回值，第二个loader的pitch有返回值;
**结果：**
pitch1  
pitch2  
define-loader1  

匹配多个规则的情况下：pitch从上向下执行，loader是从下向上执行

```javascript
{
    // 如果二个只在参数上不一样的匹配的话，优化匹配不参参数的，但是pitch和普通一样，
                resource:{
                    test:(r) =>{

                        return r.includes(".css")
                    }
                },
                resourceQuery: (query)=>{
                    console.log(query)
                    return query == "?inline"
                },
                use: [{
                        loader: "define-loader",
                        options: {
                            // enforce: "post"
                        }
                    }

                ],
            },
            {
                resource:{
                    test:(r) =>{

                        return r.includes(".css")
                    }
                },
                use: [{
                        loader: "define-loader2",
                        options: {
                            // enforce: "post"
                        }
                    }

                ],
            },
``·
