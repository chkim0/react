//npm i axios
import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Department() {
    // 절대경로
    const path = process.env.PUBLIC_URL;
    // members 상태관리
    const [Members, setMembers] = useState([]);

    // 화면 처음 시작시
    useEffect(() => {
        // members.json 정보를 가져와 json 화
        axios.get(`${path}/DB/members.json`).then((json) => {
            setMembers(json.data.members);
        });
    }, []);

    return (
        <Layout name={'Department'}>
            {/* Members 배열의 반복 */}
            {Members.map((data, index) => {
                // 값 호출
                return (
                    <article key={index}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`${path}/img/${data.pic}`} alt={data.name} />
                            </div>
                            <h3>{data.name}</h3>
                            <p>{data.position}</p>
                        </div>
                    </article>
                );
            })}


        </Layout>
    );
}