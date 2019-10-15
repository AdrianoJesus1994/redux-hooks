import React from 'react';
import { useSelector, useDispatch } from "react-redux";

export default function CoursesList(props: any) {
  const courses: string[] = useSelector((state: any) => state.data);
  const dispatch = useDispatch();


  function addCourse() {
    dispatch({type: 'ADD_COURSES', title: 'MongoDB'});
  }

  return (
    <>
      <ul>
        {
          courses.map((c: string, i: number )=> <li key={i}>{c}</li>)
        }
      </ul>
      <button type="button" onClick={addCourse}>Adicionar</button>
    </>
  );
}
