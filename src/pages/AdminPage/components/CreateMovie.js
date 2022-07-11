import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {_createCategory, createMovieAdmin} from "../../../models/Movie/movie.reducer";

function CreateMovie() {
    const categories = useSelector((state)=>state.movieReducer.categories)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [addCategory,setAddedCategory] = useState('')
    const dispatch = useDispatch()
    return (<div>
        <label> Введите название фильма </label>
        <input onChange={e=>setTitle(e.target.value)}/>
        <br/>
        <br/>
        <label> Введите описание фильма </label>
        <textarea onChange={e=>setDescription(e.target.value)}/>
        <br/>
        <br/>
        <label> Выберите категорию фильма </label>
        <select onChange={e=>setCategory(e.target.value)}>{categories && categories.map((category)=><option key={category.id} value={category.id}>{category.category}</option>)}</select>
        <button onClick={()=>dispatch(createMovieAdmin({title,description,category}))}>Создать фильм</button>
            <br/>
            <label>Добавь категорию если надо </label>
            <input  placeholder={"Название категории"} onChange={e=>setAddedCategory(e.target.value)}/>
            <button onClick={()=>dispatch(_createCategory(addCategory))}>Добавить категорию</button>
        </div>
   )
}

export default CreateMovie;

