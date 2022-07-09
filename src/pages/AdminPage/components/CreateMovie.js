import {useSelector} from "react-redux";
import {useState} from "react";

function CreateMovie() {
    const categories = useSelector((state)=>state.movieReducer.categories)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')

    return (<form >
        <label> Введите название фильма </label>
        <input onChange={e=>setTitle(e.target.value)}/>
        <br/>
        <br/>
        <label> Введите описание фильма </label>
        <textarea onChange={e=>setDescription(e.target.value)}/>
        <br/>
        <br/>
        <label> Выберите категорию фильма </label>
        <select onChange={e=>setCategory(e.target.value)}>{categories.map((category)=><option key={category.id} value={category.id}>{category.category}</option>)}</select>
        <button onClick={} ></button>
    </form>)
}

export default CreateMovie;

