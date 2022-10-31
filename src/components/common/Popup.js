import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence, } from 'framer-motion';

//팝업 컴포넌트 생성 props으로 setOpen 변수 가져옴
const Popup = forwardRef((props, ref) => {


    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),

        };


    });

    useEffect(() => {
        Open ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [Open]);
    //윹튜브 버전
    // useEffect(() => {
    //     // 팝업이뜨면
    //     document.body.style.overflow = "hidden";
    //     // 사라지면
    //     return () => {
    //         document.body.style.overflow = "auto";
    //     }
    // }, []);


    return (

        <AnimatePresence>
            {Open && (
                // aside pop 호출
                <motion.aside className="pop"
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360, transition: { duration: 2 } }}
                    exit={{ opacity: 0, scale: 0, rotate: 0, transition: { duration: 1 } }} >
                    {/* iframe 값 가져옴 */}
                    <motion.div className="con"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
                        exit={{ opacity: 0, delay: 0.5 }}>{props.children}</motion.div>
                    {/* 닫기 누르면 open값을 false로 */}
                    <motion.span
                        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 1 } }} className="close" onClick={() => setOpen(false)}>close</motion.span>
                </motion.aside>
            )}
        </AnimatePresence>
    );
});
export default Popup;

/**
 forwardRef 
 단계1 - 기존의 컴포넌트 함수를 popup이라는 컴포넌트 함수를 대입형(선언형을 대입형으로 전환해줘야한다)
    
 단계2 - 해당 화살표함수를 forwordRef로 감싸고 인수로 전달한다 

 단계3 - 화살표함수 (forwardRef로 전달되는) 두번째 인수로 ref추가 

 단계4 - forwardRef안쪽에 useImperativeHandle함수를 호출한다 
 
 단계5 - 해당함수를 객체를 반환해서 해당 객체값을 부모 컴포넌트로 전달 

 단계6 - 부모컴포넌트에 useRef로 forwardRef로 전달되는 자식 컴포넌트를 참조한다 

 단계7 - 참조 객체는 useImperativeHandle
 */