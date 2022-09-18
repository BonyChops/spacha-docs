import React, { useState } from 'react';
import { Spacha, SpachaImage } from 'react-spacha';
import Translate, { translate } from '@docusaurus/Translate';

export const SpachaPlayground = (props) => {
    const [message, setMessage] = useState("");
    const [price, setPrice] = useState(500);
    const [userName, setUserName] = useState("Spacha User");
    const [theme, setTheme] = useState("auto");
    const [squareImage, setSquareImage] = useState(false);
    const [iconSrc, setIconSrc] = useState("");
    const [iconImg, setIconImg] = useState(null);
    const [canvasMode, setCanvasMode] = useState(false);

    console.log(iconImg);

    const download = () => {
        const canvas = document.getElementById("spc-canvas");
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "spc.png";
        link.click();
    }

    const changeHandler = (e) => {
        setIconSrc(e.target);
        const { files } = e.target;
        var fileReader = new FileReader();
        fileReader.onload = (function () {
            setIconSrc(fileReader.result);
            const img = new Image();
            img.onload = function () {
                setIconImg(img);
            }
            img.src = fileReader.result;
        });
        fileReader.readAsDataURL(files[0]);
    }

    console.log(iconSrc);

    return (<div className=''>
        <div style={{
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            marginBottom: "10px"
        }}>
            {!canvasMode && <Spacha
                price={price}
                message={message}
                theme={theme !== "auto" ? theme : null}
                user={{
                    name: userName,
                    img: iconImg ? iconImg : null
                }}
                imgOption={{
                    square: squareImage
                }}
            />}

            {canvasMode && <SpachaImage
                price={price}
                message={message === "" ? null : message}
                theme={theme !== "auto" ? theme : null}
                user={{
                    name: userName,
                    img: iconImg ? iconImg : null
                }}
                imgOption={{
                    square: squareImage
                }}
                width={600}
            />}
        </div>


        <table style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "table"
        }}>
            <tr>
                <th><Translate>Message</Translate></th>
                <th><input
                    id="primary_color"
                    className=""
                    value={message}
                    onChange={e => { setMessage(e.target.value) }}
                    type="text"
                    style={{
                        height: "40px",
                        borderRadius: "10px",
                        fontSize: "20px"
                    }}
                /></th>
            </tr>
            <tr>
                <th><Translate>Price</Translate></th>
                <th><input
                    id="primary_color"
                    className=""
                    value={price}
                    onChange={e => { setPrice(e.target.value) }}
                    type="number"
                    style={{
                        height: "40px",
                        borderRadius: "10px",
                        fontSize: "20px"
                    }}
                /></th>
            </tr>
            <tr>
                <th><Translate>User Name</Translate></th>
                <th><input
                    id="primary_color"
                    className=""
                    value={userName}
                    onChange={e => { setUserName(e.target.value) }}
                    type="text"
                    style={{
                        height: "40px",
                        borderRadius: "10px",
                        fontSize: "20px"
                    }}
                /></th>
            </tr>
            <tr>
                <th><Translate>Image URL</Translate></th>
                <th><input type="file" accept="image/*"
                    onChange={changeHandler}
                    style={{
                        height: "40px",
                        fontSize: "18px"
                    }} /></th>
            </tr>
            <tr>
                <th><Translate>Theme</Translate></th>
                <th>
                    <select
                        name="theme"
                        id="theme"
                        value={theme}
                        onChange={e => { setTheme(e.target.value) }}
                        style={{
                            height: "40px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            width: "100%"
                        }}>
                        <option value="auto">Auto</option>
                        <option value="blue">Blue</option>
                        <option value="lightblue">Light Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                        <option value="red">Red</option>
                    </select></th>
            </tr>
            <tr>
                <th><Translate>Square Image</Translate></th>
                <th>
                    <input type="checkbox" onChange={e => setSquareImage(e.target.checked)} /></th>
            </tr>
            <tr>
                <th><Translate>Image View(Canvas)</Translate></th>
                <th>
                    <input type="checkbox" onChange={e => setCanvasMode(e.target.checked)} /></th>
            </tr>
            {canvasMode && <tr>
                <th><Translate>Download as Image</Translate></th>
                <th><button class="button button--secondary button--lg"
                    onClick={() => { download() }}
                    style={{
                        marginBottom: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}>Download</button></th>

            </tr>}
        </table>

    </div>)
}