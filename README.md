
# 12.19 使用了Mui现有的组件
**输入框**
```
<TextField

fullWidth

value={inputValue}

onChange={e => setInputValue(e.target.value)}

onKeyDown={e => e.key === 'Enter' && onAddTodo()}

placeholder="请输入任务名称，按回车确认"

variant="outlined"

style={{ marginBottom: '15px' }}

/>
```
`TextField` 组件的宽度为100%，fullWidth使其填满其父容器的宽度，如果要更改其长度可以修改style：```style={{ width: '300px', marginBottom: '15px' }}```

**任务列表**
```<List>

{todos.map((todo, index) => (

<ListItem key={index}>

<Checkbox

checked={todo.completed}

onChange={() => onToggleTodo(index)}

/>

<ListItemText primary={todo.text} />

<Button variant="contained" color="primary" onClick={() => onDeleteTodo(index)} style={{ marginLeft: '10px' }}>

删除

</Button>

</ListItem>

))}

</List>
```
Buttond的color可以直接设置为 'primary'、'secondary'、'default' 等预定义的颜色值，或者自定义。
![输入图片说明](/imgs/2024-12-19/Ca56YolQO9x73QiB.png)

