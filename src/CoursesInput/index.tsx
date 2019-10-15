import React, {useState} from 'react';
import { useDispatch } from "react-redux";


const CoursesInput = () => {
  const [course, setCourse] = useState('');
  const dispatch = useDispatch();

  const onSubmitiCourse = () => {
    console.log(course);
    dispatch({type: 'ADD_COURSES', title: course});
    setCourse('');
  }

  const onHandleInput = (e: any) => {
    setCourse(e.target.value);
  }

  return(
    <div>
      <input type="text" value={course} onChange={onHandleInput}/>
      <button type="button" onClick={onSubmitiCourse}>Salvar</button>
    </div>
  )
};

export default CoursesInput;
