import React, { memo, useEffect, useRef, useState } from "react";
import '../../styles/VoteOption.scss'
import logo from '../../assets/logo.png'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { voteOptions } from "../../utils/contants";
import Button from "../buttons/Button";
const VoteOption = ({ nameProduct, handleSubmitVoteOption }) => {
    const modalRef = useRef()
    const [chosenScore, setChosenScore] = useState(null)
    const [comment, setComment] = useState('')
    const [score, setScore] = useState(null);
    useEffect(() => {
        modalRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' })

    }, [])
    return (
        <div onClick={e => e.stopPropagation()} ref={modalRef} className="voteOption_container" >
            <img src={logo} alt="logo" className="voteOption_logo"></img>
            <h2 className="voteOption_name">{`Voting the product ${nameProduct}`}</h2>
            <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Type something" className="voteOption_textarea" cols='30' rows='10'></textarea>
            <div className="voteOption_options">
                <p>How do you like this product?</p>
                <div className="voteOption_star">
                    {voteOptions.map(el => (
                        <div className="voteOption_box" key={el.id} onClick={() => { setScore(el.id); setChosenScore(el.id) }}>
                            {(Number(chosenScore) && chosenScore >= el.id) ? <AiFillStar color='orange' /> : <AiFillStar color="gray" />}
                            <span>{el.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Button handleOnClick={handleSubmitVoteOption({ comment, score })} fw>Submit</Button>
        </div>
    )
}
export default memo(VoteOption);