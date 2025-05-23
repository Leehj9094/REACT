
import { useState,useContext } from "react";
import Son_02 from "./Son_02";
import MyContext from "./MyContext";
// 하위컴포넌트 -> 상위컴포넌트 전달(callback함수 전달)
const Parent_02 = () => {
    const [name, setName] = useState('Mo');
    const {globalState, setGlobalState} = useContext(MyContext);
    const handleNameChange = (name) =>{
        setName(name);
    }
    // useEffect(()=> {        // 상태값이 변경될 때 리턴으로 새로고침을 해줌 
    //     console.log('부모에서 자식으로 전달된 name 값이 변경되었습니다.');
    // },[name])
    return (
        <div>
            <h1>Parent_02</h1>
            부모가 가지는 상태값 : {name} <br/>
             전역변수 : {globalState} <br/>
            전역변수 변경 : <button>변경하기</button>
            <hr/>
            <Son_02 name={name} handleNameChange={handleNameChange} />
        </div>
    )
}

export default Parent_02;