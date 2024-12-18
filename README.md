```import {useTodo} from './hooks/useTodos';```
```import {useTheme} from './hooks/useTheme;```
```import Footer from './components/Footer';```
在src/App引入三个自定义hook。

```const initialTodos = [

{id:'001',name:'1',done:true},

{id:'002',name:'2',done:true},

{id:'003',name:'3',done:false},

{id:'004',name:'4',done:false}

];
```
在src/App.jsx中这段代码可以更改初始数据。
```
const loading = useLoading(2000);
```
更改括号中的数字，可以改变页面加载时长。

