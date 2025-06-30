import React from "react";
import group from "../../assets/js-group.png"
import "./group-info.css"

const Group_info = ()=> {
    return (
        <div className="group-info">
            <img src={group} alt="Imagem exemplo de grupo" />
            <div className="group-content">
                <h3>JS DEVs</h3>
                <div className="members-messages">
                <p>322 members</p>
                <hr />
                <p>122 messages</p>
                </div>
                <h3>About Group</h3>
                <p>Lorem ipsum dolor sit amet. In atque repudiandae eos soluta perferendis  vel inventore dolor est tempora ullam et similique nesciunt in similique quisquam. Ex autem culpa et unde natus At iure voluptatem a quidem  explicabo est aspernatur earum.</p>
                <h2>More Actions</h2>
                <button id="leave" >Leave Group</button>
                <button>Share Group</button>
            </div>
        </div>
    )
}

export default Group_info